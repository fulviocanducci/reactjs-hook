import React, { useState, useEffect }from 'react';
import Main from './Main';

export default function Github () {
    const [name, setName] = useState('fulviocanducci');
    const [resp, setResp] = useState([]);

    useEffect(() => {
        
    },[resp]);

    function handlerFind() {
        if (name && name !== '' && name.trim() !== '') {
            fetch(`https://api.github.com/users/${name}/repos`)
                .then(response => response.json())
                .then(response => setResp(response));
            return true;
        }
        alert('[Error]');
        return false;
    }

    function handlerKeyPress(e) {
        if (e.key === 'Enter') {
            handlerFind();
        }
    }
    
    return (
        <>
            <Main title="Github Repositories">
                <div className="text-center">
                    <h3>List of Repository: {name}</h3>
                </div>
                <div className="mt-2">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <input type="text" 
                                placeholder="Enter the name user repository github"
                                className="form-control" 
                                onKeyPress={handlerKeyPress} 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <button 
                                onClick={handlerFind} 
                                className="btn btn-primary btn-block">
                                    Find
                            </button>  
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <ul>
                    {resp.map((item, index) => (
                        <li key={index}>{item.name} - {item.language}</li>
                    ))}
                    </ul>
                </div>
            </Main>
        </>
    )
}