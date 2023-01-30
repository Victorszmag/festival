const React = require("react");
const DefaultLayout = require("../layout/Default");

class Edit extends React.Component {
  render() {
    const { name, _id, readyToSee, when, where } = this.props.festival;

    return (
        <DefaultLayout title={`${name} Edit Page`}>
        <form action={`/festivals/${_id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={name} />
          <br />
          When: <input type="text" name="when" defaultValue={when} />
          <br />
          Where: <input type="text" name="where" defaultValue={where} />
          <br />
          Did you see them?:
          {readyToSee ? (
            <input type="checkbox" name="readyToSee" defaultChecked />
          ) : (
            <input type="checkbox" name="readyToSee" />
          )}
          <br />
          <input type="submit" value="Submit Changes" />
        </form>
        </DefaultLayout>
    );
  }
}

module.exports = Edit;
