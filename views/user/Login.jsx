const React = require("react");
const DefaultLayout = require("../layout/Default");

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout title="Login Page" cssPath="/css/app.css">
        <div className="login-container">
          <div className="signup-link">
            <a href="/user/signup">Signup</a>
          </div>
          <div className="login-form">
            <form action="/user/login" method="POST">
              <label>
                Name:
                <input type="text" defaultValue="" name="username" required />
              </label>
              <label>
                Password:
                <input type="password" defaultValue="" name="password" required />
              </label>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Login;