import Button from "@mui/material/Button";
import MyAutocomplete from "./inputs/text/MyAutocomplete";
import MyCheckbox from "./inputs/MyCheckbox";
import MyFab from "./inputs/button/MyFab";

const MaterialDemo = () => (
  <>
    <MyFab />
    <MyCheckbox />
    <MyAutocomplete />
    <h1>Material demo</h1>
    <Button variant="outlined">Hello World</Button>
  </>
);

export default MaterialDemo;
