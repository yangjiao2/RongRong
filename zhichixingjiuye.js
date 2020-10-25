import React from "react";

const Jiuye = () => {
    const title1 = "SUPPORTIVE EMPLOYMENT" <br/> "支持性就业";
    const title1_1 ="项目目标";
    const context1_1 =
      "（1） 培训和发展就业辅导员队伍、让他们成为专业的心智障碍者的支持者，促进心智障碍者的独立自主；"<br/>
      "（2）培训和支持有就业意愿的心智障碍人士进入融合工作环境中就业，真正实现他们的自主独立和社会融入；"<br/>
      "（3）开发支持性就业的良好实践，推动政策改善，为心智障碍人士的自主生活和社会融入开发更多社会支持。";
    const title2 ="PROJECT OUTCOME" <br/> "项目成果";
    const title2_1 ="就业服务";
    const context2_1 = "评估心智障碍者35人，培训50人，上岗22人，签订就业合同18人。";
    const title2_2 ="社区融合老友";
    const context2_2 ="组织11名心智障碍同伴和15名志愿者开展融合老友活动3次，志愿者团建1次。志愿者和心智障碍青年保持稳定的友谊关系，以自然支持者的身份协助心智障碍者通过实践体验，提升他们的自主生活能力、社区生活探索和社会适应性。";
    const title2_3 ="特校合作";
    const context2_3 ="受邀做安华学校特教部招生面试官，为安华学校职高三学生提供职业素养培训，为东城特校职高三学生提供支持性就业入项评估。";
    const title2_4 ="企业合作";
    const context2_4 ="为西单美爵酒店开展融合就业主题团建；为雅高酒店集团提供融合就业分享；邀请万豪酒店集团开展酒店房务主题职前培训；为SAP自闭症用工项目提供技术督导。";
    const title2_5 ="同行交流";
    const context2_5 ="ME结项总结会发布《融爱融乐2017-2019ME支持就业项目总结》，邀请中智协、中精协、北京市残联、北京市孤独症协会、利智、我的家园、东城特校和家长代表，分享支持性就业工作的经验和困难；为融合中国年会的家长组织领袖分享支持性就业服务；接待来自青岛、长春、深圳、海口等地的家长组织、服务机构对支持性就业的调研。";
    const title2_6 ="家长培训";
    const context2_6 ="为海口家长提供支持就业在线分享；开展支持性就业家庭转衔系列线上讲座5场。";
    const title2_7 ="知识成果";
    const context2_7 ="建立岗位数据库、企业雇佣指引和企业小支示工具包；基于家长需求的就业准备和支持性就业理念的培训课程；支持性就业辅导员培训课程。";

    return (
      <div>
        <h1 className="jiuye">{title1}</h1>
        <h2 className="jiuye2">{title1_1}</h2>
        <div>{context1_1}</div>
        <h1 className="jiuye">{title2}</h1>
        <h2 className="jiuye2">{title2_1}</h2>
        <div>{context2_1}</div>
        <h2 className="jiuye2">{title2_2}</h2>
        <div>{context2_2}</div>
        <h2 className="jiuye2">{title2_3}</h2>
        <div>{context2_3}</div>
        <h2 className="jiuye2">{title2_4}</h2>
        <div>{context2_4}</div>
        <h2 className="jiuye2">{title2_5}</h2>
        <div>{context2_5}</div>
        <h2 className="jiuye2">{title2_6}</h2>
        <div>{context2_6}</div>        
        <h2 className="jiuye2">{title2_7}</h2>
        <div>{context2_7}</div>

        {/* <img src={leader}></img> */}
        <img src={team}></img>
      </div>
    );
  };
  
  export default Jiuye;