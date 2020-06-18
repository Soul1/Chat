import React from 'react'
import {Form, Input} from 'antd'
import {Button, ShadowBlock} from '../../../components'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {Store} from 'antd/lib/form/interface'
import {NavLink} from 'react-router-dom'

type TProps = {}

const LoginForm: React.FC<TProps> = () => {

  const onFinish = (values: Store) => {
    console.log('Received values of form: ', values)
  }
  return (
    <>
      <div className='auth__info'>
        <h2 className='auth__info-title'>
          Войти в аккаунт
        </h2>
        <p className='auth__info-text'>
          Пожалуйста, войдите в свой аккаунт
        </p>
      </div>
      <ShadowBlock>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{remember: true}}
          onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[{required: true, message: 'Пожалуйста введите почту!'}]}>
            <Input prefix={<UserOutlined className='site-form-item-icon'/>} placeholder='Email'/>
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}>
            <Input
              prefix={<LockOutlined className='site-form-item-icon'/>}
              type='password'
              placeholder='Пароль'/>
          </Form.Item>
          <Form.Item>
            <Button classN='button--large' size='large'>Войти в аккаунт</Button>
            <div className='or-register'>
              <NavLink to='/register'>Зарегистрироваться!</NavLink>
            </div>
          </Form.Item>
        </Form>
      </ShadowBlock>
    </>
  )
}

export default LoginForm