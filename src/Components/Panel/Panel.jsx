import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  togglePanels: PropTypes.func.isRequired,
  content: PropTypes.array,
  showPanelInfo: PropTypes.bool,
};

const defaultProps = {
  showPanelInfo: false,
  content: [],
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
      {content.map(({ id, name, email, address }) => (
        <div
	        key={id}
	        className={determineClass(showPanelInfo, 'content')}
        >
          <div>{name}</div>
          <div>{email}</div>
          <div>{`${address.street} ${address.suite}`}</div>
        </div>
      ))}
    </div>
  );
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;
export default Panel;
