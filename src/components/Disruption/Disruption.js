import React from "react";

class Disruption extends React.Component {
  render() {
    const { disruption } = this.props;

    return (
      <div className="w-screen flex flex-col">

        <div className="flex flex-row p-4 max-w-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-blue-600 rounded-md m-4 ">
          <h2
          className="font-bold text-xl flex flex-row justify-center">
            Location: {disruption.location}</h2>
          <p> <span className="font-bold">Latest update: </span> 
          {disruption.currentUpdate}</p>
          <p> <span className="font-bold">Time of latest update: </span> {disruption.currentUpdateDateTime}</p>
          <p> <span className="font-bold">Comments: </span>{disruption.comments}</p>
          <p> <span className="font-bold">Severity: </span>{disruption.severity}</p>
          <p> <span className="font-bold">Category: </span>{disruption.category}</p>
          <p> <span className="font-bold">Sub-category: </span>{disruption.subcategory}</p>
          <p><span className="font-bold">Status: </span>{disruption.status} </p>
        </div>
      </div>
    );
  }
}

export default Disruption;