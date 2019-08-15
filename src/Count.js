import React, { useState } from 'react';
import Main from './Main';

export default function Count () {
    const [number, setNumber] = useState(0);
    return (        
        <Main title="Counter">
            <>
                <div className="text-center mt-2">
                    <h3>{number}</h3>
                </div>
                <div className="mt-2">
                    <button onClick={() => setNumber((number + 1))} className="btn btn-primary btn-block">Add</button>
                </div>
            </>
        </Main>        
    )
}