import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ProjectResults from "./ProjectResults";
import { Button, Panel, Modal } from "react-bootstrap";
import NewProjectModal from "../containers/NewProjectModal";

const EC_Nelson_Mandela_district = [
  {
    name: "Alfred Ndzo District Municipality",
  },
  {
    name: "Amathole District Municipality",
  },
  {
    name: "Chris Hani District Municipality",
  },
  {
    name: "Joe Gqabi District Municipality",
  },
  {
    name: "OR Tambo District Municipality",
  },
  {
    name: "Sarah Baartman District Municipality",
  },
];

const EC_Buffalo_city_district = [
  {
    name: "Buffalo City Metropolitan",
  },
  {
    name: "Nelson Mandela Metropolitan",
  },
];

class ProjectResultsComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      data: [],
      isLoading: false,
      show: false,
      role: "",
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    this.setState({
      data: this.props.value,
      role: sessionStorage.getItem("role"),
      isLoading: false,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleShow}>New Project</Button>
        <br />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Project Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewProjectModal />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <br />
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Eastern Cape</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Panel id="collapsible-panel-example-2">
                <Panel.Heading>
                  <Panel.Title toggle>Buffalo City Metropolitan</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <ProjectResults
                      value={this.props.value}
                      province="Eastern Cape"
                    />
                  </Panel.Body>
                </Panel.Collapse>
              </Panel>
              <Panel id="collapsible-panel-example-2">
                <Panel.Heading>
                  <Panel.Title toggle>Nelson Mandela Metropolitan</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    {EC_Nelson_Mandela_district.map(({ name }) => (
                      <Panel id="collapsible-panel-example-2">
                        <Panel.Heading>
                          <Panel.Title toggle>{name}</Panel.Title>
                        </Panel.Heading>
                        <Panel.Collapse>
                          <Panel.Body>
                            <ProjectResults
                              value={this.props.value}
                              province="Eastern Cape"
                              municipality={name}
                            />
                          </Panel.Body>
                        </Panel.Collapse>
                      </Panel>
                    ))}
                  </Panel.Body>
                </Panel.Collapse>
              </Panel>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Kwa-Zulu Natal</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Panel id="collapsible-panel-example-2">
                <Panel.Heading>
                  <Panel.Title toggle>eThekwini Metropolitan Municipality</Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <ProjectResults
                      value={this.props.value}
                      province="Kwa-Zulu Natal"
                      municipality="eThekwini Metropolitan Municipality"
                    />
                  </Panel.Body>
                </Panel.Collapse>
              </Panel>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle> Free State</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults value={this.props.value} province="Free State" />??
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Gauteng</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults value={this.props.value} province="Gauteng" />??
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Limpopo</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults value={this.props.value} province="Limpopo" />??
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Mpumalanga</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults value={this.props.value} province="Mpumalanga" />??
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Northern Cape</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults
                value={this.props.value}
                province="Northern Cape"
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>North West</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults value={this.props.value} province="North West" />??
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <Panel id="collapsible-panel-example-2">
          <Panel.Heading>
            <Panel.Title toggle>Western Cape</Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ProjectResults
                value={this.props.value}
                province="  Western Cape"
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

export default withRouter(ProjectResultsComponent);
