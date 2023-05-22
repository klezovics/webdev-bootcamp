import {QueryClient} from "react-query";
import StarWarsFilmViaAxios from "./2_react_practice/4_consume_rest_api/3_axios/StarWarsFilmViaAxios";
import ChangeColor from "./2_react_practice/1_component_basics/ChangeColor";
import Carousel from "./2_react_practice/1_component_basics/Carousel";

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
           <Carousel/>
        </div>
    );
}

export default App;
