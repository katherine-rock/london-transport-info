import React from 'react';
import Disruption from '../Disruption/Disruption';

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