import React from 'react'
import {LoginForm, RegisterForm} from '../../modules'
import {Route, Switch} from 'react-router-dom'
import './Auth.scss'

type TProps = {}

const Auth: React.FC<TProps> = () => {

  return (
    <section className='auth'>
      <div className='content'>
        <Switch>
          <Route exact path={['/', '/login']} render={() => <LoginForm/>}/>
          <Route exact path='/register' render={() => <RegisterForm/>}/>
        </Switch>
      </div>
    </section>
  )
}

export default Auth