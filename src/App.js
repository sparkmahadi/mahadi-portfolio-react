import Aos from 'aos';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/router';

function App() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
  },[])
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
