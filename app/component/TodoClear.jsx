import React, {Component, PropTypes} from 'react';

class TodoClear extends Component {
    render() {
        return (
            <div>
                <button className="clear" onClick={this.props.handleClear}>Clear
                </button>
            </div>
        );
    }
}

TodoClear.propTypes = {
    handleClear: PropTypes.func.isRequired
};

export default TodoClear;