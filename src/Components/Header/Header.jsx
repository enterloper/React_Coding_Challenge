import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  toggleContentVisibility: PropTypes.func.isRequired,
  percentage1: PropTypes.string,
  percentage2: PropTypes.string,
  revenue: PropTypes.string,
  showContent: PropTypes.bool.isRequired,
};

const Header = (props) => {
  const {
    toggleContentVisibility,
    percentage1,
    percentage2,
    revenue,
    showContent,
  } = props;

  return (
    <section className="header__wrapper">
      <div>{percentage1}</div>
      <div>{revenue ? revenue : 'Loading data...'}</div>
      <div>{percentage2}</div>
      <div className="header__button-cell" onClick={toggleContentVisibility}>
        <button>
          {showContent ? '-' : '+'}
        </button>
      </div>
    </section>
  );
};

Header.propTypes = propTypes;
export default Header;