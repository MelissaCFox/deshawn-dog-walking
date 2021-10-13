import { getPets } from "./database.js"
import { getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()



document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("pet")) {
            const [,petId] = itemClicked.id.split("--")
            for (const pet of pets) {
                if (pet.id === parseInt(petId)) {
                    //USING A FOR-OF LOOP
                    // let petWalker = ""
                    // for (const walker of walkers) {
                    //     if (walker.id === pet.walkerId) {
                    //         petWalker = walker.name
                    //     }
                    // }
                    // window.alert(`${pet.name} is being walked by ${petWalker}`)
                    //*USING .find() array method
                    const walker = walkers.find(walker => walker.id === pet.walkerId)
                    window.alert(`${pet.name} is being walked by ${walker.name}`)
                }
            }
        }
    }
)


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}"">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}