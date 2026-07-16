

{const d = new Date();
let month;
switch (new Date().getMonth()) {
    case 0:
        month = "January";
        break;

    case 1:
        month = "February";
        break;

    case 2:
        month = "March";
        break;
        
    case 3:
        month = "April";
        break;
    
    case 4:
        month = "May";
        break;
        
    case 5:
        month = "June";
        break;
        
    case 6:
        month = "July";
        break;
        
    case 7:
        month = "August";
        break;
        
    case 8:
        month = "September";
        break;
        
    case 9:
        month = "October";
        break;
        
    case 10:
        month = "November";
        break;
        
    case 11:
        month = "December";
       break;
};
let dat1;
dat1 = d.getDate();
let fullyear;
fullyear = d.getFullYear();

document.getElementById("datetoday").innerHTML = "Date:" + dat1 + " " + month +
 " " + fullyear;}








{switch ( new Date().getDay()) {
    case 1:
        thought = "Heyyaa!! The day which only productive people wants to come.<q>MONDAY</q>";
        break;

    case 2:
        thought = "Nowwww!!! the gain show up day!<q>TUSEDAY</q>";
        break;
    
    case 3:
        thought = "Very underrated day. Huhhhhh.<q>WEDNESDAY</q>";
        break;
        
    case 4:
        thought = "The day of break down. yes! you got it right.<q>THURSHDAY</q>";
        break;
        
    case 5:
        thought = "This is the day of beleivers.<q>FRIDAY</q>";
        break;
      
    case 6:
        thought = "The day for those who are extraordinary.<q>SATURDAY</q>";
        break;
        
    case 0:
        thought = "FINALE!!! The 1% day. Salute to those who showed up today.<q>SUNDAY</q>";
        
};

document.getElementById("daytho").innerHTML = thought;}


{
    function myClock() {
        const now = new Date();

        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        const timeString = hours + ":" + minutes + ":" + seconds;

        document.getElementById("righttime").innerHTML = timeString;
    }

    myClock();

    setInterval(myClock, 1000);
}