
function
receivesAFunction(hotdog){
    hotdog()
}

function returnsANamedFunction(){
    return function test(){

    }
}

function 
returnsAnAnonymousFunction(){
    return function(){
        console.log('pizza')
    }
}