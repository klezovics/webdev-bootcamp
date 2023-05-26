import { Figure } from "react-bootstrap";

const MyFigure = () => (
  <Figure>
    <Figure.Image
      width={100}
      height={100}
      alt="171x180"
      src="https://picsum.photos/100/100"
    />
    <Figure.Caption>
      This is the most beautiful picture I've ever seen.
    </Figure.Caption>
  </Figure>
);

export default MyFigure;
