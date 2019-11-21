import * as React from "react";

import * as S from "./style";

const Login: React.FC = () => (
    
    <S.LoginContainer>
        <S.Div>
       <S.InputId placeholder="ID" type="textbox"></S.InputId>

        <S.InputPs placeholder="Password" type="password"></S.InputPs>
    
       <S.Button type="button">Login</S.Button>
       </S.Div>
    </S.LoginContainer>
    
);

export default Login;
