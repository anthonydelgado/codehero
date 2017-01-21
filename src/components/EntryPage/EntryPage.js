import React from 'react'
import ReactDOM from 'react-dom'
import EntryPage from './EntryPage.css'

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/* login-with-github */}
        <div className="brand">
          <a href="https://codingbootcamp.rutgers.edu/" target="_blank">
            <h5>Coding BootCamp</h5>
          </a>
        </div>
        <div className="login">
          <div className="login_title">
            <h2>Code Hero Login <i className="fa fa-github" style={{fontSize: 48, color: 'red'}} /></h2>
          </div>
          <div className="login_fields">
            <div className="login_fields__user">
              <div className="icon">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
              </div>
              <input placeholder="Username" type="text" />
              <div className="validation">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
              </div>
            </div>
            <div className="login_fields__password">
              <div className="icon">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
              </div>
              <input placeholder="Password" type="password" />
              <div className="validation">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tick.png" />
              </div>
            </div>
            <div className="login_fields__submit">
              <input type="submit" defaultValue="Log In" />
              <div className="forgot">
                <a href="#">Forgotten password?</a>
              </div>
            </div>
          </div>
          <div className="success">
            <h2>Hey welcome to Code Hero!!!</h2>
            <h4>Where we can help to clarify key course concepts and through peer led discussion refine your understanding.
              So let us make you SMARTER!!!</h4>
          </div>
          <div className="disclaimer">
            <p>Welcome my Friends to CodeHero!!</p>
          </div>
        </div>
        <div className="authent">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/puff.svg" />
          <h5>CODE HERO...</h5>
        </div>
      </div>
    );
  }
});
