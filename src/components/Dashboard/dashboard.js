import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import './dashboard.css';

import Question from '../QuestionForm/question';

class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1'
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md='12'>
            <h1 className='text-center' >PonderPal</h1>
          </Col>
        </Row>
        <Row>
          <Col md='12'>
            <Nav className="tab-lead" tabs>
              <NavItem className="tab-header">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}
                >
                  <h3>About You</h3>
                </NavLink>
              </NavItem>
              <NavItem className="tab-header">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}
                >
                  <h3>Discover</h3>
                </NavLink>
              </NavItem>
              <NavItem className="tab-header">
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}
                >
                  <h3>Connect</h3>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col md="12">
                    <Question></Question>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col md="12">
                    <h4>Discover</h4>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col md="12">
                    <h4>Connect!</h4>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );  
  }
}

export default Dashboard; 