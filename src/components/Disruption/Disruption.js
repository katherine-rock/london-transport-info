import React from "react";

// Sets the values of the reported disruption with the data retrieved from the API
class Disruption extends React.Component {
  render() {
    const { disruption } = this.props;

    return (
      <div className="w-screen flex justify-center">
        <div className="flex flex-col p-4 max-w-max border-2 border-blue-600 rounded-md m-4 md:max-w-md lg:max-w-md lg:p-8">
          <h2 className="font-bold text-xl flex flex-row justify-center">
            Location: {disruption.location}
          </h2>

          <p>
            <span className="font-bold">Latest update: </span>
            {disruption.currentUpdate}
          </p>

          <p>
            <span className="font-bold">Time of latest update: </span>
            {disruption.currentUpdateDateTime}
          </p>

          <p>
            <span className="font-bold">Comments: </span>
            {disruption.comments}
          </p>

          <p>
            <span className="font-bold">Severity: </span>
            {disruption.severity}
          </p>

          <p>
            <span className="font-bold">Category: </span>
            {disruption.category}
          </p>

          <p>
            <span className="font-bold">Sub-category: </span>
            {disruption.subcategory}
          </p>

          <p>
            <span className="font-bold">Status: </span>
            {disruption.status}
          </p>

        </div>
      </div>
    );
  }
}

export default Disruption;
