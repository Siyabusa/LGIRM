import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import AddProjectDetailsModal from "../../../containers/addProjectDetailsModal";

class ContractorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }


  render() {
    return (
      <div>
        <h2>Contractor Details</h2>
        <br />
        <Button onClick={this.handleShow}>Add Contractor</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contractor Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddProjectDetailsModal />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        Ï
      </div>
    );
  }
}

export default ContractorDetails;
