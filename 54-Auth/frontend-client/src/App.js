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
    this.state = {
      currentUser: null,
      loading: true
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('jwt')
    if(token){
      fetch('http://localhost:3000/api/v1/profile', {
        headers: {"Authentication": `Bearer ${token}`}
      })
      .then(res => res.json())
      .then(data => {
        this.onChangeUser(data.user_data)
        this.onChangeLoading(false)
      })
    }else{
      this.onChangeLoading(false)
    }
  }

  onChangeLoading = (bool) => {
    this.setState({loading: bool})
  }

  //change currentUser to be Charles Bing
  onChangeUser = (user) => {
    this.setState({currentUser: user})
  }

  render(){
    let {currentUser} = this.state
    //vanilla JS here
    return (
      !this.state.loading ? <Fragment>
        <Nav logged_in={!!this.state.currentUser} onChangeUser={this.onChangeUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" render={() => (
            currentUser ? <Redirect to="/profile" /> :
            <LoginForm onChangeUser={this.onChangeUser}/>
          )} />
          <Route exact path="/profile" render={() => (
            currentUser ?
            <Profile currentUser={this.state.currentUser}/> :
            <Redirect to="/login" />
          )}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment> : null
    )
  }
}

export default withRouter(App)
