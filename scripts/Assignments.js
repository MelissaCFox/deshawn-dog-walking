import { getPets, getWalkers } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalkers) => {
    let petWalker = null

    for (const walker of allWalkers) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    // let assignmentHTML = ""
    let assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }
    assignmentHTML += "</ul>"


    return assignmentHTML
}

// import { getPets } from "./database.js"

// const pets = getPets()

// export const RegisteredPets = () => {
//     let petHTML = "<ul>"

//     for (const pet of pets) {
//         petHTML += `<li>${pet.name}</li>`
//     }

//     petHTML += "</ul>"

//     return petHTML
// }
