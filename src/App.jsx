import React from 'react'; 
import './App.css';
import Team from './Component/Team.jsx';
import Nav from './Component/Nav.jsx';
import Car from './Component/Car.jsx';

function App() {
    return (
        <div className='App'>
            <Nav/>
            <Car/>

            <Team/>
        </div>
    );
}

export default App;
