import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Partials/Sidebar'

const Shop = ({productShow,setProductShow,showCate,tagShow}) => {
  return (
    <>
        <section>
            <div className="container">
            <div className="row">
                <div className="col-md-3 hidden-sm hidden-xs">
                    <Sidebar setProductShow={setProductShow} showCate={showCate} tagShow={tagShow} />
                </div>
                <div className="col-md-9">
                <div className="shop-menu">
                    <div className="row">
                    <div className="col-sm-8">
                        <h6 className="upper">Displaying 6 of 18 results</h6>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-select">
                        <select name="type" className="form-control">
                            <option selected="selected" value="">Sort By</option>
                            <option value="">What's new</option>
                            <option value="">Price high to low</option>
                            <option value="">Price low to high</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    {
                        productShow.map(data=>
                            <div className="col-md-4 col-sm-6">
                                <div className="shop-product">
                                <div className="product-thumb">
                                    <Link to={`/shop/${data.slug}`}>
                                    <img src={data.photo} alt="" />
                                    </Link>
                                    <div className="product-overlay"><a href="#" className="btn btn-color-out btn-sm">Add To Cart<i className="ti-bag"></i></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h4 className="upper"><Link to={`/shop/${data.slug}`}>{data.name}</Link></h4>
                                   {
                                        (data.sale_price==='') ?
                                            <span >{data.regular_price} Tk</span>
                                        
                                         :
                                         <>
                                             <span style={{textDecoration:'line-through'}}>{data.regular_price} Tk </span>
                                             <span style={{color:'red'}}>{data.sale_price} Tk</span>
                                         </>
                                    }
                                    
                                    <div className="save-product"><a href="#"><i className="icon-heart"></i></a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        )
                    } 
                    </div>
                    <ul className="pagination">
                    <li><Link to="#" aria-label="Previous"><span aria-hidden="true"><i className="ti-arrow-left"></i></span></Link>
                    </li>
                    <li className="active"><a href="#">1</a>
                    </li>
                    <li><Link to="#">2</Link>
                    </li>
                    <li><Link to="#">3</Link>
                    </li>
                    <li><Link to="#">4</Link>
                    </li>
                    <li><Link to="#">5</Link>
                    </li>
                    <li><Link to="#" aria-label="Next"><span aria-hidden="true"><i className="ti-arrow-right"></i></span></Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Shop