import React, { Component } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import MainSearch from '../containers/MainSearch';
 

export default class TabView extends Component {
    render(){
        return(
            <Tabs defaultActiveKey={1} id="maintabview">
                <Tab eventKey={1} title="Phase 1">
                    <MainSearch/>
                </Tab>
                <Tab eventKey={2} title="Phase 2" disabled>
                    Phase 2
                </Tab>
                <Tab eventKey={3} title="Phase 3" disabled>
                    Phase 3
                </Tab>
            </Tabs>
        );
    }
}