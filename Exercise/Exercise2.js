const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function match(){
    console.log("Select from : ");
    console.log("Stone-1 Paper-2 Scissor-3");
    console.log("Snake-4 Water-5");
    rl.question('Enter your choice : ',function(choice)
{
    let x=parseInt((Math.random()*5)+1);
    console.log("Computer choice : "+x);
    console.log("Your choice : ",+choice);

    if(x==1){
        console.log(choice)
        switch(choice){
            case "1" :
                console.log("Both choose stone");
                console.log("Draw");
                break;
            case "2" :
                console.log("Paper cover stone");
                console.log("You Win ...");
                break;
            case "3" :
                console.log("Stone crush scissor");
                console.log("You Lost...");
                break;
            case "4" :
                console.log("Stone crush Snake");
                console.log("You Lost...");
                break;
            case "5" :
                console.log("Water rust stone");
                console.log("You Win...");
                break;
        }
    }

    else if(x==2){
        switch(choice){
            case "1" :
                console.log("Paper cover stone");
                console.log("You Lost...");
                break;
            case "2" :
                console.log("Both choose paper");
                console.log("Draw");
                break;
            case "3" :
                console.log("Scissor cuts Paper");
                console.log("You Win...");
                break;
            case "4" :
                console.log("Snake Poisons Paper");
                console.log("You Lost...");
                break;
            case "5" :
                console.log("Water drowns Paper");
                console.log("You Win...");
                break;
            }
        }

    else if(x==3){
        switch(choice){
            case "1" :
                console.log("Stone crush Scissor");
                console.log("You Win...");
                break;
            case "2" :
                console.log("Scissor cuts Paper");
                console.log("You Lost...");
                break;
            case "3" :
                console.log("Both choose Scissor");
                console.log("Draw");
                break;
            case "4" :
                console.log("Scissor cut Snake");
                console.log("You Lost ...");
                break;
            case "5" :
                console.log("Water rusts Scissor");
                console.log("You Win...");
                break;
        }
    }

    else if(x==4){
        switch(choice){
            case "1" :
                console.log("Stone crushes Snake");
                console.log("You Win...")
                break;
            case "2" :
                console.log("Snake Poisons Paper");
                console.log("You Lost...");
                break;
            case "3" :
                console.log("Scissor cut Snake");
                console.log("You Win ...");
                break;
            case "4" :
                console.log("Both choose Snake");
                console.log("Draw");
                break;
            case "5" :
                console.log("Snake drinks water");
                console.log("You Lost");
                break;
        }
    }
    else if(x==5){
        switch(choice){
            case "1" :
                console.log("Water rusts Stone");
                console.log("You Lost...")
                break;
            case "2" :
                console.log("Water drowns Paper");
                console.log("You Lost...");
                break;
            case "3" :
                console.log("Water rusts Scissor");
                console.log("You Lost...");
                break;
            case "4" :
                console.log("Snake drinks water");
                console.log("You Win...");
                break;
            case "5" :
                console.log("Both choose Water");
                console.log("Draw");
                break;
        }
    }

    rl.close();
})
}
match();