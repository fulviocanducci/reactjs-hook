import React, { useState }from 'react';
import Main from './Main';

export default function Todos () {
    
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');

    function handlerAdd() {
        if (todo && todo !== '' && todo.trim() !== '') {
            setTodos([...todos, {name: todo}]);
            setTodo('');
            return true;
        }
        alert('[Error]');
        return false;
    }

    function handlerKeyPress(e) {
        if (e.key === 'Enter') {
            handlerAdd()
        }
    }

    return (
        <Main title="Todos">
            <>
                <div className="text-center">
                    <h3>List of Todos</h3>
                    <ul className="list-group text-left">
                        {todos.map((item, index) => (
                            <li className="list-group-item" key={index}>{item.name}</li>
                        ))}                        
                    </ul>
                </div>
                <div className="mt-2">
                    <div className="row">
                        <div className="col-md-6 mt-3">
                            <input type="text" 
                                className="form-control" 
                                onKeyPress={handlerKeyPress} 
                                value={todo} 
                                onChange={(e) => setTodo(e.target.value)} 
                            />
                        </div>
                        <div className="col-md-6 mt-3">
                            <button 
                                onClick={handlerAdd} 
                                className="btn btn-primary btn-block">
                                    Add
                            </button>  
                        </div>
                    </div>
                </div>
            </>
        </Main>   
    )
}