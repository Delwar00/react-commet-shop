import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'

const Tag = ({tagShow,makeSlug}) => {
 
  //form show hide
  const [tagFormShow,setFormShow]=useState(false);
  const handleFormShowHide=()=>{
    setFormShow(true);
  }
  //validation
  let pattern=/[a-z0-9A-Z]{4}/;
  const [alert,setAlert]=useState({
    'msg':'All fileds are required',
    'type':'danger',
    'status':false
  });
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setFormShow(false);
    if(tag.name===''){
      setAlert({
        'msg':'All fileds are Required!',
        'type':'danger',
        'status':true
      });
    }
    else if(pattern.test(tag.name)===false){
      setAlert({
        'msg':'Letter must be min 9 character!',
        'type':'danger',
        'status':true
      });
    }
    else{
      axios.post('http://localhost:5050/tags',{
        'id':tag.id,
        'name':tag.name,
        'slug':makeSlug(tag.name)
      }).then(res=>{
        setTag('');
      }
      ).catch(err=>{
        console.log(err);
      });
    }
    
  }

  //set value tag
 const [tag,setTag]=useState({
  'id':'',
  'name':''
});
  


//delete data tag
const handleTagDelete=(id)=>{
  axios.delete('http://localhost:5050/tags/'+id); 
}
//edit tag

//edit form show hide
const [tagEditFormShow, setTagEditFormShow] = useState(false);
const handleTagEdit=(id)=>{
  setTagEditFormShow(true);
  axios.get('http://localhost:5050/tags/'+id).then(res=>{
    setTag(res.data);
  }).catch();
}
const handleTagUpdateSubmit=(e)=>{
  e.preventDefault();
  setTagEditFormShow(false);
  axios.patch('http://localhost:5050/tags/'+tag.id,{
    'name':tag.name,
    'slug':makeSlug(tag.name)
  });
}


  return (
        <>
            <h2>Tag</h2>
            <Button variant='info' onClick={ handleFormShowHide } className='btn-sm'>Add New Tag</Button>
            <hr/>
            <Table>
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Tag. Name</th>
                      <th>SLug</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    tagShow.map((data,index)=>
                    <tr>
                        <th>{index+1}</th>
                        <th>{data.name}</th>
                        <th>{data.slug}</th>
                        <th>
                          <Button variant="warning"  onClick={()=>handleTagEdit(data.id)} className='btn-sm'>Edit</Button>
                          <Button variant="danger" onClick={()=>handleTagDelete(data.id)} className='btn-sm'>Delete</Button>
                        </th>
                    </tr>
                    )
                  }
                   
                </tbody>
            </Table>
            {
              tagFormShow && 
             <>
                 <h2>Add New Tag</h2>
                <Form onSubmit={handleFormSubmit}>
                  {
                    alert.status && <p className={`alet alert-${alert.type}`}>{alert.msg}</p>
                  }

                <Form.Group >
                      <Form.Control type="text" value={tag.name}  onChange={e=>setTag({...tag,name:e.target.value})} placeholder="Add Tag" />  
                  </Form.Group>
                  <br />
                  <Form.Group>
                      <Button type="submit" variant='info' className='btn-sm'>Add Tag</Button>
                </Form.Group>
                </Form>
             </>
            }
           {
             tagEditFormShow &&
             <>
                <h2>Edit Tag</h2>
                <Form onSubmit={handleTagUpdateSubmit}>
                  
                 <Form.Group >
                      <Form.Control type="text" value={tag.name} onChange={e=>setTag({...tag,name:e.target.value})} placeholder="Edit Tag" />  
                  </Form.Group>
                  <br />
                  <Form.Group >
                      <Form.Control type="text" value={tag.id} placeholder="Edit Tag" />  
                  </Form.Group>
                  <br />
                  <Form.Group>
                      <Button type="submit" variant='info' className='btn-sm'>Update Tag</Button>
                </Form.Group>
                </Form>
             </>
           }
        </>
       
     
  )
}

export default Tag