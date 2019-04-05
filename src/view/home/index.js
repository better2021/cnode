import React, { Component } from 'react'

import { Carousel ,Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
      </div>     
    )
  }
}
