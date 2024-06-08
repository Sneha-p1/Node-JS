let a=2500;
    if (0<=a&&600>=a)
    {
        console.log("Early Morning!");
    }
    else if(601<=a&&780>=a)
    {
        console.log("Morning");
    }
    else if(781<=a&&960>=a)
    {
        console.log("Noon");
    }
    else if(961<=a&&1140>=a)
    {
        console.log("Afternoon");
    }
    else if(1141<=a&&1320>=a)
    {
        console.log("Evening");
    }
    else if (1321<=a&&1439>=a)
    {
        console.log("Night");
    }
    else
    {
        console.log("Not a day time");
    }