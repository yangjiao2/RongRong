import React from "react";

const Jiazhang = () => {
    const title1 = "PARENTAL EMPOWERMENT AND PARENTAL RESPITE" <br/> "家长赋能和家长喘息";
    const title1_1 ="项目目标";
    const context1_1 =
    "（1） 通过为家长提供专家培训、互助与分享，提升和改善家长对心智障碍者的支持理念和支持能力；"<br/>;
    "（2） 协助组建和发展家长的互助小组，培养核心家长，发挥家长的组织领导和社会倡导力，成为行动者，改善社区及社会对心智障碍人士的认知；"<br/>;
    "（3） 通过会员制度的发展，促进融爱融乐组织发展的民主化建设，成为全国标杆型家长倡导组织。"
    const title2_1 ="项目成果";
    const context2_1 = "支持北京地区家长小组8个，分别为：朝阳小组、大兴小组、房山小组、丰台小组、太阳花小组、妈妈合唱小组、中精协海淀分站、玉华康养中心。举办线上、线下讲座及活动共计197场，服务家长44614人次。";
   
    return (
      <div>
        <h1 className="jiazhang">{title1}</h1>
        <h2 className="jiazhang2">{title1_1}</h2>
        <div>{context1_1}</div>
        <h2 className="jiazhang2">{title2_1}</h2>
        <div>{context2_1}</div>


        {/* <img src={leader}></img> */}
        <img src={team}></img>
      </div>
    );
  };
  
  export default Jiazhang;