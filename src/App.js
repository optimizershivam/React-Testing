import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [theme, settheme] = useState("light")
  return (
    <div className="App">
      <div>Click Me</div>
      <h3>Current Theme is {theme}</h3>
      <Button onClick={()=>{settheme(theme==="light" ? "dark" : "light")}}>Click Me</Button>
    </div>
  );
}

export default App;
