import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react';
import './login.css';

class Login extends React.Component {

  public render() {
    return (
      <div>
        <div id="photo" />

        <div id="regForm">
          <h2>Log In</h2>
          <form>
            Login:<br />
            <input type="text" data-type="text" name="email" aria-required="true" placeholder="" aria-label="Email" /><br />
            Password:<br />
            <input type="password" data-type="password" name="password" aria-required="true" placeholder="" aria-label="Password" /><br />
            <input type="submit" value="Log In" /><br />
          </form> 
        </div>

        <div id="footer">
          Wszystkie prawa zastrzerzone;
</div>

      </div>

    );
  }
}

export default Login;