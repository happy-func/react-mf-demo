import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
const InputNumber = React.lazy(() => import('sur/InputNumber'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense>
          <InputNumber />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
