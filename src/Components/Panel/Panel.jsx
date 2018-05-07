import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  togglePanels: PropTypes.func.isRequired,
  content: PropTypes.string,
  showPanelInfo: PropTypes.bool,
};

const defaultProps = {
  content: "Loading...",
  showPanelInfo: false,
};

const Panel = ({ content, showPanelInfo, togglePanels }) => {
  const determineClass = (toggle) => {
    return toggle ? "panel__wrapper" : "panel__wrapper panel__wrapper--no-show"
  };

  return (
    <div
      onClick={togglePanels}
      className={determineClass(showPanelInfo)}
    >
      <span>{content}</span>
    </div>
  );
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
