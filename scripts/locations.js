
import { getLocations } from "./database.js";

export const Locations = () => {
    const locations = getLocations(); // Invoke getLocations to fetch the locations
    let locationsHTML = "<ul>";

    for (const location of locations) {
        locationsHTML += `<li>${location.location}</li>`; // Access name property of each location
    }

    locationsHTML += "</ul>";

    return locationsHTML;
};
