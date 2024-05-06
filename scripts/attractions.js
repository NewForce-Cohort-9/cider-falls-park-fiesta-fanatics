import { getAttractions } from "./database.js";

export const Attractions = () => {
    const attraction = getAttractions(); // Invoke getLocations to fetch the locations
    let attractionsHTML = "<ul>";

    for (const attraction of attractions) {
        attractionsHTML += `<li data-id="${attraction.id}"
                            data-name="${attraction.name}"
                            data-location${attraction.location}"
                            >${attraction.name}</li>`; // Access name property of each location
    }

    attractionsHTML += "</ul>";

    return attractionsHTML;
};
