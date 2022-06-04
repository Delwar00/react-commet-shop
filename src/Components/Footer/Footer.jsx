import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer id="footer-widgets">
        <div className="container">
            <div className="go-top">  
            <Link to="#top">
                <i className="ti-arrow-up"></i>
            </Link>
            </div>
            <div className="row">
            <div className="col-md-6 ov-h">
                <div className="row">
                <div className="col-sm-4">
                    <div className="widget">
                    <h6 className="upper">About Comet</h6>
                    <p>
                        <span>Fourth Floor</span>
                        <span>New York, NY 10011</span>
                        <span>hello@comet.com</span>
                    </p><Link to="#" className="btn btn-color-out btn-sm">Hire Us!</Link>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="widget">
                    <h6 className="upper">Culture</h6>
                    <ul className="list-unstyled">
                        <li>
                        <Link to="#">Team</Link>
                        </li>
                        <li>
                        <Link to="#">Process</Link>
                        </li>
                        <li>
                        <Link to="#">Story</Link>
                        </li>
                        <li>
                        <Link to="#">Careers</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="widget">
                    <h6 className="upper">Case Studies</h6>
                    <ul className="list-unstyled">
                        <li>
                        <Link to="portfolio-single-1.html">Neleman Cava</Link>
                        </li>
                        <li>
                        <Link to="portfolio-single-2.html">Sweet Lane</Link>
                        </li>
                        <li>
                        <Link to="portfolio-single-3.html">Jeff Burger</Link>
                        </li>
                        <li>
                        <Link to="portfolio-single-1.html">Juice Meds</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-md-4 col-md-offset-2">
                <div className="row">
                <div className="col-md-12">
                    <div className="widget">
                    <h6 className="upper">Stay in touch</h6>
                    <p>Sign Up to get the latest updates.</p>
                    <div className="footer-newsletter">
                        <form data-mailchimp="true" className="inline-form">
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Your Email" className="form-control" /><span className="input-group-btn"><button type="submit" data-loading-text="Loading..." className="btn btn-color">Subscribe</button></span>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
        <footer id="footer">
        <div className="container">
            <div className="footer-wrap">
            <div className="row">
                <div className="col-md-4">
                <div className="copy-text">
                    <p><i className="icon-heart red mr-15"></i>© 2015 Comet Agency.</p>
                </div>
                </div>
                <div className="col-md-4">
                <ul className="list-inline">
                    <li>
                    <Link to="#">About</Link>
                    </li>
                    <li>
                    <Link to="#">Services</Link>
                    </li>
                    <li>
                    <Link to="#">Blog</Link>
                    </li>
                    <li>
                    <Link to="#">Contact</Link>
                    </li>
                </ul>
                </div>
                <div className="col-md-4">
                <div className="footer-social">
                    <ul>
                    <li>
                        <Link target="_blank" to="#"><i className="ti-facebook"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="#"><i className="ti-twitter-alt"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="#"><i className="ti-linkedin"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="#"><i className="ti-instagram"></i></Link>
                    </li>
                    <li>
                        <Link target="_blank" to="#"><i className="ti-dribbble"></i></Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer