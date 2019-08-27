import React from 'react'
import './style.css'

function LoginComponent() {
    return (
        <div className="Login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 Content-text">
                        <div>
                        <h1>Giúp bạn đầu tư dễ dàng</h1>
                        <p>An toàn. Lợi suất hấp dẫn. Dễ sử dụng. Minh bạch</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card Form-login">
                            <div className="Title-form">
                                <h5 className="mb-0">Bạn đã có tài khoản</h5>
                            </div>
                            <div className="card-body">
                                <form className="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                    <div className="container">
                                        <div className="form-group">
                                            <label for="uname1" className="Label-style">Tên đăng nhập</label>
                                            <input type="text" className="form-control form-control-lg Form-login" name="uname1" id="uname1" required="" />
                                            <div className="invalid-feedback">Oops, you missed this one.</div>
                                        </div>
                                        <div className="form-group">
                                            <label className="Label-style">Mật khẩu</label>
                                            <input type="password" className="form-control form-control-lg Form-login" id="pwd1" required="" autocomplete="new-password" />
                                            <div className="invalid-feedback">Enter your password too!</div>
                                        </div>
                                        <div>
                                            <label className="custom-control Forgot-pass">
                                                <span>Quên mật khẩu</span>
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary btnLogin" id="btnLogin">Đăng nhập</button>
                                        <div className="Open-account">
                                            <label className="custom-control">
                                                <span>Mở tài khoản</span>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;