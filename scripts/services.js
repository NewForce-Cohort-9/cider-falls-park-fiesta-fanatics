import { getServices, getServicesAttractions, getAttractions } from "./database.js"
const services = getServices()
const servicesAttractions = getServicesAttractions()
const attractions = getAttractions()

document.addEventListener(
    "click",
    (clickEvent) => {
      const clickTarget= clickEvent.target
      const serviceName= clickTarget.dataset.name
      const serviceId = clickTarget.dataset.id

      if (clickTarget.dataset.type === "service") {
        let html = `${serviceName} is at `

             for (const serviceAttraction of servicesAttractions) { //looping thru bridge table
                if(serviceAttraction.servicesId === parseInt(serviceId)){
                    for (const attraction of attractions) { // connecting services and attractions through bridge table
                        if(serviceAttraction.attractionId === attraction.id){
                            html += `${attraction.name} `
                        }
                    }
    
                }
             }
             window.alert(html)
        }
      }
      
  
  )
export const Services = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li data-id= "${service.id}"
         data-type= "service" data-name= "${service.name}">${service.name}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML
}