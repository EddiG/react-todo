import { connect } from 'react-redux';
import FlatLinkButton from './FlatLinkButton';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  disabled: ownProps.filter === state.filter,
  link: ownProps.filter,
  label: ownProps.label,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlatLinkButton);
