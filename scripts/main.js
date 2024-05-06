// import { Attractions } from "./attractions.js";
// import { Locations } from "./locations.js";
import { Guests } from "./guests.js";
// import { Services } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <h1>Cider Falls</h1>
    <article class="details">
        <section class="detail--column list details__attractions">
            <h2>Attractions</h2>
    <aside class="guests">
        <h2>Guests</h2>
        ${Guests()}
    </aside>
`;


mainContainer.innerHTML = applicationHTML;

/* 
</section>
<section class="detail--column list details__locations">
    <h2>Locations</h2>
    ${Locations()}
</section>
<section class="detail--column list details__services">
    <h2>Services</h2>
    ${Services()}
</section>
 */