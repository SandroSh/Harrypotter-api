// there are same operations without  axios

 fetch("http://hp-api.herokuapp.com/api/characters")
 .then( data => data.json())
 .then( (finalData) => {
     
     const container = document.getElementById('second-inner-div');
     let quantity = document.getElementById("users-num");
     console.log(finalData);
     quantity.textContent = finalData.length;
     
     
          
     for(  i= 0;  i< 1; i++){
       
         const box =  document.createElement('div');
         const pBox =  document.createElement('div');
         const userImage =  document.createElement('img');
         const userP =  document.createElement('p');
         const houseP =  document.createElement('p');
         const dateP =  document.createElement('p');
     
         box.classList.add('box-div');
         pBox.classList.add('data-div');

         userImage.classList.add('user-image');
         userImage.src = finalData[i].image;

         userP.classList.add('box-p-elem');
         houseP.classList.add('box-p-elem');
         dateP.classList.add('box-p-elem');

         userP.textContent ="Name: " +  finalData[i].name;
         houseP.textContent = "House: " + finalData[i].house;
         dateP.textContent = "Birth Date: " + finalData[i].dateOfBirth;
   
         pBox.appendChild(userP);
         pBox.appendChild(houseP);
         pBox.appendChild(dateP);
      
         box.appendChild(userImage);
         box.appendChild(pBox);
         container.appendChild(box);
         console.log(container)
     }
     
 })
 .catch( error => {
     console.log("This is a error", error);
 })