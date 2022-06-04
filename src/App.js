import { Route, Routes } from 'react-router-dom';
import './_assets/css/bundle.css';
import './_assets/css/style.css';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import ShopSingle from './Components/Pages/ShopSingle';
import Dashboard from './Components/Admin/Dashboard';
import Dash from './Components/Admin/Dash';
import Products from './Components/Admin/Products';
import Category from './Components/Admin/Category';
import Tag from './Components/Admin/Tag';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddProduct from './Components/Admin/AddProduct';


function App() {
  //product show
  const [productShow,setProductShow]=useState([]);
   //category data show
  const [showCate,SetShowCate] = useState([]);
  //tag value show
 const [tagShow, setTagShow] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5050/categories').then(res=>{
      SetShowCate(res.data);
    }).catch();
  }, []);
  useEffect(() => {
    
    axios.get('http://localhost:5050/tags').then(res=>{
     setTagShow(res.data);
   }).catch();

  }, []);
  useEffect(() => {
    
   axios.get('http://localhost:5050/products').then(res=>{
    setProductShow(res.data);
    }).catch();

  }, []);
  //slug generator
  const makeSlug=(tagName)=>{
    let tag=tagName.split(' ');
    return tag.join('-').toLowerCase();
  }

  return (
    <>
      <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/shop' element={<Shop productShow={productShow} setProductShow={setProductShow} showCate={showCate} tagShow={tagShow} />}></Route>
            <Route path='/shop/:slug' element={<ShopSingle />}></Route>
            <Route path='/admin' element={<Dashboard />}>
                <Route path='/admin/dashboard' element={<Dash />}></Route>
                <Route path='/admin/products' element={ <Products productShow={productShow} />}></Route>
                <Route path='/admin/add-products' element={ <AddProduct tagShow={tagShow} showCate={showCate} makeSlug={makeSlug} />}></Route>
                <Route path='/admin/category' element={<Category showCate={showCate} makeSlug={makeSlug}/>}></Route>
                <Route path='/admin/tag' element={<Tag tagShow={tagShow} makeSlug={makeSlug} />}></Route>
            </Route>
          </Routes>
      <Footer />
    </>
  );
}

export default App;
