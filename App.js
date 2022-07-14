import 'normalize.css';
import React from 'react';
import './css styles/style.css';
import TodosApp from './components/TodosApp';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <TodosApp/>
      </div>
    </div>
  );
}

export default App;
