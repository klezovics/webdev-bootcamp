import styled from "styled-components";

const RedTextDiv = styled.div`
    color: red;
`

const FunnyFontFamilyDiv = styled.div`
  font-family: 'Comic Sans MS', 'Arial', sans-serif;
`

const BigFontDiv = styled.div`
  font-size: xxx-large;
`


const TypographyDemo = () => (
    <>
        <div>Typography demo</div>
        <RedTextDiv>This text is red</RedTextDiv>
        <FunnyFontFamilyDiv>This text is comic sans ms</FunnyFontFamilyDiv>
        <BigFontDiv>This is some big text</BigFontDiv>
    </>
)

export default TypographyDemo