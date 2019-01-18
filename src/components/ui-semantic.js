import React from 'react';
import './ui-semantic.css';
import PropTypes from 'prop-types';

function getClassName({ primary, secondary }) {
  const baseStyle = 'base';
  const baseWithPrimary = `${baseStyle} ${primary ? 'primary' : ''}`;
  const baseWithSecondary = `${baseWithPrimary} ${
    secondary ? 'secondary' : ''
  }`;

  return baseWithSecondary;
}

const Button = ({ children, content, primary, secondary, icon, color }) => (
  <button
    className={getClassName({ primary, secondary })}
    style={{ backgroundColor: `${color}` }}
  >
    {content || children}
    <i className={'fas fa-' + icon} />
  </button>
);

Button.propTypes = {
  getClassName: PropTypes.func,
  children: PropTypes.oneOfType,
  content: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  icon: PropTypes.string,
  color: PropTypes.string,
};

export { Button };
