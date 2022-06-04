import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Products = ({productShow}) => {
  return (
        <>
            <h2>Products</h2>
            <Link className="btn btn-primary btn-sm" to='/admin/add-products'>Add New Product</Link>
            <hr/>
            <Table>
                <thead>
                    <tr>
                      <th>#</th>
                      <th>Products. Name</th>
                      <th>SLug</th>
                      <th>Regular Price</th>
                      <th>Sale Price</th>
                      <th>Rating</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    productShow.map((data,index)=>
                      <tr>
                        <th>{index+1}</th>
                        <th>{data.name}</th>
                        <th>{data.slug}</th>
                        <th>{data.regular_price}</th>
                        <th>{data.sale_price}</th>
                        <th>{data.rating}</th>
                        <th>{data.desc}</th>
                        <th>
                          <Button variant="info" className='btn-sm'>View</Button>
                          <Button variant="warning" className='btn-sm'>Edit</Button>
                          <Button variant="danger" className='btn-sm'>Delete</Button>
                        </th>
                     </tr>
                      )
                  }
                   
                </tbody>
            </Table>
        </>
  )
}

export default Products