import React from "react";

import icon from "../../assets/images/icon.png";

const About = () => {
  // 用左边加入内容的占位符: https://ant.design/components/grid/
  // 例如：
  //   <Row>
  //   <Col span={8}>col-8</Col>
  //   <Col span={8}>col-8</Col>
  //   <Col span={8}>col-8</Col>
  // </Row>
  return (
    <div className="colored_background">
      <img className="qrcode_img" src={icon}></img>

      <div className="context">
        <p> 微信公众号: rongairongle</p>
        <p> 联系电话: 010 6396 2366</p>
        <p> 邮箱: rongairongle@co-inclusion.org </p>
        <p> 地址: 北京市海淀区北京印象6号楼4-1107</p>
      </div>
    </div>
  );
};

export default About;
