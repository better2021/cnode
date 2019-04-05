import React, { Component } from 'react'
import { Empty ,Rate, Upload, Icon, Modal} from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default class Details extends Component {
  state = {
    value:3,
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }]
  }

  handleChangeStart = (value) => {
    this.setState({ value });
  }

  handleCancel = () =>  this.setState({previewVisible:false})

  handlePreview = (file) => {
    this.setState({
      previewImage:file.url || file.thumbUrl,
      previewVisible:true
    })
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
    const { value } = this.state;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Empty />
        <span>
          <Rate tooltips={desc} onChange={this.handleChangeStart} value={value} />
          {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>

        <div className="clearfix">
        <Upload
          action="//jsonplaceholder.typicode.com/posts/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      </div> 
    )
  }
}
