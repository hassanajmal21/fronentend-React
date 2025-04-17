
import './App.css';
import Navbar from './components/Navbar/Navbar1';
import Shop from './pages/shop';
import Shopcatagory from './pages/shopcatagory';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar /> 
        <Routes>
       <Route path='/' element={<Shop/>} />
       <Route path='/Men' element={<Shopcatagory category="Men"/>} />
       <Route path='/women' element={<Shopcatagory category="women"/>} />
       <Route path='/kids' element={<Shopcatagory  category="kids"/>} />
       <Route path="/product" element={<product/>}>
           <Route path = ":productid" element={<product/>} />
       </Route>
       <Route path='/' element={<cart/>} />
       <Route path='/login' element={<loginsignup/>} />
        </Routes>
  

     </BrowserRouter>
    </div>
  );
}

export default App;
