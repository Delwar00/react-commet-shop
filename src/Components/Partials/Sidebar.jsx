import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import image2 from '../../_assets/images/shop/2.jpg'
import image3 from '../../_assets/images/shop/3.jpg'
import image5 from '../../_assets/images/shop/5.jpg'

const Sidebar = ({setProductShow,showCate,tagShow}) => {
    //input search 
    const [search,setSearch]=useState('');
    useEffect(() => {
        if(search !==''){
            axios.get(`http://localhost:5050/products?q=${search}`).then(res=>{
                setProductShow(res.data);
            }).catch();
        }
    });
    //category filter
    const handelCatFilter=(e,id)=>{
        e.preventDefault();
        setSearch('');
        axios.get(`http://localhost:5050/categories/${id}/products`).then(res=>{
            setProductShow(res.data);
        }).catch();
        
    }
    //tag filter
    const handleTagFilter=(e,id)=>{
        e.preventDefault();
        setSearch('');
        axios.get(`http://localhost:5050/tags/${id}/products`).then(res=>{
            setProductShow(res.data);
        }).catch();
    }
  return (
    <>
        <div className="sidebar">
                    <div className="widget">
                        <h6 className="upper">Search</h6>
                        <form>
                            <input type="text" placeholder="Search.." value={search} onChange={e=>setSearch(e.target.value)} className="form-control" />
                        </form>
                    </div>
                    <div className="widget">
                    <h6 className="upper">Categories</h6>
                    <ul className="nav">
                        {
                            showCate.map(data=>
                                <li><a onClick={(e)=>handelCatFilter(e,data.id)} href={data.id}>{data.name}</a></li>
                             )
                        }
                        
                       
                    </ul>
                    </div>
                    <div className="widget">
                        <h6 className="upper">Popular Tags</h6>
                        <div className="tags clearfix">
                            {
                                tagShow.map(data=>
                                    <a onClick={(e)=>handleTagFilter(e,data.id)} href={data.id}>{data.name}</a>
                                )
                            }
                            
                        </div>
                    </div>
                    <div className="widget">
                    <h6 className="upper">Trending Products</h6>
                    <ul className="nav product-list">
                        <li>
                        <div className="product-thumbnail">
                            <img src={image2} alt="" />
                        </div>
                        <div className="product-summary"><Link to="#">Premium Suit Blazer</Link><span>$199.99</span>
                        </div>
                        </li>
                        <li>
                        <div className="product-thumbnail">
                            <img src={image3} alt="" />
                        </div>
                        <div className="product-summary"><Link to="#">Vintage Sweatshirt</Link><span>$199.99</span>
                        </div>
                        </li>
                        <li>
                        <div className="product-thumbnail">
                            <img src={image5} alt="" />
                        </div>
                        <div className="product-summary"><Link to="#">Reiss Vara Blazer</Link><span>$199.99</span>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
    </>
  )
}

export default Sidebar