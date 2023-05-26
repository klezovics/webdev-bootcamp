import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const MyModal = () => (
  <div className="modal show" style={{ display: "block", position: "initial" }}>
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>This is an amazing modal</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>You shall not pass!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

export default MyModal;
