const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
        <DefaultLayout title="Festival Schedule">
        
        <form action="/festivals" method="POST">
          Name: <input type="text" name="name" />
          <br />
          When: <input type="text" name="when" />
          <br />
          Where: <input type="text" name="where" />
          <br />
          Did you see them?: <input type="checkbox" name="readyToSee" />
          <br />
          <input type="submit" name="" value="Add to Planner" />
        </form>
        </DefaultLayout>
    );
  }
}

module.exports = New;