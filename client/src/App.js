import './App.css';
import StoreNav from './views/components/StoreNav';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';


function App() {
    return (
        <div className='App'>
            <StoreNav />
            <div>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/produkter' element={<Home></Home>}></Route>
                </Routes>
            </div>        
        </div>
    );
}

export default App;
