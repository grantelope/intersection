import './App.css';

import Stage from './Stage';
import logo from './logo.svg';

/*
green: 8000
yellow: 2000
red: 10000

0-8000
green
red

8000-10000
yellow
red

10000 - 18000
red
green

18000 - 20000 
red
yellow

8000: ['green', 'red],
2000: ['yellow', 'red'],
8000: ['red', 'green'],
2000: ['red', yellow],

[8000, 2000, 1000]
[10000, 8000, 2000]
*/
function App() {
    return (
        <div className="App">
            <Stage />
        </div>
    );
}

export default App;
