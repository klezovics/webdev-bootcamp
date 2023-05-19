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

const SlantedTextDiv = styled.div`
  font-style: oblique;
`

const AllCapsTextDiv = styled.div`
  font-variant: small-caps;
`

const SuperBoldTextDiv = styled.div`
  font-weight: 900;
`

const FarAwayLetterSpacingDiv = styled.div`
  letter-spacing: 10px;
`

const TextWithBigLineHeightDiv = styled.div`
  line-height: 50px;
`

const TextAlignRightDiv = styled.div`
  text-align: right;
`

const UnderlinedTextDiv = styled.div`
  text-decoration: underline;
`

const TextWithBigIndentDiv = styled.div`
  text-indent: 50px;
`

const TextWithShadowDiv = styled.div`
  text-shadow: 2px 2px 5px red;
`

const BoxWithTextOverflowProperty = styled.div`
  width: 100px;
  white-space: nowrap;
  background-color: grey;
  text-overflow: ellipsis;
  overflow: hidden;

  &:hover {
    width: 500px;
  }
`

const AllUppercaseText = styled.div`
  text-transform: uppercase;
`

const TextWithMergedWhiteSpaces = styled.div`
  white-space: pre-line;
`

const SmallBox = styled.div`
  width: 100px;
  background-color: grey;
`

const TextWithBrokenWords = styled.div`
  word-break: break-all;
`

const TextWithBigWordSpacing = styled.div`
  word-spacing: 50px;
`


const TypographyDemo = () => (<>
    <div>This is normal text</div>
    <hr/>
    <RedTextDiv>This text is red</RedTextDiv>
    <hr/>
    <FunnyFontFamilyDiv>This text is comic sans ms</FunnyFontFamilyDiv>
    <hr/>
    <BigFontDiv>This is some big text</BigFontDiv>
    <hr/>
    <SlantedTextDiv>This text is slanted</SlantedTextDiv>
    <hr/>
    <AllCapsTextDiv>Wow ! Some weird text this is !</AllCapsTextDiv>
    <hr/>
    <SuperBoldTextDiv>I am FAT!</SuperBoldTextDiv>
    <hr/>
    <FarAwayLetterSpacingDiv>This text has wide-spaced letters!</FarAwayLetterSpacingDiv>
    <hr/>
    <TextWithBigLineHeightDiv>
        This text has a big line height. More more. Lorem ipsum fdhfjdhfdjhfdjhfjdhfdfdf
        fdfdfdfdfdfdfdfdfdf</TextWithBigLineHeightDiv>
    <hr/>
    <TextAlignRightDiv>This text is right aligned</TextAlignRightDiv>
    <hr/>
    <UnderlinedTextDiv>This text is underlined</UnderlinedTextDiv>
    <hr/>
    <TextWithBigIndentDiv>This text has a big indent!</TextWithBigIndentDiv>
    <hr/>
    <BoxWithTextOverflowProperty>
        Some text that is too long to fit in the box. More text. More text. More text. More text. More text.
    </BoxWithTextOverflowProperty>
    <hr/>
    <TextWithShadowDiv>This text has a shadow</TextWithShadowDiv>
    <hr/>
    <AllUppercaseText>This text is all uppercase</AllUppercaseText>
    <hr/>
    <TextWithMergedWhiteSpaces>This text has a lot of whitespace merged!</TextWithMergedWhiteSpaces>
    <hr/>
    <SmallBox><TextWithBrokenWords>Text with some broker wods </TextWithBrokenWords></SmallBox>
    <hr/>
    <TextWithBigWordSpacing>This text has big words spacing</TextWithBigWordSpacing>
    <hr/>
</>)

export default TypographyDemo