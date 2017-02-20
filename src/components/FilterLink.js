import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import { setFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  disabled: ownProps.filter === state.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FlatButton);
