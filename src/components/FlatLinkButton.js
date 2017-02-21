import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const FlatLinkButton = ({ label, link, disabled, onClick }) =>
  <FlatButton
    label={label}
    disabled={disabled}
    onClick={onClick}
    containerElement={<Link to={link} />}
  />;

FlatLinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FlatLinkButton;
