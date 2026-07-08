

// exercise27

function getUserData(){

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const massege = false

            if(massege){
                resolve('waad gulaysatay')
            }else{
                reject('waad qasaartay')
            }
        },2000);
    })
}

getUserData()
.then((data)=> console.log('massege',data))
.catch((error)=> console.log(error))











