import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import cookies from 'react-cookies';

import Main from './Main';

export default function Login() {
    const cookieName = 'accessToken';    
    const [profile, setProfile] = useState(null);
    const [accessToken, setAccessToken] = useState(cookies.load(cookieName));

    useEffect(() => {
        
    },[accessToken])

    function handlerClick () {

    }

    function handlerResponseFacebook(response) {
        setProfile(response);
        setAccessToken(response.accessToken);
        cookies.save(cookieName, response.accessToken); 
    }

    return (        
        <>
            <Main title="Login Facebook">
                <div className="text-center">
                    <h3>Datas</h3>
                    { !accessToken ? (
                        <FacebookLogin
                            appId="500445857190303"
                            autoLoad={true}
                            fields="name,email,picture"
                            onClick={handlerClick}
                            callback={handlerResponseFacebook} 
                        />
                    ):(<div>Logado: {accessToken}</div>)}
                    <div>
                        {(profile) ? (
                            <>
                            <div>
                                {profile.id} - {profile.name}
                            </div>                            
                            <div>
                                <img src={profile.picture.data.url} height={profile.picture.data.height} width={profile.picture.data.width} border="0" alt="" />
                            </div>
                            <div>
                                {profile.email}
                            </div>
                            </>
                        ):(
                            <div>Sem informações do usuário</div>
                        )}
                    </div>
                </div>
            </Main>
        </>
    )
}