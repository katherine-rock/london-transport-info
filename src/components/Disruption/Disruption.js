import React from "react";

class Disruption extends React.Component {
  render() {
    const { disruption } = this.props;
    return (
      <div>
        <h2>{disruption.location}</h2>
        <p>{disruption.severity}</p>
        <p>{disruption.category}</p>
        <p>{disruption.subcategory}</p>
        <p>{disruption.comments}</p>
        <p>{disruption.currentUpdate}</p>
        <p>{disruption.currentUpdateDateTime}</p>
        <p>{disruption.status}</p>

      </div>
    );
  }
}

export default Disruption;