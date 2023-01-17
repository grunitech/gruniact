import React, { useEffect } from 'react';

declare global {
    const google: any;
}

export interface GoogleConnectProps {
    clientId: string;
}

export default function GoogleConnect({clientId}: GoogleConnectProps) {
    function handleLogin(res: { credential: string }) {
        console.log(res);
        fetch(`http://localhost:3003/google-login/${res.credential}`)
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('token', res.token);
            })
    }

    useEffect(() => {
        console.log('init');
        google.accounts.id.initialize({
            client_id: clientId,
            callback: handleLogin
        });

        google.accounts.id.prompt();

    }, []);

    function promptGoogle() {
        const parent = document.getElementById('ggg')
        console.log(parent);
        google.accounts.id.renderButton(parent, {type: 'icon'});
    }

    return (
        <>
            <div id="ggg"></div>
            <button onClick={() => promptGoogle()}>Connect me!</button>
        </>
    )
        ;
}
