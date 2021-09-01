import React from "react";

class Disruption extends React.Component {
  render() {
    const { disruption } = this.props;

    return (
      <div>
        <h2>Location: {disruption.location}</h2>
        <p>Latest update: {disruption.currentUpdate}</p>
        <p>Time of latest update: {disruption.currentUpdateDateTime}</p>
        <p>Comments: {disruption.comments}</p>
        <p>Severity: {disruption.severity}</p>
        <p>Category: {disruption.category}</p>
        <p>Sub-category: {disruption.subcategory}</p>
        <p>Status: {disruption.status}</p>

      </div>
    );
  }
}

export default Disruption;