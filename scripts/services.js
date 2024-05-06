import { getServices } from "./database.js"
const services = getServices()


export const Services = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li>${service.name}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML
}