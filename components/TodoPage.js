import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import todoAction from "../actions/todoAction";

class TodoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getTodos();
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        let title = this.state.title;
        let description = this.state.description;
        if (title && description) {

            let todo = {
                title: title,
                description: description
            };

            this.props.addTodo(todo);
        }
    };

    render() {

        return (
            <div className="container">

                <h3>Hello React and Firebase !</h3>

                <form onSubmit={this.onSubmit} className="form-horizontal">

                    <div className="form-group form-group-sm">
                        <div className="col-xs-4">
                            <label className="control-label" htmlFor="title">Title:</label>
                            <input type="text" name="title" className="form-control input-sm"
                                   onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-group form-group-sm">
                        <div className="col-xs-4">
                            <label className="control-label" htmlFor="description">Description:</label>
                            <input type="text" name="description" className="form-control input-sm"
                                   onChange={this.onChange}/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">Add</button>

                </form>

            </div>
        );
    }
}

TodoPage.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todo)=> {
            dispatch(todoAction.addTodo(todo));
        },
        getTodos: ()=> {
            dispatch(todoAction.getTodos());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);


