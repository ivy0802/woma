import React from 'react';
import ReactDOM from 'react-dom';
import TableBasic from './TableBasic';
import NestedTable from './NestedTable';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const { Header, Content, Footer } = Layout;
const ButtonGroup = Button.Group;

ReactDOM.render(
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Scenarios Overview</Menu.Item>
                <Menu.Item key="3">Scenarios Dashboard</Menu.Item>
                <Menu.Item key="4">Site Management</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Scenarios Overview</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Row>
                    <Col span={12}>
                        <Button type="primary">+ Add new scenario</Button>
                    </Col>
                    <Col span={12}>
                        <ButtonGroup className="float-right">
                            <Button>FORCAST</Button>
                            <Button>PLANNING</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <NestedTable/>
                </Row>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>DHI ©2019 Created by ZCHE</Footer>
    </Layout>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
