import store from "./store";
import {Provider, useDispatch, useSelector} from "react-redux";
import {useState} from "react";

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

const ReduxClient = () => {
    return (
        <div>
            <Provider store={store}>
              <ReduxStoreConsumer />
            </Provider>
        </div>
    );
}

export default ReduxClient;
