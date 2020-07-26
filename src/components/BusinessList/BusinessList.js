import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() { 
        var results = (
            <div className="BusinessList">
                {this.props.businesses.map((business) => {
                        return <Business business={business} key={business.id}/>;
                    }
                    )
                }
            </div> 
        )
        return results;
    }
}

export default BusinessList; 