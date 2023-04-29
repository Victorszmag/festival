const React = require("react");
const DefaultLayout = require("../layout/Default");

class Signup extends React.Component {
  render() {
    return (
        <DefaultLayout title="Signup Page" cssPath="/css/app.css">
          <div className="signup-form">
            <form action="/user/signup" method="POST">
              <label htmlFor="username">Name:</label>
              <input type="text" id="username" defaultValue="" name="username" required />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" defaultValue="" name="password" required />
              <input type="submit" name="" value="Signup" />
            </form>
          </div>
        </DefaultLayout>
    );
  }
}

module.exports = Signup;