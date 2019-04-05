import React, { Component } from 'react'
import { Button, notification ,Progress,Spin, Alert ,Skeleton } from 'antd';

const Demo = () => (
  <div>
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
  </div>
);

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default class About extends Component {
  render() {
    return (
      <div>
      <Demo />
      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
      <Spin tip="Loading...">
      <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
      </Spin>
      <Skeleton active />
  </div>
    )
  }
}
