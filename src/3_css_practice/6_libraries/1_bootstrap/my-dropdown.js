import { Dropdown } from "react-bootstrap";

const MyDropdown = () => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      This is a dropdown toggle
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default MyDropdown;
