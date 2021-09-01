const apiKey = '9fa83c22a4a34be3b8b82b3f35de0828';
const appID = 'API_engage_squared';

// API call using fetch to retrieve the data, convert to JSON and set the properties
const TFL = {
    searchTFL(road) {
        return fetch(`https://api.tfl.gov.uk/Road/${road}/Disruption?app_id=${appID}&app_key=${apiKey}`, 
        { 
            cors: 'include',
            headers: {
              Accept: 'application/json', 
            }
          })
          .then((response) => {
              return response.json();
          })
          .then((jsonResponse) => {
              if (jsonResponse) {
                return jsonResponse.map((disruption) => {
                    console.log(disruption);
                    return {
                        location: disruption.location,
                        severity: disruption.severity,
                        category: disruption.category,
                        subcategory: disruption.subCategory,
                        comments: disruption.comments,
                        currentUpdate: disruption.currentUpdate,
                        currentUpdateDateTime: disruption.currentUpdateDateTime,
                        status: disruption.status,
                    }
                })
              } 
          })
    }
}

export default TFL;