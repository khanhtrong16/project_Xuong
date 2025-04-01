import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="auth-container">
      <img
        src="/public/image/z6407753055678_514ef814441038faf8ead57203eba8a8.jpg"
        alt="Logo"
        className="logo"
      />
      <h2 className="auth-title">TẠO TÀI KHOẢN</h2>
      <form>
        <div className="input-group">
          <label htmlFor="fullname">Họ và Tên</label>
          <input
            type="text"
            id="fullname"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Nhập email của bạn"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            placeholder="Tạo mật khẩu"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Nhập lại mật khẩu"
            required
          />
        </div>
        <button type="submit" className="btn-auth">
          ĐĂNG KÝ
        </button>
        <div className="signup-text">
          Đã có tài khoản? <Link to={`/signin`}> Đăng nhập ngay</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
