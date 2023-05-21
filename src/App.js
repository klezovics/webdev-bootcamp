import MaterialDemo from "./3_css_practice/6_libraries/2_material/MaterialDemo";
import TypographyDemo from "./3_css_practice/3_styling/1_typography/TypographyDemo";
import StarWarsFilm from "./2_react_practice/4_consume_rest_api/StarWarsFilm";
import {QueryClient} from "react-query";
import StarWarsFilmWrapper from "./2_react_practice/4_consume_rest_api/StarWarsFileWrapper";

function App() {
    const queryClient = new QueryClient();

    return (
        <div className="App">
           <StarWarsFilmWrapper/>
        </div>
    );
}

export default App;
