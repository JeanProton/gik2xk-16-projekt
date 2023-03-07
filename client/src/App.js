import './App.css';
import StoreNav from './views/components/StoreNav';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';


function App() {
    return (
        <div className='App'>
            <StoreNav />
            <div class="container">
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/produkter' element={<Products></Products>}></Route>
                </Routes>
            </div>        
        </div>
    );
}

export default App;
