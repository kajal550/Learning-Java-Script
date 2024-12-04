function walkdog(){

    return new Promise((resolve, reject) => {
        setTimeout (() => {

            const walkdog = true;

            if (walkdog){
                resolve("You walk the dog");
            }
            else{
            reject("You didntwalk the dog");
        }
         },1500);
        });
    }


function Cleanthekitchen(){
    
    return new Promise ((resolve,reject)=>{
    setTimeout(()=> {
        const Cleanthekitchen = false;

        if (Cleanthekitchen){
            resolve("You clean the kitchen");
        }
        else{
        reject("You didnot clean the kitchen");
    }
    },2500);
    });
}

function Takeoutthetrash () {

        return new Promise ((resolve,reject)=>{
        setTimeout(()=> {
            
            const Takeoutthetrash = true;

            if (Takeoutthetrash){
                resolve("You takeout the trash");
            }
            else{
            reject("You didnt takeout the dog");
        }
        },500);
        });
    }

    
walkdog().then(value => {console.log(value);return Cleanthekitchen ()})
         .then(value => {console.log(value);return Takeoutthetrash ()})
        .then(value => {console.log(value);console.log("You finish all the chores")})
        .catch (error => console.error(error));