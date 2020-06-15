import React from 'react';
import { Form, Input, Button, Select, Space } from 'antd';

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 18,
      offset: 6,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = ({ onRegisterUser }) => {
  const [form] = Form.useForm();
  const onFormSubmit = (values) => {
    onRegisterUser(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 80,
        }}
      >
        <Option value="381">+381</Option>
        <Option value="382">+382</Option>
        <Option value="383">+383</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="main-container">
      <Space direction="vertical" size="large">
        <Form {...formItemLayout} form={form} name="registration" layout="horizontal" onFinish={onFormSubmit}>
          <Form.Item
            name="firstName"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Name is required!',
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input placeholder="Please input your name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[
              {
                required: true,
                message: 'Last name is requred!',
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input placeholder="Please input your last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'E-mail is required!',
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input placeholder="Please input your E-mail" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Phone number is required!',
              },
            ]}
            validateTrigger="onBlur"
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};

export default RegistrationForm;
