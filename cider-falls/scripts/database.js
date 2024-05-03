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
