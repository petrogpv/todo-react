import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class FilterSearchComponent extends Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      deleted: PropTypes.bool.isRequired,
      archived: PropTypes.bool.isRequired,
    })).isRequired,
    searchFilter: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.changeTaskText = this.changeTaskText.bind(this);
  }

  changeTaskText(e: Event) {

    e.preventDefault();  // optional, not necessary in this case, but for consistency

    this.props.searchFilter(this.props.todos.filter(todo => todo.task.includes(e.target.value)));
  }


  render() {
    return(
      <div className="form-group row">
      <input type="text" onChange={this.changeTaskText} />
    </div>
    );
  }

}

