import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'


const Category = ({showCate,makeSlug}) => {
  //when click add neww cat button shoe form

  const [catFormShow,setCatFormShow]=useState(false);
  const handleCatFormShow=()=>{
    setCatFormShow(true);
  }
  
  //validation
  const[alert,setAlert]=useState({
    'msg':'All fields are required!',
    'type':'danger',
    'status':false
  });
  //form hide when form submit
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setCatFormShow(false);
    if(cat.name===''){
      setAlert({
        'msg':'All Fields Are Required !',
        'type':'warning',
        'status':true
      }) 
    }
    else{
      axios.post('http://localhost:5050/categories',{
        'id':cat.id,
        'name':cat.name,
        'slug':makeSlug(cat.name)
      }).then(res=>{
        setCat('');
      }).catch();
    }
    
  }






  //value set and caught 
  const [cat,setCat]=useState({
    'id':'',
    'name':''
  });

  //cate delete
  const handleCatDelete=(id)=>{
    axios.delete('http://localhost:5050/categories/'+id);
  }

  //edit category
  const [catEditFormShow,setEditCatFormShow]=useState(false);
  const handleTagUpdate=(id)=>{
    setEditCatFormShow(true);
    axios.get('http://localhost:5050/categories/'+id).then(res=>{
      setCat(res.data);
    }).catch();
  }
  const handleUpdateFormSubmit=(e)=>{
    e.preventDefault();
    axios.patch('http://localhost:5050/categories/'+cat.id,{
    'name':cat.name,
    'slug':makeSlug(cat.name)
    });
  }
  return (
        <>
            <h2>Category</h2>
            <Button variant='info' onClick={handleCatFormShow} className='btn-sm'>Add New Category</Button>
            <hr/>
            <Table>
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Cat. Name</th>
                      <th>SLug</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    showCate.map((data,index)=>
                      <tr>
                          <th>{index+1}</th>
                          <th>{data.name}</th>
                          <th>{data.slug}</th>
                          <th>
                            <Button variant="warning" onClick={()=>handleTagUpdate(data.id)} className='btn-sm'>Edit</Button>
                            <Button variant="danger" onClick={()=>handleCatDelete(data.id)} className='btn-sm'>Delete</Button>
                          </th>
                      </tr>
                    )
                  }
                    
                </tbody>
            </Table>
            {
                catFormShow && 
                <>
                  <h2>Add New Category</h2>
                  <Form onSubmit={handleFormSubmit}>
                  <Form.Group >
                        {
                          alert.status && <p className={`alet alert-${alert.type}`}>{alert.msg}</p>
                        }
                        <Form.Control type="text" value={cat.name} onChange={e=>setCat({...cat,name:e.target.value})} placeholder="Add CateGory" />
                        
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button type="submit" variant='info' className='btn-sm'>Add</Button>
                  </Form.Group>
                  </Form>
                </>

            }
            {
              catEditFormShow &&
              <>
                   <h2>Edit Category</h2>
                  <Form onSubmit={handleUpdateFormSubmit}>
                       {
                          alert.status && <p className={`alet alert-${alert.type}`}>{alert.msg}</p>
                        }
                  <Form.Group >
                        
                        <Form.Control type="text" value={cat.name} onChange={e=>setCat({...cat,name:e.target.value})} placeholder="Edit CateGory" />
                        
                    </Form.Group>
                    <br />
                    <Form.Group >
                        
                        <Form.Control type="text" value={cat.id} />
                        
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Button type="submit" variant='info' className='btn-sm'>Update</Button>
                  </Form.Group>
                  </Form>
              </>
            }
           
        </>
  )
}

export default Category