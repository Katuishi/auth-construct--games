const checkHost = _ =>{
    //get hostname of webpage
    let hostname = window.location.host
    
    let result 
    //consumer API
    fetch("http://localhost:3000/auth",{
        method:"POST",
        body:JSON.stringify({'dns':hostname}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response =>{
        //get convert in json
        return response.json()
    }).then(data =>{
        //check data
        data.status === 200 ? result = true: result = false 
        console.log(data)
    }).catch(error=>{
        //catch error
        result = false
    })
    return result;
}
