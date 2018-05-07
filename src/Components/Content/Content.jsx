import React from 'react';
import './styles.less';

const Content = (props) => {
  const determineContentVisibility = (toggle) => {
    return toggle
      ? "content__wrapper"
      : "content__wrapper content__wrapper-no-show"
  };

  return (
    <div className={determineContentVisibility(props.showContent)}>
      {props.children}
    </div>
  );
};

export default Content;