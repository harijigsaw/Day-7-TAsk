const URL = "https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest();
req.addEventListener("load",function () {
    let obj = JSON.parse(this.response)
    let sum = []
    for (let val of obj){
       sum.push(val.population) 
    }
   const result= sum.reduce((val1,val2) => (val1+val2))
    console.log(result)
});
req.open("GET",URL);
req.send();