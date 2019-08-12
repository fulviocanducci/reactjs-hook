import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
    const list = [
        { link: '/', 'text': 'Home' },
        { link: '/counter', 'text': 'Count' },
        { link: '/todos', 'text': 'Todos' },
        { link: '/about', 'text': 'About' }
    ];
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">            
            <Link to="/about" className="navbar-brand">Top navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    {list.map((item, index) => (
                        <li className="nav-item active" key={index}>
                            <Link to={item.link} className="nav-link">{item.text}</Link>
                        </li>
                    ))}                             
                </ul>
            </div>
        </nav>
    )
}