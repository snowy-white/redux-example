import React, {Component, PropTypes} from 'react';

class TodoFilter extends Component {
    constructor(props) {
        super(props);
    }
    handleFilter(type) {
        this.props.filterHandler(type);
    }
    render() {
        return (
            <div>
                <div className="filter">
                    <input type="radio" name="radio" value="SHOW_ALL"  onClick={this.handleFilter.bind(this, "SHOW_ALL") }/>All
                    <input type="radio" name="radio" value="SHOW_COMPLETE" onClick={this.handleFilter.bind(this, "SHOW_COMPLETE") }/>Finished
                    <input type="radio" name="radio" value="SHOW_ACTIVE" onClick={this.handleFilter.bind(this, "SHOW_ACTIVE") }/>Undo
                </div>
            </div>
        );
    }
}

TodoFilter.propTypes = {
    filterHandler: PropTypes.func.isRequired
};

export default TodoFilter;
