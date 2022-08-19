let showMoreBtn = document.getElementById('show-more');
const container = document.getElementById('second-inner-div');
const quantity = document.getElementById('users-num');
const input = document.getElementById('text-input');
const infoP = document.querySelector('boxP');
const ShownActorsQuantity = document.getElementById('users-num-shown');
let i = 0;
let charactersArray = [];
let searchedCharacters = [];



input.addEventListener('keyup', function(e){
    let searchName = e.target.value.toLowerCase();
    searchedCharacters = charactersArray.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchName)||
            character.house.toLowerCase().includes(searchName)||
            character.actor.toLowerCase().includes(searchName)
        );
   })
  
   console.log(searchedCharacters);
   newCharacters();
}) 

console.log(charactersArray);
ShownActorsQuantity.textContent = "3";
getData(3);
 
showMoreBtn.addEventListener("click" , function(){
    let addItem = i+3;
    getData(addItem);
    ShownActorsQuantity.textContent = addItem;
});


function newCharacters(){
    container.innerHTML = '';
    searchedCharacters.map( (item) => {
            let newBox = `
            <div class="box-div">
                <img class="user-image" src=${item.image} alt="fake user img">
                <div class="data-div">
                    <p class="boxP">Name: ${item.name}</p>
                    <p class="boxP">Actor: ${item.actor}</p>
                    <p class="boxP">House: ${item.house}</p>
                    <p class="boxP">Birth Date: ${item.dateOfBirth}</p>
                </div>
            </div>`
        container.innerHTML += newBox;    
    })
}

function getData(k){
    axios.get('http://hp-api.herokuapp.com/api/characters')
    .then( finalData => {
        quantity.textContent = finalData.data.length;
        for( i; i < k; i++){
             let box = `
                <div class="box-div">
                    <img class="user-image" src=${finalData.data[i].image} alt="fake user img">
                    <div class="data-div">
                        <p class="boxP">Name: ${finalData.data[i].name}</p>
                        <p class="boxP">Actor: ${finalData.data[i].actor}</p>
                        <p class="boxP">House: ${finalData.data[i].house}</p>
                        <p class="boxP">Birth Date: ${finalData.data[i].dateOfBirth}</p>
                    </div>
                </div>`
            container.innerHTML  += box;
            charactersArray.push(finalData.data[i]);
        }
        
    })
    .catch( error =>{
        return error;
    })
}



