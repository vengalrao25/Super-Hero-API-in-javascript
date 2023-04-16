const SUPERHERO_TOKEN = '1310741236178598' ;
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`  ;
let id = 245;

const newHeroButton = document.getElementById("newHeroButton") 
const heroImageDiv = document.getElementById("heroImage") 
const searchButton = document.getElementById("searchButton") 
const searchInput = document.getElementById("searchInput")



const img = 'https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg' ; 



const getSuperHero =(id ) =>{
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json =>{
        console.log(json)
       console.log(json.powerstats)
       const superHero = json
       showHeroInfo(superHero)
        // const powerstats = `<p>🧠 Intelligence: ${json.powerstats.intelligence}</p>`
        // const strength = `<p>💪 Strength: ${json.powerstats.strength}</p>`
        
        
    })
}

const statToEmoji ={
    intelligence :'🧠',
    strength :'💪',
    speed:'💫' , 
    durability:'🏋️' ,
    power:'📊' , 
    combat:'⚔️'}

const showHeroInfo =(character) =>{
    
    // console.log("habibi")
    // for (stat in character){
    //     console.log(stat)
    const  name= `<h2> ${character.name} </h2>`

    const img = `<img src='${character.image.url}' height=200 width=200 /> `

    const stats = Object.keys(character.powerstats).map(stat =>{
    return `<p>${statToEmoji[stat]} ${stat}: ${character.powerstats[stat]}</p>`
    })
    // console.log(stats.join(''))
    // console.log(stats)
    heroImageDiv.innerHTML = `${name}${img}${stats.join('')}`
    console.log(searchInput.innerHTML)
    searchInput.value=""
  
}



//example things = {strength:5 , cookies:6}
// Object.keys(things)  output: [ 'strength' , 'cookie']
// things[strength] = 5
// things[cookie] = 6








const getSearchSuperHero = (name) =>{
    // console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then( json => {
        
       let hero = json.results[0]
       console.log(hero)
       showHeroInfo(hero)
      
    //     heroImageDiv.innerHTML = `<img src="${hero.image.url}"
    //     height=200 width=200"/>` ; 
        
    })
}



const randomHero = () =>{
    const numberOfHeros = 731
    return ( Math.floor(Math.random()* numberOfHeros ) +1  )
}

newHeroButton.onclick = () =>{ getSuperHero(randomHero()) }
searchButton.onclick = () => { getSearchSuperHero(searchInput.value) }