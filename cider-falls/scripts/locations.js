<<<<<<< HEAD


















/*import { getLocations } from "./database.js"
const locations = getLocations()


export const Locations = () => {
    let html = "<ul>"

    for (const location of locations) {
        html += `<li>${location.name}</li>`
    }

    html += "</ul>"

    return html
}*/
=======
import { getLocations } from "./database.js";

export const Locations = () => {
    const locations = getLocations(); // Invoke getLocations to fetch the locations
    let locationsHTML = "<ul>";

    for (const location of locations) {
        locationsHTML += `<li>${location.name}</li>`; // Access name property of each location
    }

    locationsHTML += "</ul>";

    return locationsHTML;
};
>>>>>>> main
