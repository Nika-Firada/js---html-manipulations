//-----------დავალება--6------
/*const candles =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43,];
function birthdayCakeCandles(candles) {
    let max_candles = Math.max(...candles); 
    let counter = 0;
    for(var i=0; i<candles.length; i++){
        if(candles[i] == max_candles){
            counter++;   
        }
    }
    return counter;
}
console.log(birthdayCakeCandles(candles)); 
*/

//-----------დავალება-2------
/*let newImg = document.createElement('img');
newImg.setAttribute('src', ' https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg');
document.body.appendChild(newImg);
*/

//------დავალება--1-------
/*const myButton3 = document.querySelector("#myButt");
myButton3.addEventListener("click", (e)=>{
    myButton3.remove();
    console.log('button was removed');
}); 
*/


const users = [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg"
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg"
    },
  ];

  const userListMainDiv = document.querySelector("#user-list");
  function creatUserCards() {
      const userElements = users.map(user => {
          return `<div class='parent-div'><div class='avatar-div'><img class="img-class" src="${user.avatar}"></div><div class='name-span-div'><span>${user.first_name}</span><span>${user.last_name}</span></div><div class='buttons-div'><button class="delete-button">delete</button><button class="info-button">info</button></div><div id="em-info" class="email-info">${user.email}</div></div>`;
      });
      userListMainDiv.innerHTML = userElements.join('');
      const deleteButton = document.querySelectorAll('.delete-button');
      deleteButton.forEach(btn =>{
          btn.addEventListener('click', e=>{
              btn.parentNode.parentNode.remove();
          })
      })
      const emailAdd = document.getElementById('em-info');
      const infoButton = document.querySelectorAll('.info-button');
      infoButton.forEach(inf =>{
            inf.addEventListener('click', e =>{
                emailAdd.style.display = 'flex';
            })
      })
  }
  creatUserCards();