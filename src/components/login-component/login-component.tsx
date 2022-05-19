import { Component, h, State, Listen, Event, EventEmitter } from '@stencil/core';

export interface UserCredentials {
  username: string
  password: string
}

@Component({
  tag: 'ct-login',
  styleUrl: 'login-component.css',
  shadow: true,
})
export class LoginComponent {

  @State() username: string
  @State() password: string = ''
  @State() pwIsDirty: boolean

  @Event() login: EventEmitter<UserCredentials>

  componentWillLoad() {
    this.pwIsDirty = false
  }

  updateName(event) {
    this.username = event.target.value
    console.log(event.target.value)
  }

  updatePassword(event) {
    this.pwIsDirty = true
    this.password = event.target.value

  }

  @Listen('btnClick')
  shouldLogin() {
    console.log('clicked')
    this.login.emit({ username: this.username, password: this.password })
  }

  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" value={this.username} onInput={event => this.updateName(event)}></input>
        </label>
        <label>
          Password:
          <input type="password" value={this.password} onInput={event => this.updatePassword(event)}></input>
          {this.password === '' && this.pwIsDirty ? 'Please enter your password' : ''}
        </label>
        <ct-button text="Login" disabled={this.password === ''}></ct-button>
      </form>
    );
  }

}
