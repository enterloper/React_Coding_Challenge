import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  toggleContentVisibility: PropTypes.func.isRequired,
  percentage1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  percentage2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  showContent: PropTypes.bool.isRequired,
};

const Header = (props) => {
  const {
    toggleContentVisibility,
    percentage1,
    percentage2,
    title,
    showContent,
  } = props;

  return (
    <section className="header__wrapper">
      <div className="header__content header__content--percentage">
	      {percentage1}
      </div>
      <div className="header__content header__content--title">
	      {title ? title : 'Loading data...'}
      </div>
      <div className="header__content header__content--percentage">
	      {percentage2}
      </div>
      <div className="header__button-cell">
        <button onClick={toggleContentVisibility}>
          {showContent ? '-' : '+'}
        </button>
      </div>
    </section>
  );
};

Header.propTypes = propTypes;
export default Header;