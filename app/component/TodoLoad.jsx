import React, {Component} from 'react';

class TodoLoad extends Component {
    render() {
        return (
            <div>
            <button className="load" onClick={this.props.handleLoad}>load
            </button>
            </div>
        );
    }
}

TodoLoad.propTypes = {
    handleLoad: PropTypes.func.isRequired
};

export default TodoLoad;
