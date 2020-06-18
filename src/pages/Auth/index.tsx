import React from 'react'
import {ShadowBlock} from '../../components'
import {LoginForm} from '../../modules'
import {Route, Switch} from 'react-router-dom'
import './Auth.scss'

type TProps = {}

const Auth: React.FC<TProps> = () => {

  return (
    <section className='auth'>
      <div className='content'>
        <ShadowBlock>
          <Switch>
            <Route exact to='/auth' render={() => <LoginForm/>}/>
          </Switch>
        </ShadowBlock>

      </div>
    </section>
  )
}

export default Auth