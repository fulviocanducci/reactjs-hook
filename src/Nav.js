import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Menus from './Menus';

export default function Nav() {    
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">            
                <Link to="/" className="navbar-brand">Top navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        {Menus.map((item, index) => (
                            <li className="nav-item active" key={index}>
                                <Link to={item.link} className="nav-link">{item.text}</Link>
                            </li>
                        ))}                             
                    </ul>
                </div>
            </nav>
            <Switch> 
                {Menus.map((item ,index)=> (<Route key={index} exact path={item.link} component={item.component} />))}
            </Switch>
        </>
    )
}