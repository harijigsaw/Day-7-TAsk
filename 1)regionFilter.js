const URL = "https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest();
req.addEventListener("load",function () {
    let obj = JSON.parse(this.response)
    obj.filter(checkasia)
    function checkasia(val) {
        if (val.continents=="Asia")
        {
            console.log(val.name.common)
        }
    }
});
req.open("GET",URL);
req.send();