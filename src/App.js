import './App.css';
import Create from './components/Create';
import Model from './components/Model';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';
import Stories from './components/Stories';
import Context from './Global/Context';

function App() {
  return (
    <>
    <Context>
      <Navbar/>
      <div className='container'>
        <Stories/>
        <Create/>
        <Posts/>
        <Sidebar/>
      </div>
      <Model/>
    </Context>
    </>
  );
}

export default App;
