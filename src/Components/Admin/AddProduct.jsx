import axios from 'axios';
import React, { useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//set value
const AddProduct = ({showCate,tagShow,makeSlug}) => {
    const [products, setProducts] = useState({
        name:'',
        slug:'',
        regular_price:'',
        sale_price:'',
        rating:'',
        desc:'',
        catId:'',
        tagId:'',
        photo:''
    });
//submit value
const handleProductAdd=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5050/products',{
        name:products.name,
        slug:makeSlug(products.name),
        regular_price:products.regular_price,
        sale_price:products.sale_price,
        rating:products.rating,
        desc:products.desc,
        catId:products.catId,
        tagId:products.tagId,
        photo:products.photo
    }).then(res=>{
        setProducts({
            name:'',
            regular_price:'',
            sale_price:'',
            rating:'',
            desc:'',
            catId:'',
            tagId:'',
            photo:''
        });
    }).catch();
}
  return (
    <>
        <h2>Add New Products</h2>
        <Link className="btn btn-primary btn-sm" to='/admin/products'>AllNew Product</Link>
        <hr/>
        <Form onSubmit={handleProductAdd}>
            <Form.Group>
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" value={products.name} onChange={e=>setProducts({...products,name:e.target.value})} placeholder="Product Name"></Form.Control>
            </Form.Group>
            <Form.Group gap={3}>
                <Form.Label>Regular Price</Form.Label>
                <Form.Control type="text" value={products.regular_price} onChange={e=>setProducts({...products,regular_price:e.target.value})} placeholder="Regular Price"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Sale Price</Form.Label>
                <Form.Control type="text" value={products.sale_price} onChange={e=>setProducts({...products,sale_price:e.target.value})} placeholder="Sale Price"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" value={products.rating} onChange={e=>setProducts({...products,rating:e.target.value})} placeholder="Rating"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Desc</Form.Label>
                <Form.Control as="textarea" value={products.desc} onChange={e=>setProducts({...products,desc:e.target.value})} placeholder="Short Description" />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Product Category</Form.Label>
                <Form.Select className="form-control" value={products.catId} onChange={e=>setProducts({...products,catId:e.target.value})}>
                    <option value="">--select category--</option>
                    {
                        showCate.map(data=>
                        <option value={data.id}>{data.name}</option>)
                    }
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Product Tag</Form.Label>
                <Form.Select className="form-control" value={products.tagId} onChange={e=>setProducts({...products,tagId:e.target.value})}>
                    <option value="">--select tag--</option>
                    {
                        tagShow.map(data=>
                        <option value={data.id}>{data.name}</option>)
                    }
                    
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="text" value={products.photo} onChange={e=>setProducts({...products,photo:e.target.value})} placeholder="Image Link"></Form.Control>
            </Form.Group>
            <br/>
            <Form.Group>
                <Button type="submit" className="btn-sm">Add Product</Button>
            </Form.Group>
        </Form>
    </>
  )
}

export default AddProduct