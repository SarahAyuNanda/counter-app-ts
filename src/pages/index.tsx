import React from "react";

const App = () => {
  return (
    <div className='main-page'>
      <h2>Counter</h2>
      <div className='main-content'>
        <button>-</button>
        <p className='counter-result'>0</p>
        <button>+</button>
      </div>
      <button>Reset</button>
    </div>
  );
};

export default App;