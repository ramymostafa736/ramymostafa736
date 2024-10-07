fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata =>  mydata = jsondata);