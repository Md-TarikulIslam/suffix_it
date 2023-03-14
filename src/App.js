import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Main from './components/layout/Main';
import Work from './components/Work/Work';
import ScrollToTop from "react-scroll-to-top";


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Hero></Hero>
        },
        // {
        //   path:'/',
        //   element:<Work></Work>
        // },
        {
          path:'/about',
          element:<About></About>
        }
      ]
    },
 

  ])
  return (
    <div className="App">
       <ScrollToTop smooth fill="currentColor"
      viewBox="0 0 16 16"
      height="3em"
      width="3em"
        svgPath="M2 16a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 001 0z"/>
    <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
