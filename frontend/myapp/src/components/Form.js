import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {
  const onFinish = (values) => {
    const email = values.email
    const address = values.address
    console.log('Success:', props);
    axios.patch(`http://127.0.0.1:8000/api/user/${props.userId}/`, {
          email:email,
      })
          .then(res => console.log(res))
          .catch(error => console.log(error));
    if(props.address)
    {
        axios.patch(`http://127.0.0.1:8000/api/person/${props.userId}/`, {
          address:address,
      })
          .then(res => console.log(res))
          .catch(error => console.log(error));
    }
    else
    {
        axios.post(`http://127.0.0.1:8000/api/person/`, {
          user:props.userId,
          address:address,
      })
          .then(res => console.log(res))
          .catch(error => console.log(error));
    }
    
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        initialValue={props.email}
        rules={[
          {
            message: 'Please enter a new email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Address"
        name="address"
        initialValue={props.address}
        rules={[
          {
            message: 'Please enter a new address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

     
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CustomForm