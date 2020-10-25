import React from "react";

const Self = () => {
    const title1 = "SELF-ADVOCACY FOR PEOPLE WITH MENTAL DISABILITIES" <br/> "心智障碍者自倡导";
    const title1_1 ="自倡导小组介绍";
    const context1_1 ="融爱融乐自倡导小组是一个由心智障碍青年组成并主导的活动小组，通过每月至少一次的小组活动、与其他同业组织的交流和骨干培养，丰富参与者的业余生活，提升其自主决策能力，从而获得更好的个人成长与社会融合经验。";
    const title2 ="项目成果";
    const title2_1 ="戏剧工作坊";
    const context2_1 ="心智障碍者自倡导工作在9月开办了戏剧体验活动，共有8位青年参与。借由戏剧的表现形式为心智障碍青年提供更多元的表达方式（非语言）和交流体验，令个人情绪纾解、团队合作意识提升及艺术感知培养等目的得以融汇。";
    const title2_2 ="月度会议";
    const context2_2 ="自倡导小组成员每月开展月度会议，在12月会议中，三名骨干成员总结了2019年的工作，并通过自主提议和讨论的方式做出2020年活动计划。";

    return (
      <div>
        <h1 className="self">{title1}</h1>
        <h2 className="self2">{title1_1}</h2>
        <div>{context1_1}</div>
        <h1 className="self">{title2}</h1>
        <h2 className="self2">{title2_1}</h2>
        <div>{context2_1}</div>
        <h2 className="self2">{title2_2}</h2>
        <div>{context2_2}</div>

        {/* <img src={leader}></img> */}
        <img src={team}></img>
      </div>
    );
  };
  
  export default Self;