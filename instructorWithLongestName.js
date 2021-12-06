const instructorWithLongestName = function (instructors) {
    // Put your solution here
    var largeNumber = "";

    for (let i = 0; i < instructors.length; i++) {

        if (instructors[i].name.length > largeNumber.length) {

            largeNumber = instructors[i].name;
           
        }
        
    }
    return largeNumber;

}

console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
]));