const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const festival = this.props.festival;

   

    return (
        <DefaultLayout title="Confirmation ">
        <nav>
          <a href="/festivals">Back</a>
        </nav>
        This has been updated, are you sure this is right?{this.props.festival.name} is playing at {this.props.festival.when} at the {festival.where} {" "} stage {" - "}
        {this.props.festival.readyToSee
          ? `I have seen them`
          : `I have not seen them`}
      </DefaultLayout>
    );
  }
}

module.exports = Show;