import {QueryClient} from "react-query";
import ReduxClient from "./2_react_practice/3_redux/2_hello_redux/ReduxClient";


function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
          <ReduxClient />
        </div>
    );
}

export default App;
