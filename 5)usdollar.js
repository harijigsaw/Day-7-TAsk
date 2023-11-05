const URL = "https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest();
req.addEventListener("load",function () {
    let obj = JSON.parse(this.response)
   for (let val of obj){
      let { currencies} = val;
      for(let j in currencies){
         if(j === 'USD'){
            console.log(val.name.common)
         }
      }
    }
});
req.open("GET",URL);
req.send();