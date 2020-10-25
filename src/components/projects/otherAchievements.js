import React from "react";

const Other = () => {
    const title = "OTHER WORK ACHIEVEMENTS" <br/> "其他工作成果";
    const title1 ="调研/评估";
    const context1 ="2019年完成两项调研/评估，分别为：《北京地区心智障碍者照料者喘息服务需求调研》及《救助儿童会四川地区全纳教育项目实施评估报告及核心建议》。";
    const title2 ="提案";
    const title2_1 ="国家层面";
    const context2_1 ="参与提供两个融合教育政策提案，以及一个心智障碍者就业促进提案；";
    const title2_2 ="北京地区";
    const context2_2 ="提出一个关于心智障碍者医疗服务无障碍的提案，以及困境家庭双养补助实施办法的政策建议。";
    const title3 ="筹款";
    const context3 ="2019年签署筹款合同金额共计407万元";

    return (
      <div>
        <h1 className="other">{title1}</h1>
        <h2 className="other2">{title1}</h2>
        <div>{context1}</div>
        <h2 className="other2">{title2}</h2>
        <h3 className="other3">{title2_1}</h3>
        <div>{context2_1}</div>
        <h3 className="other3">{title2_2}</h3>
        <div>{context2_2}</div>
        <h2 className="other2">{title3}</h2>
        <div>{context3}</div>

        {/* <img src={leader}></img> */}
        <img src={team}></img>
      </div>
    );
  };
  
  export default Other;