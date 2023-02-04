const React = require("react");
const DefaultLayout = require("../layout/Default");

class Login extends React.Component {
  render() {
    return (
        <DefaultLayout title="Login Page" cssPath="/css/app.css">
      
        
        <a href="/user/signup">
          <h3>Signup</h3>
        </a>

        <form action="/user/login" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Login" />
        </form>
      
      </DefaultLayout>
    );
  }
}

module.exports = Login;