let counter=0;
function getdata(){
    console.log("data fetching")
}

function datadebounce(callback,delay){
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }else{
            setTimeout(()=>{
                callback()
            },delay)
        }
    }
}


const Basefunction=datadebounce(getdata,1000)