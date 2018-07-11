import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../Components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW-ALL': 
            return todos
        case 'SHOW-COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW-ACTIVE':
            return todos.filter(t => !t.completed)
    }
}

const mapStateToProps =  state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            odispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapDispatchToProps,
    mapStateToProps,
)(TodoList)

export default VisibleTodoList