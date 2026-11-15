// Exercise 1 — Very Easy (Warming up)

// function afterDelay(time, cb){
//     console.log(time);
//     setTimeout(function() {
//     cb();
//     }, time);

// }

// afterDelay(2000, function(){
//     console.log("callback executed");
    
// });


// Exercise 2 — Intermediate (Data flow)

// function getUser(username , cb){
//     console.log("searching user...");
    
//     setTimeout(() => {
//         cb({"id":123, "username": username})
//     }, 1000);

// }

// function getUserPosts(userid,cb ){
//     console.log("searching posts of user...");
    
//     setTimeout(() => {
//         cb(["hello","hi","how r u","nice to meet you"])
//     }, 1000);

// }

// getUser("xyz", function(user){
//     console.log("Username:", user.username);
//     getUserPosts(user.id, function(post){
//         console.log("User posts: ",post);
        
//     })
// })


// Exercise 3 — Intermediate (Callback dependency — thoda painful)

function loginUser(name,cb){
    console.log("login...");
    
    setTimeout(() => {
        cb({"id":123, "name":name})
    }, 1000);
}

function fetchPermissions(userid, cb){
    console.log("fetching permissions...");
    setTimeout(() => {
        cb(["read","write","update"])
    }, 1000);
}

function loadDashboard(permission , cb){
    console.log("loading dashboard...");
    setTimeout(() => {
        cb("Dashboard Loaded")
    }, 1000);
}

loginUser("abc", function(user){
    console.log("login successful");
    fetchPermissions(user.id , function(permissions){
        console.log("permissions fetched");
        loadDashboard(permissions, function(message){
            console.log(message);
            
        })
        

    })

})