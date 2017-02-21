import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import FlatLinkButton from './FlatLinkButton';

const mapStateToProps = (state, ownProps) => ({
  disabled: ownProps.filter === ownProps.params.filter,
  link: ownProps.filter,
  label: ownProps.label,
});

export default withRouter(connect(
  mapStateToProps,
)(FlatLinkButton));
