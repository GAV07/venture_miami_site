const eventbrite = require('eventbrite').default;

// Create configured Eventbrite SDK
const sdk = eventbrite({token: 'NEGXONVANHRDLXNYLMBI'});

// See: https://www.eventbrite.com/developer/v3/endpoints/users/#ebapi-get-users-id

export async function getEvents() {
    const r = sdk.request('/organizations/1234/events/').then(res => {
        // handle response data
        //console.log(res)
        return res
    });
    //console.log(r) 
    const request = await r
    console.log(request)
    return request
}