import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

const AppHero = () => {
    return (
        <>
            <div>AppHero</div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://static.thenounproject.com/png/3102418-200.png"
                        alt="First slide"
                        style={{ maxWidth: "200px", maxHeight: "150px" }}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://static.thenounproject.com/png/3102418-200.png"
                        alt="First slide"
                        style={{ maxWidth: "200px", maxHeight: "150px" }}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default AppHero;