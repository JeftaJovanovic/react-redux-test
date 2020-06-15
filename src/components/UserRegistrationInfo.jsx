import React, { Fragment } from 'react';
import { Descriptions, Button } from 'antd';

const UserRegistrationInfo = ({ registrationForm, onLogout }) => {
  const { firstName, lastName, email, prefix, phone } = registrationForm;

  return (
    <Fragment>
      <Descriptions title="User Info">
        <Descriptions.Item label="First name" span={2}>
          {firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name" span={2}>
          {lastName}
        </Descriptions.Item>
        <Descriptions.Item label="Email" span={2}>
          {email}
        </Descriptions.Item>
        <Descriptions.Item label="Phone number" span={2}>
          {prefix}
          {phone}
        </Descriptions.Item>
      </Descriptions>
      <Button type="primary" onClick={onLogout}>
        Logout
      </Button>
    </Fragment>
  );
};

export default UserRegistrationInfo;
