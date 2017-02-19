import React, { PropTypes } from 'react';

const Link = ({ active, onClick, children }) => {
  if (active) {
    return (
      <a
        role="button"
        tabIndex="0"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        style={{
          color:
          active ?
          'blue' :
          'black',
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <span>
      {children}
    </span>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
