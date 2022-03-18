import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >

                    {
                        props.isAuthenticated ?

                            <Menu.Item key="2" onClick={props.logout}>
                                Logout
                            </Menu.Item>

                            :
                            <>
                            <Menu.Item key="2">
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/signup">Signup</Link>
                            </Menu.Item>
                            </>
                    }

                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Nemesis</Footer>
        </Layout>
    )   
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(CustomLayout);