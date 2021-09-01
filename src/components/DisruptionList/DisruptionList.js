import React from 'react';
import Disruption from '../Disruption/Disruption';

// Maps through the API data to return only the data needed for the app 
class DisruptionList extends React.Component {
    render () {
        if (this.props.disruptions) {
        return (
            <div>
                {this.props.disruptions.map((disruption) => {
                    return <Disruption 
                    disruption={disruption}
                    key={disruption.id} />;
                })}
            </div>
        )
        } else {
            return (
                <div className="bg-green-600 text-white p-4 text-center flex flex-col place-items-center justify-center content-center">
                    <p className="font-bold">
                        Good News! 
                    </p>
                    
                    <p>
                        There are no traffic incidents reported for your search.
                    </p>
            </div>
            )
        }
    }
}

export default DisruptionList;