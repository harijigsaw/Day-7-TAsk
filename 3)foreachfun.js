const URL = "https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest();
req.addEventListener("load",function () {
    let obj = JSON.parse(this.response)
    obj.forEach(print_name_capital_flag)
    function print_name_capital_flag(val) {
      
            console.log("Name:",val.name.common,",","Capital:",val.capital,",","Flag:",val.flag)
        
    }
});
req.open("GET",URL);
req.send();