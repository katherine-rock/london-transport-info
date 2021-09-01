import React from "react";

const disruption = {
    location: "London bridge",
    severity: "major",
    category: "accident",
    subcategory: "bingle",
    comments: "Comments about the accident",
    currentUpdate: "Latest update on the incident",
    currentUpdateDateTime: "9:00am on 01-Sep-2021",
    status: "ongoing",
};

class Disruption extends React.Component {
  render() {
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