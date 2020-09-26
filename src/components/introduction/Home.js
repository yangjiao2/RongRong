import React from "react";

import "../../assets/stylesheets/base.scss";

const Home = () => {
  const title = "融爱融乐简介";
  const context =
    "由心智障碍者家长建立、参与管理并为心智障碍者家庭提供支持的 社会组织。2014年2月，经由民政部门批准，融爱融乐注册成为民办非营 利组织。\
        融爱融乐在联合国《残疾人权利公约》理念指导下，致力于为心智障 碍者家庭提供培训和交流平台，赋能心智障碍者家长，为心智障碍者提 供融合性文体活动，协助他们在专业支持下到融合环境中平等就业。\
        融爱融乐开展的多种线上线下公益活动，令每年超过三万人次的心 智障碍者及其照料者受益，融合就业已助力接近60名心智障碍者走上工 作岗位，同时累计带动接近2万人次的志愿者参与其中。\
        融爱融乐是北京晓更助残基金会的发起单位，也是融合中国心智障 碍者家长组织网络的核心枢纽组织，融合中国网络连结200多家各地家 长组织或志愿小组，覆盖超过100个城市及地区。";
  return (
    <div>
      <h1 className="introduction_title">{title}</h1>
      <div>{context}</div>
      <img
        src={
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601133791778&di=d7805808f3da84eb35e553f4ff88baa5&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170729%2F56a5b84f8b1743f5af7b7eadabaff111_th.jpg"
        }
      ></img>
    </div>
  );
};

export default Home;
