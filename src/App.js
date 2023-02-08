import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router/Router';
import background from './assets/background.jpg'

function App() {
  return (
    <div  style ={{ background: `url(${background})` }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
