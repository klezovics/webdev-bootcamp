import Header from "./3_css_practice/6_libraries/1_bootstrap/header";
import './App.css';
import AppHero from "./3_css_practice/6_libraries/1_bootstrap/hero";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <header>
                <Header/>
            </header>
            <main>
                <AppHero/>
                <Button>Hola!</Button>
            </main>
        </div>
    );
}

export default App;
