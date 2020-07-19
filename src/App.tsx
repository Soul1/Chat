import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth, Home} from './pages'

type TProps = {}

const App: React.FC<TProps> = () => {
  return (
    <div className='app'>
      <Switch>
        <Route exact path={['/', '/login', '/register']} render={() => <Auth/>}/>
        <Route exact path={['/', '/home']} render={() => <Home/>}/>
        <Route path='*' render={() => <div className='fzf'>404 NOT FOUND</div>}/>
      </Switch>

    </div>
  )
}

export default App
