import {react,useState,useEffect} from "react";
import { Form, Input, Button, Checkbox,Spin } from 'antd';
import {  NavLink } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const LoginForm = (props) => {
  const onFinish = (values) => {
    props.onAuth(values.username,values.password);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [errorMessage,setErrorMessage] = useState(null);

  useEffect(() => {
      console.log(props.error)
      setErrorMessage(props.error)
  } 
  ,[props.error]);
  
  return (
    <div>
    {errorMessage}
    {
      props.loading?antIcon:
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
            wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          OR
          <NavLink to='/signup/'>
            Signup
          </NavLink>
        </Form.Item>
      </Form>
    } 
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    loading:state.loading,
    error:state.error
  }
}
const mapDispatchToProps = dispatch=>{
  return{
    onAuth:(username,password)=>dispatch(actions.authLogin(username,password))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
