import * as React from "react";
import { Redirect } from "react-router";

import * as S from "./style";
import { logo } from "./../../assets";
import { submitLoginInfo } from "./../../service/post";
import { setToken } from "./../../service/localstorageservice";

interface Props {
  isLogin: boolean;
  handleLoginStatus(status: boolean): void;
  handleAdminStatus(status: number): void;
}

const Login: React.FC<Props> = ({
  isLogin,
  handleLoginStatus,
  handleAdminStatus
}) => {
  const [id, setId] = React.useState<string>("");
  const [pw, setPw] = React.useState<string>("");

  const submitAuthInfo = async () => {
    try {
      const { data } = await submitLoginInfo(id, pw);

      if (data.status === 200) {
        handleLoginStatus(true);
        handleAdminStatus(data.data.auth);
        setToken(data.data.token);
      } else {
        console.log(data.status);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <S.LoginContainer>
      {isLogin && <Redirect to="/" />}
      <S.Div>
        <S.Logo src={logo} />
        <S.InputId
          placeholder="ID"
          type="textbox"
          value={id}
          onChange={e => setId(e.target.value)}
        ></S.InputId>
        <S.InputPs
          placeholder="Password"
          type="password"
          value={pw}
          onChange={e => setPw(e.target.value)}
        ></S.InputPs>
        <S.Button onClick={() => submitAuthInfo()}>Login</S.Button>
      </S.Div>
    </S.LoginContainer>
  );
};

export default Login;
