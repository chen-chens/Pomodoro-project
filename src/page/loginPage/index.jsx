import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Input } from 'antd';
import AlertNotification from '../../common/alertNotification';
// import UserContext from '../../context/userContext';

export default function LoginPage() {
  const history = useHistory();
  // const { setUserState } = useContext(UserContext);

  const rules = [
    {
      required: true,
      message: '必填項目',
    },
  ];

  const onFinish = (values) => {
    console.log('Success:', values);
    // setUserState({
    //   hasLogin: true,
    //   userInfo: { name: 'Joanna' },
    // });
    history.push('/toDoPage');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    AlertNotification({
      type: 'error',
      message: '帳號或密碼輸入錯誤',
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={rules}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={rules}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}
