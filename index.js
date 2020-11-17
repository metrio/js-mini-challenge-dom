/***** Deliverable 1 *****/
const header = document.querySelector("#header")

console.log("Here's your header:", header.textContent)


/***** Deliverable 2 *****/
header.style.color = 'red'

/***** Deliverable 3 *****/
console.log("the player object looks like this:", player)

function displayPlayer(player) {
    const h2 = document.querySelector('.player h2')
    h2.textContent = player.name
    
    const em = document.querySelector('.player em')
    em.textContent = player.nickname
    
    const img = document.querySelector('.player img')
    img.src = player.photo
    img.alt = player.name
    
    displayGoals(player)
}

displayPlayer(player)

/***** Deliverable 4 *****/
 
function displayGoals(player) {

    const ul = document.querySelector('#goals')

    player.goals.forEach(function(info) {
        const liTag = document.createElement('li')
        liTag.setAttribute( 'data-id', `${info.id}`) 
        ul.append(liTag)

        const pTag = document.createElement('p')
        pTag.textContent = `${info.description}`
        liTag.append(pTag)

        const aTag = document.createElement('a')
        aTag.href = `${info.link}`
        aTag.target = "_blank"
        aTag.textContent = `${info.link}`
        liTag.append(aTag)
    })
}


/***** Deliverable 5 *****/

const ul = document.querySelector("ul")
corruptItem = ul.querySelector(`[data-id = '3']`).remove()