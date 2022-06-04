import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import Rating from './Rating';

const ShopSingle = () => {
    const {slug}=useParams();
    const [related, setRelated] = useState([]);
    const [productSingle, setproductSingle] = useState({
        name:'',
        slug:'',
        regular_price:'',
        sale_price:'',
        rating:'',
        desc:'',
        categoryId:'',
        tagId:'',
        photo:''
    });
    useEffect(() => {
        axios.get(`http://localhost:5050/products?slug=${slug}`).then(res=>{
            setproductSingle(res.data[0]);
        }).catch();
        axios.get(`http://localhost:5050/categories/${productSingle.categoryId}/products`).then(res=>{
            setRelated(res.data);
        }).catch();
    });
  return (
    <>
        <section>
        <div className="container">
            <div className="single-product-details">
            <div className="row">
                <div className="col-md-6">
                <div data-options="{&quot;animation&quot;: &quot;slide&quot;, &quot;controlNav&quot;: true}" className="flexslider nav-inside control-nav-dark">
                    <img style={{height:'600px',width:'100%',objectFit:'cover'}} src={productSingle.photo} alt="" />
                   
                </div>
                </div>
                <div className="col-md-5 col-md-offset-1">
                <div className="title mt-0">
                    <h2>{productSingle.name}<span className="red-dot"></span></h2>
                    {/* <p className="m-0">Free Shipping Worldwide</p> */}
                </div>
                <div className="single-product-price">
                    <div className="row">
                    <div className="col-xs-6">
                        <h3>
                            {
                                productSingle.sale_price==='' ? 
                                 <span>{productSingle.regular_price} Tk</span>
                                 :
                                <>
                                    <del>{productSingle.regular_price} Tk</del>
                                    <span>{productSingle.sale_price} Tk</span>
                                </>
                            }
                           </h3>
                            
                    </div>
                    <div className="col-xs-6 text-right">
                        <Rating rate={productSingle.rating} />
                    </div>
                    </div>
                </div>
                <div className="single-product-desc">
                    <p>{productSingle.desc}</p>
                </div>
                <div className="single-product-add">
                    <form action="#" className="inline-form">
                    <div className="input-group">
                        <input type="number" placeholder="QTY" value="1" min="1" className="form-control" /><span className="input-group-btn"><button type="button" className="btn btn-color">Add to Cart<i className="ti-bag"></i></button></span>
                    </div>
                    </form>
                </div>
                <div className="single-product-list">
                    <ul>
                    <li><span>Sizes:</span> S, M, L, XL</li>
                    <li><span>Colors:</span> Blue, Red, Grey</li>
                    <li><span>Category:</span><a href="#">fgdfgf</a>
                    </li>
                    <li><span>Tags:</span><a href="#">Outfit</a>-<a href="#">Jeans</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
            <div className="product-tabs">
            <ul role="tablist" className="nav nav-tabs">
                <li role="presentation" className="active"><Link to="#first-tab" role="tab" data-toggle="tab">Description</Link>
                </li>
                <li role="presentation"><Link to="#second-tab" role="tab" data-toggle="tab">Sizes</Link>
                </li>
                <li role="presentation"><Link to="#third-tab" role="tab" data-toggle="tab">Reviews (3)</Link>
                </li>
            </ul>
            <div className="tab-content">
                <div id="first-tab" role="tabpanel" className="tab-pane active">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum hic doloribus dolore explicabo, a voluptate optio culpa, aut nulla voluptatem sit nam sed molestias adipisci! Eius nulla beatae, quidem quae. Praesentium eveniet ullam quos
                    accusamus, ea nemo cupiditate. Nemo harum sit, necessitatibus voluptates, sapiente dolorum minima, placeat explicabo consequuntur at neque deserunt.</p>
                <p>Quidem illum, enim aut, minus nesciunt, distinctio inventore sunt autem numquam eveniet non asperiores unde! Corrupti modi minima doloremque, illum aperiam nemo.</p>
                </div>
                <div id="second-tab" role="tabpanel" className="tab-pane">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th className="upper">Size</th>
                        <th className="upper">Bust (CM)</th>
                        <th className="upper">Waist (CM)</th>
                        <th className="upper">Hips (CM)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>XS</td>
                        <td>78</td>
                        <td>60</td>
                        <td>83</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td>80</td>
                        <td>62</td>
                        <td>86</td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td>88</td>
                        <td>65</td>
                        <td>88</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div id="third-tab" role="tabpanel" className="tab-pane">
                <div id="comments">
                    <ul className="comments-list">
                    <li className="rating">
                        <h5 className="upper">Jesse Pinkman - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo voluptatem quo sit. Sint fugit quidem totam similique suscipit animi veniam reiciendis, unde facere quia, optio, at ad possimus perferendis asperiores.</p>
                    </li>
                    <li className="rating">
                        <h5 className="upper">Rust Cohle - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                    </li>
                    <li className="rating">
                        <h5 className="upper">Arya Stark - <span className="rating-stars"><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i><i className="ti-star full"></i></span></h5><span className="comment-date">Posted on 29 September at 10:41</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aspernatur vero dolorum asperiores ratione obcaecati atque quidem aliquid dicta illo, quod, similique suscipit maiores, aperiam expedita cum. Ut fugiat, dolores.</p>
                    </li>
                    </ul>
                </div>
                <div id="respond">
                    <h5 className="upper">Leave a rating</h5>
                    <div className="comment-respond">
                    <form className="comment-form">
                        <div className="form-double">
                        <div className="form-group">
                            <input name="author" type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div className="form-group last">
                            <input name="email" type="text" placeholder="Email" className="form-control" />
                        </div>
                        </div>
                        <div className="form-group">
                        <div className="form-select">
                            <select className="form-control">
                            <option value="" selected="selected">Chose a rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            </select>
                        </div>
                        </div>
                        <div className="form-group">
                        <textarea placeholder="Comment" className="form-control"></textarea>
                        </div>
                        <div className="form-submit text-right">
                        <button type="button" className="btn btn-color-out">Post Comment</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="related-products">
            <h5 className="upper">Related Products</h5>
            <div className="row">
            {
                related.map(data=>
                   data.slug!==slug ?
                    <div className="col-md-3 col-sm-6">
                        <div className="shop-product">
                            <div className="product-thumb">
                                <Link to="#">
                                    <img src={data.photo} alt="" />
                                </Link>
                            </div>
                            <div className="product-info">
                                <h4 className="upper"><Link to="#">{data.name}</Link></h4>
                                {
                                    data.sale_price==='' ? 
                                    <span>{data.regular_price} Tk </span>
                                    :
                                    <>
                                        <del>{data.regular_price} Tk </del>
                                        <span>{data.sale_price} Tk </span>
                                    </>
                                }
                                <div className="save-product"><Link to="#"><i className="icon-heart"></i></Link></div>
                            </div>
                        </div>
                    </div>
                   :'' 
                )
                }
                
               
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ShopSingle