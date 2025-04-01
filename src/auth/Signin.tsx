import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    return (
        <div className="auth-container">
            <img src="https://i.imgur.com/InENlPK.jpeg" alt="Heaven Tea Logo" className="logo" />
            <h2 className="auth-title">Đăng nhập tài khoản</h2>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Nhập email của bạn" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" id="password" placeholder="Nhập mật khẩu của bạn" required />
                    <a href="#" className="forgot-password">
                        Quên mật khẩu?
                    </a>
                </div>
                <button type="submit" className="btn-auth">
                    Đăng nhập
                </button>
                <p className="signup-text">
                    Bạn chưa có tài khoản?
                    <Link to={`/register`}>Đăng ký ngay</Link>
                </p>
            </form>
        </div>
    );
};

export default Signin;
