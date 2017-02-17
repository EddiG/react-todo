import React from 'react';

class TodoItem extends React.Component {
  onChange = () => {
    this.props.onToggleActive(this.props.title);
  }

  render() {
    return (
      <li
        style={{
          textDecoration:
          this.props.complete ?
          'line-through' :
          'none',
        }}
      >
        <input
          type="checkbox"
          checked={this.props.complete}
          onChange={this.onChange}
        />
        {this.props.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  complete: React.PropTypes.bool.isRequired,
  onToggleActive: React.PropTypes.func.isRequired,
};

export default TodoItem;
