import React, {useState, useEffect} from 'react'
import './App.scss';
import Home from './pages/Home'

function App() {

  const [offsetY, setOffsetY] = useState(0);
    
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <div>
      <Home handleScroll={handleScroll} offsetY={offsetY} setOffsetY={setOffsetY}/>
      
    </div>
  );
}

export default App;
