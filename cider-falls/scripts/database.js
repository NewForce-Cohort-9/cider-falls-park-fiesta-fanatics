const database ={
    

    guests: [{
        id: 1,
        name: "Biggie Smalls",
        locationId: 1,
    }, {
        id: 2,
        name: "Method Man",
        locationId: 1,
    }, {
        id: 3,
        name: "Ol Dirt Schultz",
        locationId: 6,
    }, {
        id: 4,
        name: "MF Doom",
        locationId: 6,
    }, {
        id: 5,
        name: "Kool Keith",
        locationId: 2,
    }, {
        id: 6,
        name: "Ghostface Killah",
        locationId: 3,
    }, {
        id: 7,
        name: "Bobby Digital",
        locationId: 5,
    }, {
        id: 8,
        name: "Aesop Rock",
        locationId: 4,
    }, {
        id: 9,
        name: "Killer Mike",
        locationId: 6,
    }, {
        id: 10,
        name: "Vast Air",
        locationId: 4,
    }, {
        id: 9,
        name: "El P",
        locationId: 1,
    }, {
        id: 10,
        name: "Brother Ali",
        locationId: 5,
    }, {
        id: 10,
        name: "Murs",
        locationId: 2,
    }, {
        id: 11,
        name: "Louis Logic",
        locationId: 2,
    }, {
        id: 12,
        name: "Too Short",
        locationId: 6,
    }, {
        id: 13,
        name: "Bushwick Bill",
        locationId: 2,
    }, {
        id: 14,
        name: "Jay Z",
        locationId: 5,
    }, {
        id: 15,
        name: "Sage Francis",
        locationId: 5,
    }, {
    }],

    locations: [{
        id: 1,
        location: "northeast",
    }, {
        id: 2,
        location: "north",
    }, {
        id: 3,
        location: "northwest",
    }, {
        id: 4,
        location: "southwest",
    }, {
        id: 5,
        location: "south",
    }, {
        id: 6,
        location: "southeast",
    }],
    
    attractions: [{
        id: 1,
        name: "Chamfort River",
        location: "northeast",
    }, {
        id: 2,
        name: "Lost Wolf Hiking Trail",
        location: "north",
    }, {
        id: 3,
        name: "Lodge",
        location: "northwest",
    }, {
        id: 4,
        name: "Gander River",
        location: "southwest",
    }, {
        id: 5,
        name: "Campgrounds",
        location: "south",
    }, {  
        id: 6,
        name: "Pine Bluffs Trails",
        location: "southeast"
    }, {
    }],

    services: [ {
        id: 1,
        name: "rafting",
    }, {
        id: 2,
        name: "canoeing",
    }, {
        id: 3,
        name: "fishing",
    }, {
        id: 4,
        name: "hiking",
    }, {
        id: 5,
        name: "picnicking",
    }, {
        id: 6, 
        name: "rock climbing",
    }, {
        id: 7, 
        name: "lodging",
    }, {
        id: 8,
        name: "parking",
    }, {
        id: 9,
        name: "information"
    }, {
        id: 10,
        name: "zip lines"
    },
    ],

    servicesLocations: [{
        // chamfort river
        id: 1,
        serviceId: 1, 
        locationId: 1,
    }, {
        id: 2,
        serviceId: 2,
        locationId: 1,
    }, {
        id: 3,
        serviceId: 3,
        locationId: 1,
    }, {
        // lost wolf hiking trail
        id: 4,
        serviceId: 4,
        locationId: 2,
    }, {
        id: 5,
        serviceId: 5,
        locationId: 2,
    }, {
        id: 6,
        serviceId: 6,
        locationId: 2,
    }, {
        // lodge
        id: 7,
        serviceId: 7,
        locationId: 3,
    }, {
        id: 8,
        serviceId: 8,
        locationId: 3,
    }, {
        id: 9,
        serviceId: 9,
        locationId: 3,
    }, {
        id: 10,
        serviceId: 5,
        locationId: 3,
    }, {
        // gander river
        id: 11,
        serviceId: 3,
        locationId: 4,
    }, {
        id: 12,
        serviceId: 4,
        locationId: 4,
    }, {
        // campgrounds
        id: 13,
        serviceId: 9,
        locationId: 5,
    }, {
        id: 14,
        serviceId: 7,
        locationId: 5,
    }, {
        id: 15,
        serviceId: 8,
        locationId: 5,
    }, {
        // pine bluff trails
        id: 16,
        serviceId: 4,
        locationId: 6,
    }, {
        id: 17,
        serviceId: 5,
        locationId: 6,
    }, {
        id: 18,
        serviceId: 10,
        locationId: 6,
    }, {
    }],

}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}
export const getLocations = () => {
    return database.locations.map(location => ({...location}))
}

export const getAttractions = () => {
    return database.attractions.map(attractions => ({...attractions}))
}
