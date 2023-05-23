import {useState} from "react";
import {connect} from "react-redux";

const ToDoWidget = ({todos, addToDo}) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <h1>ToDo Widget</h1>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => addToDo(inputValue)}>Add todo</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToDo: (todo) => dispatch({type: "ADD_TODO", payload: todo}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoWidget);