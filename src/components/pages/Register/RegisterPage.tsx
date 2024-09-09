import React from 'react';
import Icon from '../../atoms/Icon';
import { LogoIcon } from '../../../assets/icons/Icons';
import Card from '../../atoms/Card';
import Input from '../../atoms/Input';
import Button from '../../molecules/Button';
import HorizontalLine from '../../atoms/HorizontalLine';
import GoogleButton from '../../molecules/GoogleButton';

const RegisterPage: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="p-8 flex flex-col items-center justify-center gap-5">
      <Icon src={LogoIcon} />
      <p>Create your account</p>
      <Card size="large" className="bg-gray-10 flex flex-col gap-5 p-10">
        <div>
          <h6>Name</h6>
          <Input
            type="text"
            label="Name"
            size="login"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <h6>Email</h6>
          <Input
            type="email"
            label="Email"
            size="login"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <h6>Password</h6>
          <Input
            type="password"
            label="Password"
            size="login"
            placeholder="Enter your password"
          />
        </div>
        <div>
          <h6>Confirm Password</h6>
          <Input
            type="password"
            label="Confirm Password"
            size="login"
            placeholder="Confirm your password"
          />
        </div>
        <div>
          <Button
            text="Sign Up"
            size="login"
            variant="primary"
            onClick={() => {}}
            isLoading={false}
            disabled={false}
          />
        </div>
        <div>
          <p>Already have an account?</p>
          <Button
            text="Sign In"
            size="login"
            variant="primary"
            onClick={() => {}}
            isLoading={false}
            disabled={false}
          />
        </div>
        <HorizontalLine size="small" />
        <GoogleButton />
      </Card>
    </div>
  </div>
);

export default RegisterPage;
