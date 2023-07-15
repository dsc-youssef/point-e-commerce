import { useState } from 'react';

function Calculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('0');
  
  const handleButtonClick = (value:string) => {
    switch (value) {
      case '=':
        calculateResult();
        break;
      case 'C':
        clear();
        break;
      case 'back':
        backspace();
        break;
      default:
        setEquation(equation + value);
        break;
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(equation).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setEquation('');
    setResult('0');
  };

  const backspace = () => {
    setEquation(equation.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div className="card-header">
        <h3 className="card-title"><i className="fal fa-calculator" />Calculator</h3>
      </div>
      <input className="equation" disabled type="text" value={equation} />
      <input className="result" disabled type="text" value={result} />
      <div className="card-body">
        <div className="row-buttons">
          <button className="btn" onClick={() => handleButtonClick('(')}>(</button>
          <button className="btn" onClick={() => handleButtonClick(')')}>)</button>
          <button className="btn" onClick={() => handleButtonClick('C')}>C</button>
          <button className="btn fal fa-arrow-left" onClick={() => handleButtonClick('back')}></button>
        </div>
   
        <div className="row-buttons">
          <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
          <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
          <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
          <button className="btn" onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row-buttons">
          <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
          <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
          <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
          <button className="btn" onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row-buttons">
          <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
          <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
          <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
          <button className="btn" onClick={() => handleButtonClick('*')}>×</button>
        </div>
        <div className="row-buttons">
          <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
          <button className="btn" onClick={() => handleButtonClick('.')}>.</button>
          <button className="btn" onClick={() => handleButtonClick('=')}>=</button>
          <button className="btn" onClick={() => handleButtonClick('-')}>-</button>
        </div>
      </div>
</div>
);
}

export default Calculator;