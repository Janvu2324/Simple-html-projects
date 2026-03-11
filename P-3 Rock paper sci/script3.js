function rpsgame(Yourchoice){
    console.log(Yourchoice)
    

    var Comchoice
    Comchoice = choice(random());
    console.log(Comchoice)
}




function random(){
    return Math.floor(Math.random() * 3);
}

function choice(number){
    return ['rock','paper', 'scissors'][number] 
}

