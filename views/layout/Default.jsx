const React = require("react");

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <nav>
            <h1>Tommorowland</h1>
          <a href="/Map">
            <button className="mapbtn">MAP</button>
          </a>
          <a href="/Lineup">
            <button className="lineupbtn">Lineup</button>
          </a>
           <a href="/FAQ">
            <button className="faqBtn">FAQ</button>
          </a>
          <a href="/BuyTickets">
            <button className="ticketbtn">Buy Tickets</button>
          </a>
          </nav>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <h2>Into the land we go...</h2> 
          {this.props.children}
        </body>
        <footer>
          Victor Szmaglinski 2023
        </footer>
      </html>
    );
  }
}

module.exports = DefaultLayout;
