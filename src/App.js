import {QueryClient} from "react-query";
import StarWarsFilmViaAxios from "./2_react_practice/4_consume_rest_api/3_axios/StarWarsFilmViaAxios";

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
           <StarWarsFilmViaAxios/>
        </div>
    );
}

export default App;
