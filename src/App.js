import React, { useState, useEffect  } from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = list.length;
  }, [count, list]);

  function handleKeyPress (event) {    
    if(event.key === 'Enter') {
      setList([...list, {name: name}]);
      setName('');
    }
  }

  return (
    <>
      <div className="App">
        {count} <button onClick={() => setCount(count + 1)}>Adicionar</button>
      </div>
      <div>
        {
          list.map((item,i) => (
            <li key={i}>{item.name}</li>
          ))
        }
      </div>
      <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} onKeyPress={handleKeyPress} /> 
        <button onClick={() => setList([...list, {name: name}])}>Add</button>
      </div>
    </>
  );
}

export default App;
