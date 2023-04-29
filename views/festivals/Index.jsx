const React = require("react");
const DefaultLayout = require("../layout/Default");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { festivals } = this.props;

    return (
      <DefaultLayout title="Some Festival" cssPath="/css/app.css">
        <nav>
        <a href="/festivals/new" className="add-planner-link">Add an Act to your planner</a>
  <a href="/user/logout">
    <button className="logoutBtn">Logout</button>
  </a>
        </nav>
        <ul>
          {this.props.festivals.map((festival, i) => {
            return (
              <li key={i}>
                <a href={`/festivals/${festival.id}`}> {festival.name} </a> is playing at {" "}
                {festival.when} at the {festival.where} {" "} stage
                {" - "}
                {festival.readyToSee
                  ? `I have seen them`
                  : `I have not seen them`}
                <form
                  action={`/festivals/${festival._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <form action={`/festivals/${festival._id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form>
              </li>
            );
          })}
        </ul>
        
      </DefaultLayout>
    );
  }
}
module.exports = Index;