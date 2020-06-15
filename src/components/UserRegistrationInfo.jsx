import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Descriptions } from 'antd';

const UserRegistrationInfo = (props) => {
  const { firstName, lastName, email, prefix, phone } = props.registrationForm;
  return (
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
  );
};

const mapStateToProps = (state) => {
  debugger;
  return {
    registrationForm: state.registrationForm,
  };
};

export default connect(mapStateToProps)(UserRegistrationInfo);
