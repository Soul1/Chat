import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth, Home} from './pages'

type TProps = {}

const App: React.FC<TProps> = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path={['/', '/login']} render={() => <Auth/>}/>
        <Route exact path={['/', '/home']} render={() => <Home/>}/>
      </Switch>

    </div>
  )
}

export default App
