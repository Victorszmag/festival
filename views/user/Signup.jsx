const React = require("react");

class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup</h1>

        <form action="/user/signup" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Signup" />
        </form>
      </div>
    );
  }
}

module.exports = Signup;