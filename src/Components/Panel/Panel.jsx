import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  togglePanels: PropTypes.func.isRequired,
  content: PropTypes.string,
  showPanelInfo: PropTypes.bool,
};

const defaultProps = {
  showPanelInfo: false,
};

const Panel = ({ content, showPanelInfo, togglePanels }) => {
  const determineClass = (toggle, subName) => {
    return toggle ? `panel__${subName}` : `panel__${subName} panel__${subName}--no-show`;
  };

  return (
    <div
      onClick={togglePanels}
      className={determineClass(showPanelInfo, 'wrapper')}
    >
      <span className={determineClass(showPanelInfo, 'content')}>
        {content}
      </span>
    </div>
  );
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
