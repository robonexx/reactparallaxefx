import React, {useState, useEffect} from 'react'
import './App.scss';
import HomeDesktop from './pages/HomeDesktop'

function App() {

  const [offsetY, setOffsetY] = useState(0);
    
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <div>
      <HomeDesktop handleScroll={handleScroll} offsetY={offsetY} setOffsetY={setOffsetY}/>
      
    </div>
  );
}

export default App;
