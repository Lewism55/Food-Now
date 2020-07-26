// API KEY NbOaJQRuTwytEICy7geY8OKRhPLTnRDvoBjUS3exgQE2LzQEoZ1VODrtTQS-wFK81FJTjlVfmJUlfeIWVEXJOFAdDlyDYDQIgykAlIPbgL97XIL1oK-gff2jnvGrXnYx
// CLIENT ID 1-vsBLoa4zmOqiDrP2Ywgw 

const apiKey = 'NbOaJQRuTwytEICy7geY8OKRhPLTnRDvoBjUS3exgQE2LzQEoZ1VODrtTQS-wFK81FJTjlVfmJUlfeIWVEXJOFAdDlyDYDQIgykAlIPbgL97XIL1oK-gff2jnvGrXnYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        url: business.url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            } else {
                return alert('Please make sure to enter a valid cuisine/location! (check your spelling') ? "" : window.location.reload();
            }
        });
    } //CORS is a cross origin resource sharing protocol which prevents issues with accessing a secure server from a non-secure one

    //now we want to pass our token in the header of our request. 
};

export default Yelp;