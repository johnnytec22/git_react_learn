import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class LoginApp extends React.Component {
  render() {
    return (
      <div>
        <Nav brandName = 'Jovinx' />
        <Content />
      </div>
    );
  }
}

class LoginButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isFormVisible : false
    }

    this.renderLoginForm = this.renderLoginForm.bind(this);
    this.hideLoginForm = this.hideLoginForm.bind(this);
  }

  renderLoginForm(e) {
    e.preventDefault()
    this.setState({
      isFormVisible: true
    })
  }

  hideLoginForm(e) {
    e.preventDefault();
    this.setState({
      isFormVisible: false
    })
  }


  render() {
    if(this.state.isFormVisible) {
      return (
        <div>
          <a onClick={this.renderLoginForm} href="/login"><button id="login-btn" type="button">LOGIN</button></a>
          <a onClick={this.hideLoginForm} href="/login"><button id="login-btn" type="button">x</button></a>
          <LoginForm />
        </div>
      )
    }else{
      return (
        <div>
          <a onClick={this.renderLoginForm} href="/login"><button id="login-btn" type="button">LOGIN</button></a>
        </div>
      )
    }
    
  }
  
}


class RegisterButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      action: false
    }
    this.renderRegisterForm = this.renderRegisterForm.bind(this);
  }

  renderRegisterForm(e) {
    e.preventDefault();
    this.setState({
      action : true
    })
  }


  hideRegisterForm(e) {
    e.preventDefault();
    this.setState({
      action: false
    })
  }

  render() {
    if(this.state.action) {
      return (
        <div>
          <a onClick={this.renderRegisterForm} href="/register"><button id="register-btn" type="button">REGISTER</button></a>
          <a onClick={this.hideRegisterForm.bind(this)} href="/register"><button id="register-btn" type="button">HIDE</button></a>
          <div><RegisterForm /></div>
        </div>
      )
    }else{
      return (
        <div>
          <a onClick={this.renderRegisterForm} href="/register"><button id="register-btn" type="button">REGISTER</button></a>
          
        </div>
      )
    }

    
  }
  
}



class LoginForm extends React.Component {
  render() {
    return (
      <div>Login Form</div>
    );
  }
}

class RegisterForm extends React.Component {
  render() {
    return (
      <div>Register Form</div>
    );
  }
}


function CallToActions() {
  return (
    <div id="call-to-actions" style={{}}>
      <span><RegisterButton /></span>
      <span><LoginButton /></span>
    </div>
  )
}


function Welcome(props) {
  let para = 'We help you and your businesses store, manage and record business critical data from you guests'
  
  return (
    <div id="welcome-text" >
      <h1>Welcome to Jovinx</h1>
      <p>{para}</p>
    </div>
  )
}

function ContentInner(props)  {
  return (
    <div id="inner-content">
      <Welcome />
      <CallToActions />
    </div>
  )
}






class Content extends React.Component {
  render() {
    return (
      <div id="main-content">
        <ContentInner />
      </div>
    );
  }
}



class Nav extends React.Component {
  render() {
    return (
      <div className="nav">{this.props.brandName}</div>
    );
  }
}





export default LoginApp;


