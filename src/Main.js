
import React from 'react';

export default function Main({title, children}) {    
    return (        
        <main role="main" className="container">
            <div className="jumbotron">
                <h1>{title}</h1>                    
                <div>
                    {children}
                </div>
            </div>
        </main>
    )
}