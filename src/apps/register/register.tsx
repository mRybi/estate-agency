import { Label } from 'office-ui-fabric-react/lib/Label';
import * as React from 'react';
import './register.css';

class Register extends React.Component {

  public render() {
    return (
      <div>
        <div id="photo" />

      <div id="regForm">
        <h2>Sign Up!</h2>
        <form>
          Name:<br />
          <input type="text" data-type="text" name="firstname" aria-required="true" placeholder="" aria-label="Name" aria-invalid="true" /><br />
          Surname:<br />
          <input type="text" data-type="text" name="lastname" aria-required="true" placeholder="" aria-label="Surname" aria-invalid="true" /><br />
          Email:<br />
          <input type="text" data-type="text" name="email" aria-required="true" placeholder="" aria-label="Email" /><br />
          Phone Number:<br />
          <input type="text" data-type="text" name="email" aria-required="true" placeholder="" aria-label="Email" /><br />
          Password:<br />
          <input type="password" data-type="password" name="password" aria-required="true" placeholder="" aria-label="Password" /><br />
          Birthday:<br />
          <input type="date" name="bday" aria-required="true" /><br />
          <div id="terms">
            By clicking Sing Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookies Policy.<br />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>

      <div id="footer">
        Wszystkie prawa zastrzerzone;
    </div>

    </div>
        
    );
  }
}

export default Register;