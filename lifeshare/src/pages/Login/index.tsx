import * as React from "react";

import * as S from "./style";

import {logo} from "./../../assets";

const Login: React.FC = () => {
    const [id, setId] = React.useState<string>("");

    const [pw, setPw] = React.useState<string>(""); 

    return (<S.LoginContainer>
        <S.Div>
        <S.Logo src={logo} />

       <S.InputId placeholder="ID" type="textbox" value={id} onChange={e => setId(e.target.value)} ></S.InputId>

        <S.InputPs placeholder="Password" type="password" value={pw} onChange={e => setPw(e.target.value)}></S.InputPs>
    
       <S.Button type="button">Login</S.Button>
       </S.Div>
    </S.LoginContainer>
    
)};

export default Login;
