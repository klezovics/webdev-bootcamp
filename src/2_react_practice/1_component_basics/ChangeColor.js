import styled from "styled-components";
import {useReducer, useState} from "react";
const ChangeColor = () => {

    const [color, setColor] = useState("red")

    const Block = styled.div`
      background-color: ${color};
      height: 200px;
      width: 200px;
    `
    const changeColor = () => {
        const newColor = color === "red" ? "green" : "red"
        setColor(newColor)
    }

    return (
        <div>
            <Block/>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ChangeColor;