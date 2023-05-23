import {QueryClient} from "react-query";
import ReduxConsumerContainer from "./2_react_practice/3_redux/2_hello_redux/ReduxConsumerContainer";


function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
          <ReduxConsumerContainer />
        </div>
    );
}

export default App;
