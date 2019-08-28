import React from 'react'
import './style.css'

function Header() {
    return (
        <div>
            <div className="Header">
                <div className="container">
                    {/* div contact */}
                    <div className="Header-phone">
                        <div className="Header-item">
                            <span className="Phone-icon">
                                haha
                        </span>
                            <span>+(84) 6356253</span>
                        </div>
                        <div className="Header-item">
                            <span className="Phone-icon">
                                haha
                        </span>
                            <span>+(84) 6356253</span>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    {/* end div contact */}

                </div>
            </div>
            {/* div menu */}
            <div className="Header-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <ul className="menu">
                                <li>
                                    <a className="nav-link" href="#">Sản phẩm</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">Kiến thức</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">Về HSC Bond</a>
                                </li>
                                <li>
                                    <a className="nav-link" href="#">Câu hỏi thường gặp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="Header-login">
                                <button type="button" className="btn btn-light Login">Đăng nhập</button>                                
                                <button type="button" className="btn btn-primary">Mở tài khoản</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;