const talkingCalendar = function (date) {
    // Your code here

    var date = date.split('/');


    let year = date[0];
    let month = date[1];
    let day = date[2];

    switch (month) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "Sptember";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
    }

    switch (day) {
        case "01":
        case "21":
        case "31":
            day += "st";
            break;

        case "02":
        case "22":
            day += "nd";
            break;

        case "03":
        case "23":
            day += "rd";
            break;

        default:
            day += "th";
            break;
    }

    if (day[0] === "0") {
        day = day.substr(1, 3);

        console.log(month + ' ' + day + ', ' + year);
        return month + ' ' + day + ', ' + year;
    }
};

console.log(talkingCalendar("2017/12/02"));
 //' December 2nd, 2017'