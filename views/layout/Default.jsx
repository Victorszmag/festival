const React = require("react");

// Higher order component
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <nav>
            <h1>Tommorowland</h1>
          <a href="https://festivalviewer.com/img/2022TMLMAP.jpg">
            <button className="mapbtn">MAP</button>
          </a>
          <a href="https://edm.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_620/MTk1NDkyNDIxNDM2NDUwMzcz/326377466_897002361735233_2908909092337216385_n.webp">
            <button className="lineupbtn">Lineup</button>
          </a>
           <a href="https://www.tomorrowland.com/en/faq-contact">
            <button className="faqBtn">FAQ</button>
          </a>
          <a href="https://www.tomorrowland.com/en/festival/tickets">
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
