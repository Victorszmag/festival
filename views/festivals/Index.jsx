const React = require("react");
const DefaultLayout = require("../layout/Default");
class Index extends React.Component {
  render() {
    // method 2: destructure the props
    const { festivals } = this.props;

    return (
      <DefaultLayout title="Some Festival" cssPath="/css/app.css">
        <nav>
          <a href="/festivals/new">Add an Act to your planner</a>
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
        <footer>
        <a href="https://festivalviewer.com/img/2022TMLMAP.jpg">
            <button className="mapbtn">MAP</button>
          </a>
          <a href="https://edm.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTk1NDkyNDIxNDM2NDUwMzcz/326377466_897002361735233_2908909092337216385_n.webp">
            <button className="lineupbtn">Lineup</button>
          </a>

          <a href="https://www.tomorrowland.com/en/faq-contact">
            <button className="faqBtn">F.A.Q.</button>
          </a>
          <a href="https://www.tomorrowland.com/en/festival/tickets">
            <button className="ticketbtn">Buy Tickets</button>
          </a>



        </footer>
        
      </DefaultLayout>
    );
  }
}
module.exports = Index;