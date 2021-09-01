import React from 'react';
import Disruption from '../Disruption/Disruption';

// Maps through the API data to return only the data needed for the app 
class DisruptionList extends React.Component {
    render () {
        return (
            <div>
                {this.props.disruptions.map((disruption) => {
                    return <Disruption 
                    disruption={disruption}
                    key={disruption.id} />;
                })}
            </div>
        )
    }
}

export default DisruptionList;