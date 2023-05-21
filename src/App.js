import MaterialDemo from "./3_css_practice/6_libraries/2_material/MaterialDemo";
import TypographyDemo from "./3_css_practice/3_styling/1_typography/TypographyDemo";
import StarWarsFilm from "./2_react_practice/4_consume_rest_api/1_react_query/StarWarsFilm";
import {QueryClient} from "react-query";
import StarWarsFilmWrapper from "./2_react_practice/4_consume_rest_api/1_react_query/StarWarsFileWrapper";
import StarWarsFilmViaFetch from "./2_react_practice/4_consume_rest_api/2_fetch_api/StarWarsFilmViaFetch";

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
           <StarWarsFilmViaFetch/>
        </div>
    );
}

export default App;
