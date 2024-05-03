
import { getGuests } from "./database.js";

export const Guests = () => {
    const guests = getGuests(); // Invoke getGuests to fetch the guests
    let guestsHTML = "<ul>";

    for (const guest of guests) {
        guestsHTML += `<li>${guests.name}</li>`; // Access name property of each guest
    }

    guestsHTML += "</ul>";

    return guestsHTML;
};

