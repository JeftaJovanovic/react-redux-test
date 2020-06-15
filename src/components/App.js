import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import '../App.css';

import RegistrationForm from './RegistrationForm';
import UserRegistrationInfo from './UserRegistrationInfo';

const { Header, Footer, Content } = Layout;
const App = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header>Header</Header>
        <Content className="main-layout">
          <Row>
            <Col span={12} offset={6}>
              <BrowserRouter>
                <Route path="/" exact component={RegistrationForm} />
                <Route path="/info" component={UserRegistrationInfo} />
              </BrowserRouter>
            </Col>
          </Row>
        </Content>
        <Footer style={{ backgroundColor: '#001529' }}></Footer>
      </Layout>
    </React.Fragment>
  );
};

export default App;
