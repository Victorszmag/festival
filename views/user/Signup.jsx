const React = require("react");
const DefaultLayout = require("../layout/Default");

class Signup extends React.Component {
  render() {
    return (
        <DefaultLayout title="Signup Page" cssPath="/css/app.css">
      <div>

        <form action="/user/signup" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Signup" />
        </form>
      </div>
      </DefaultLayout>
    );
  }
}

module.exports = Signup;