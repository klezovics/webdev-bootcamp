import store from "./store";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import MessageContainer from "./MessageContainer";

const ReduxStoreConsumer = () => {
    const message = useSelector((state) => state.message);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');

    const updateMessage = () => {
        dispatch({ type: "UPDATE_MESSAGE", payload: inputValue });
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => updateMessage(inputValue)}>Update Message</button>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

const ReduxConsumerContainer = () => {
    return (
        <div>
            <Provider store={store}>
              <MessageContainer />
            </Provider>
        </div>
    );
}

export default ReduxConsumerContainer;
