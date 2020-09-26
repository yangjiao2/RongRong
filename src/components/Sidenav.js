import React from "react";
import { Link } from "react-router-dom";

// Nav = Navigation

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav-brand">内容</div>
      <ul className="sidenav-list">
        <li>
          <Link className="sidenav-list__item" to="/">
            主页
          </Link>
        </li>
        <li>
          <Link className="sidenav-list__item" to="/about">
            关于我们
          </Link>
        </li>
        <div className="sidenav-list__header">项目展示</div>
        <li>
          <Link className="sidenav-list__sub-item" to="/pages/1">
            融合文体活动
          </Link>
        </li>
        <li>
          <Link className="sidenav-list__sub-item" to="/pages/2">
            小龄融合
          </Link>
        </li>
        <li>
          <Link className="sidenav-list__sub-item" to="/pages/3">
            支持性就业
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidenav;
