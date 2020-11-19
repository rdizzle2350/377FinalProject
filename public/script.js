function matchingStreet(streetMatch, data) {
    return data.filter((item) => {
        const reg = new RegExp(streetMatch, 'gi');
        return item.street_address.match(reg) || item.latitude.match(reg) || item.longitude.match(reg);
    });
}

function displayresults(i, dataset) {
    
}