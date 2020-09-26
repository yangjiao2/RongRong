import React from "react";

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
      <h1 className="title-centered">关于我们</h1>
      <div width="100vw">
        <img
          className="qrcode_img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601137458472&di=8316f952bbfce0cd03b1f63c2ada3081&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F17%2F75573c3f5409214.jpg"
        ></img>
        <div className="centered">
          <ul>
            <li> 微信公众号: rongairongle</li>
            <li> 联系电话: 010 6396 2366</li>
            <li> 邮箱: rongairongle@co-inclusion.org </li>
            <li> 地址: 北京市海淀区北京印象6号楼4-1107</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
