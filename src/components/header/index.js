import React, { Component } from 'react'
import {Layout,Row,Col,Divider} from 'antd'
import './style.css'

export default class Header extends Component {
  render() {
    return (
      <Layout.Header>
        <Row className='wrap'>
          <Col md={6} xs={24}>
            <h1 id="logo">Cnode</h1>
          </Col>
          <Col md={18} xs={0}>
            <Divider type="vertical"/>
          </Col>
        </Row>
      </Layout.Header>  
    )
  }
}
