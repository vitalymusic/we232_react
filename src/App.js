// import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import { Tabs } from './components/Tabs';
// import { Cards } from './components/Cards';
import { Users } from './components/Users';

function App() {
  return (
    <div className='app'>
        <h1>Hello </h1>
        <Navbar></Navbar>
        <Users></Users>
        <Tabs></Tabs>
    </div>
  );
}

export default App;
