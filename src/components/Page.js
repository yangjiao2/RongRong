import React from "react";
import PropTypes from "prop-types";

import "../assets/stylesheets/base.scss";

const Page = ({ match }) => {
  const { id } = match.params;

  const content1 = "融合文体活动 内容";
  const content2 = "小龄融合 内容";
  const content3 = "支持性就业 内容";

  const projects = [
    {
      title: "融合文体活动",
      content: content1,
    },
    {
      title: "小龄融合",
      content: content2,
    },
    {
      title: "支持性就业",
      content: content3,
    },
  ];

  const renderer = projects.map(({ title, content }) => {
    return (
      <div>
        <h1 className="introduction_title"> {title}</h1>
        <div>{content}</div>
      </div>
    );
  });

  return <div>{renderer[id - 1]}</div>;
};

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
  }).isRequired,
};

export default Page;
