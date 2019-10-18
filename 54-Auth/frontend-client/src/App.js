import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {currentUser: null}
  }

  //change currentUser to be Charles Bing
  onChangeUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" render={() => {
            return this.state.currentUser === null ?
            <LoginForm onChangeUser={this.onChangeUser}/> :
            <Redirect to="/profile" />
          }} />
          <Route exact path="/profile" render={() => {
            return this.state.currentUser === null ?
            <Redirect to="/login" /> :
            <Profile currentUser={this.state.currentUser}/>
          }}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
