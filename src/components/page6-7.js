import React from 'react';
import PropTypes from 'prop-types';


const Page = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h1>EVENTS</h1>
      <h1 ></h1>
      <h1>2019大事记</h1>
      </div>
        
      <table border='4'CELLPADDING="2"  CELLSPACING="2" WIDTH="100%">
          <tr>
           <th>2019年2月</th>
          </tr>
          <tr>
            <th>第二届领事会第六次会议，批 <br /> 准2019年工作计划即预算 </th>
            
          </tr>
    </div>
  );
};

Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string,
  }).isRequired,
};

export default Page;
