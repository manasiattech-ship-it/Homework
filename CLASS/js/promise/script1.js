let res = fetch("https://fakerapi.it/api/v2/addresses")


res.then(
    function(data){ 
        return data.json()
    }
).then(function(myData){
    console.log(myData.data); 

}
)
.catch(function(){
    console.log("error fetching"); 
}
);



async function nydata() {
    try{
        let getnyData = await fetch("https://fakerapi.it/api/v2/addresses")
        let data = await getnyData.json()

        console.log(data.data)
        }
    catch(error){
        console.error("Error!!")
    }
}

nydata()