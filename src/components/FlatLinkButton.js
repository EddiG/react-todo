import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

const FlatLinkButton = ({ label, link, disabled }) =>
  <FlatButton
    label={label}
    disabled={disabled}
    containerElement={<Link to={link} />}
  />;

FlatLinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FlatLinkButton;
