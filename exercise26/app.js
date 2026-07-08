
// exercise26

function fetchUserDataSync(){
    alert("starting fetch date")
    
}

console.log("you are late 2 second")

const user = fetchUserDataSync();


function getUserData(calback){
    setTimeout(()=>{
        const massege =  "User data fetched successfully!";
        calback(massege);
    },2000);
}

console.log("hello")

getUserData (function(massege){
    console.log(massege)
})


