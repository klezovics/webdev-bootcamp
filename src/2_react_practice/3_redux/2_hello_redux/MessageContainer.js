import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MessageContainerWithConnect = ({ message, setMessage }) => {
  const [inputValue, setInputValue] = useState("");

  const updateMessage = (msg) => {
    setMessage(msg);
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

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessage: (message) =>
      dispatch({ type: "UPDATE_MESSAGE", payload: message }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainerWithConnect);
