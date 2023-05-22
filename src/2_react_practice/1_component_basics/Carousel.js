import styled from "styled-components";
import {useState} from "react";

const Card = ({greeting, color}) => {

    const CardTemplate = styled.div`
      background-color: ${color};
      width: 200px;
      height: 200px;
    `
    return (
        <CardTemplate>
            <h1>{greeting}</h1>
        </CardTemplate>
    );
}

const MyButton = styled.button`
  padding: 20px;
  margin: 10px;
`

class Scroller {
    constructor(arr) {
        this.arr = arr;
        this.index = 0;
        this.length = arr.length;
    }

    next() {
        this.index = (this.index + 1) % this.length;

        const value = this.arr[this.index];
        return value;
    }

    prev() {
        if (this.index === 0) {
            this.index = this.length - 1;
        } else {
            this.index -= 1
        }

        const value = this.arr[this.index];
        return value;
    }
}

const cardDatas = [
    {greeting: "hello", color: "red"},
    {greeting: "hi", color: "green"},
    {greeting: "hey", color: "blue"},
]

const scroller = new Scroller(cardDatas);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100vh;
`

const Carousel = () => {

    const [state, setState] = useState({color: "bisque", greeting: "hello"});

    const prev = () => {
        const value = scroller.prev();
        setState(value);
    }

    const next = () => {
        const value = scroller.next();
        setState(value);
    }

    return (
        <Container>
            <div className="carousel">
                <div className="button-group">
                    <Card greeting={state.greeting} color={state.color}/>
                    <MyButton className="button" onClick={prev}>Prev</MyButton>
                    <MyButton className="button" onClick={next}>Next</MyButton>
                </div>
            </div>
        </Container>
    );
}

export default Carousel;