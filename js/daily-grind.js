myDate = new Date();
myDay = myDate.getDay();

switch(myDay){

    case 0:
        today = "Sunday";
    break;

    case 2:
        today = "Tuesday";
    break;

    default:
        today = "Something went wrong";
}

alert(today);
