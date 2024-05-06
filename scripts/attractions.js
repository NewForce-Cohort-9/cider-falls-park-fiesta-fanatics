import { getAttractions } from "./database.js";

export const Attractions = () => {
    const attractions = getAttractions(); // Invoke getLocations to fetch the locations
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

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <h1>Cider Falls</h1>
    <article class="details">
        <section class="detail--column list details__attractions">
            <h2>Attractions</h2>
<div class="attraction-box">
    <h3>${Attractions()}</h3>
    <p>Description of Attraction 1</p>
</div>
<div class="attraction-box">
    <h3>Attraction 2</h3>
    <p>Description of Attraction 2</p>
</div>
<div class="attraction-box">
    <h3>Attraction 2</h3>
    <p>Description of Attraction 2</p>
</div>
<div class="attraction-box">
    <h3>Attraction 2</h3>
    <p>Description of Attraction 2</p>
</div>
<div class="attraction-box">
    <h3>Attraction 2</h3>
    <p>Description of Attraction 2</p>
</div>
<div class="attraction-box">
    <h3>Attraction 2</h3>
    <p>Description of Attraction 2</p>
</div>
        </section>`;

        mainContainer.innerHTML = applicationHTML;