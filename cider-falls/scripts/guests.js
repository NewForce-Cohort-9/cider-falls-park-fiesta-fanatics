import { getGuests } from "./database.js"

const guests = getGuests()

// document.addEventListener(  
//     "click",
//     (theClickEvent) => {
//             const whatWasClickedOn = theClickEvent.target

//             window.alert(`This guest works in  ${whatWasClickedOn.dataset.city}`)
//     }
// )

export const Guests = () => {
    let guestHTML = "<ul>"

    for (const guest of guests) {
        guestHTML += `<li data-id="${guest.id}"
                           data-city="${guest.city}"
                            >${guest.name}
                        </li>`
    }

    return guestHTML; + "</ul>"

}

