import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  showContent: PropTypes.bool,
};

const defaultProps = {
  showContent: true,
};

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

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;