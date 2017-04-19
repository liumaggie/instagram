import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.checkIfLogIn = this.checkIfLogIn.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== newProps.formType ) {
      this.props.clearErrors();
    }
  }

  handleInput(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  redirect() {
    this.props.router.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user).then(() => this.redirect(),
                                      () => this.setState({username: '', password: ''}));
  }

  checkIfLogIn() {
    return this.props.formType === 'login';
  }

  handleDemo() {
    const demoUser = { username: 'testing', password: 'password' };
    this.props.login(demoUser).then(() => this.redirect());
  }

  render() {
    let formType = this.checkIfLogIn() ? 'Log In' : 'Sign Up';
    let alternateText = this.checkIfLogIn() ? `Don't have an account?` : `Have an account?`;
    let alternateLink = this.checkIfLogIn() ? ' Sign Up' : ' Log In';
    let alternatePath = this.checkIfLogIn() ? '/sign-up' : '/log-in';
    let description = this.checkIfLogIn() ? '' : 'Sign up to see photos of puppies from your friends!';
    return(
      <div className='auth-full-page group'>

          <div className='phone-img col col-1-4'>
            <img src={'/assets/pixel_bg.jpg'} />
          </div>

          <section className='right-container'>

            <div className='auth-container col col-1-5'>
              <h1>Instapups</h1>
              <h3>{ description }</h3>
              <button onClick={ this.handleDemo }>Demo Login</button>

              <form className='auth-form' onSubmit={ this.handleSubmit }>

                <div className='username'>
                  <input
                    type='text'
                    placeholder='Username'
                    onChange={ this.handleInput('username') }
                    value={ this.state.username }
                    />

                </div>

                <div className='password'>
                  <input
                    type='password'
                    placeholder='Password'
                    onChange={ this.handleInput('password') }
                    value={ this.state.password } />
                </div>

                <div>
                  <input type='submit' value={formType} />
                </div>

                <div className='errors'>
                  <ul>
                    { this.props.errors.map((error) => <li key={error}>{ error }</li>) }
                  </ul>
                </div>

              </form>
            </div>


            <div className='switch-auth col col-1-5'>
              <p>{alternateText}
                <Link to={alternatePath} className='link'>{ alternateLink }</Link>
              </p>
            </div>

          </section>
      </div>
    );
  }
}

export default AuthForm;
