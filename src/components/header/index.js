import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Layout,Row,Col,Divider, Menu,Icon} from 'antd'
import './style.css'
 
export default class Header extends Component {
  render() {
    return (
      <Layout.Header>
        <Row className='wrap'>
          <Col md={6} xs={24}>
            <h1 id="logo">Cnode</h1>
          </Col>
          <Col md={18} xs={0} className="topBox">
            <Divider type="vertical"/>
            <Menu mode="horizontal" id="nav" theme="dark">
              <Menu.Item>
                <Link to="/index"><Icon type="home" />首页</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/book"><Icon type="book" />教程</Link>  
              </Menu.Item>
              <Menu.Item>
                <Link to="/user"><Icon type="usergroup-add" />用户</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/details"><Icon type="read" />详情</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about"><Icon type="fork" />关于</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>  
    )
  }
}
