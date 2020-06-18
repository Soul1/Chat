import React from 'react'
import {Form, Input} from 'antd'
import {Button, ShadowBlock} from '../../../components'
import {UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone} from '@ant-design/icons'
import {Store} from 'antd/lib/form/interface'
import {NavLink} from 'react-router-dom'

type TProps = {
  success?: boolean
}

const RegisterForm: React.FC<TProps> = ({success= true}) => {

  const onFinish = (values: Store) => {
    console.log('Received values of form: ', values)
  }
  return (
    <>
      <div className='auth__info'>
        <h2 className='auth__info-title'>
          Регистрация
        </h2>
        <p className='auth__info-text'>
          Для входа в чат, вам нужно зарегистрироваться
        </p>
      </div>
      <ShadowBlock>
        {!success ?
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{remember: true}}
          onFinish={onFinish}>
          <Form.Item
            name='username'
            rules={[{required: true, message: 'Пожалуйста введите ваше имя!'}]}>
            <Input prefix={<UserOutlined className='site-form-item-icon'/>}
                   placeholder='Ваше имя'/>
          </Form.Item>
          <Form.Item
            name='email'
            rules={[{required: true, message: 'Пожалуйста введите почту!'}]}>
            <Input
              prefix={<MailOutlined className='site-form-item-icon'/>}
              type='email'
              placeholder='Email'/>
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}>
            <Input
              prefix={<LockOutlined className='site-form-item-icon'/>}
              type='password'
              placeholder='Пароль'/>
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{required: true, message: 'Пожалуйста введите ваш пароль повторно!'}]}>
            <Input
              prefix={<LockOutlined className='site-form-item-icon'/>}
              type='password'
              placeholder='Повторить пароль'/>
          </Form.Item>
          <Form.Item>
            <Button classN='button--large' size='large'>Зарегистрироваться!</Button>
            <div className='or-register'>
              <NavLink to='/login'>Войти в аккаунт</NavLink>
            </div>
          </Form.Item>
        </Form> :
          <div className='auth__success-block'>
            <div className='auth__success-block__svg'>
              <InfoCircleTwoTone style={{fontSize: '50px'}} />
            </div>
            <h3 className='auth__success-block__title'>
              Подтвердите свой аккаунт
            </h3>
            <p className='auth__success-block__text'>
              На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
            </p>
          </div>
        }
      </ShadowBlock>
    </>
  )
}

export default RegisterForm