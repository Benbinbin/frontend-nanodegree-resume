/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("BenThomson")

// [string].replace([old], [new]);

// var name = "BenThomson";
// var awesomeThoughts = "I am " + name + " and I an AWESOME!";

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// var formattedName = HTMLheaderName.replace("%data%", "BenThomson");
// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var sampleArray = [0,0,7];

// var incrementLastArrayElement = function(_array) {
//     var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
//     var last = sampleArray.pop();
    
//     newArray = sampleArray;

//     newArray.push(last+1);
    
//     // Don't delete this line!
//     return newArray;
// };

// // Did your code work? The line below will tell you!
// console.log(incrementLastArrayElement(sampleArray));

// var name = "AlbERt EINstEiN";

// function nameChanger(oldName) {
//     // Your code goes here!
//     nameList = oldName.split(' ');
//     nameList[0] = nameList[0][0].toUpperCase() + nameList[0].slice(1).toLowerCase();
//     nameList[1] = nameList[1].toUpperCase();
//     var finalName = nameList.join(' ');
//     // Don't delete this line!
//     return finalName;
// };

// // Did your code work? The line below will tell you!
// console.log(nameChanger(name));



// var education = {};
// education["name"] = "Home self-internet University";
// education["years"] = "2018-2019";
// education["city"] = "Earth";

// var work = {
//     "jobs": [{
//         "employer": "Planet Express",
//         "title": "Delivery Boy",
//         "dates": "January 3000- Future",
//         "description": "Who moved my cheese cheesy fect cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie, Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     }, 
//     {
//         "employer": "Panucci's Pizza",
//         "title": "Delivery Boy",
//         "dates": "1998-December 31, 1999",
//         "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecakc. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     }]
// }

var work = {
    "jobs": [
      {
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      }
    ]
  };

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg. ",
            "images": [
                "https://pbs.twimg.com/profile_images/917232737227964416/NudWD1d5_400x400.jpg", "http://bcaffo.github.io/MOOCtalk/fig/udacity.png"
            ]
        }
    ]
}

var education = {
    "school": [
        {
            "name": "Sun Yat-Sen University",
            "location": "Guangzhou",
            "degree": "Master",
            "major": ["CS"],
            "dates": 2022,
            "url": "http://example.com"
        },
        {
            "name": "Home self-internet University",
            "location": "Earth",
            "degree": "Master",
            "major": ["CS"],
            "dates": 2019,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2014,
            "url": "http://www.udacity.com/course/ud304"
        }
    ]
}

var bio = {
    name: "Ben Thomson",
    role: "Web Developer",
    contact: {
        mobile: "88-88-88",
        email: "mebeansbin@gmail.com",
        github: "https://github.com/BenThomsonBin",
        twitter: "@johnodoe",
        location: "San Francisco"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "Hey, this is my resume.",
    skills: ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"]
}

// var work = {};
// work.position = "Course Developer";
// work.employer = "Udacity";
// work.years = 0.3;

// $("#header").prepend(bio.role);
// $("#header").prepend(bio.name);
// $("#main").append(work["position"]);
// $("#main").append(education.name);
var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);

$("#header").prepend(formattedHTMLheaderRole);
$("#header").prepend(formattedHTMLheaderName);

for(key in bio.contact) {
    var formattedHTMLcontact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contact[key]);
    
    $("#topContacts").append(formattedHTMLcontact);
}

var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic)

$("#header").append(formattedHTMLbioPic);

if(bio.skills.length > 0) {
    
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);

}


$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

function locationizer(work_obj) {
    var locations = [];

     work_obj["jobs"].forEach(function(job) {
         locations.push(job.location);
     });

     return locations;
}

console.log(locationizer(work));

var name = bio.name;
function inName(name) {
    nameList = name.split(' ');
    nameList[0] = nameList[0][0].toUpperCase() + nameList[0].slice(1).toLowerCase();
    nameList[1] = nameList[1].toUpperCase();
    
    return nameList.join(' ');
}

$("#main").append(internationalizeButton);

for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart)

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
}


projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        
        }
    }   
}

projects.display();

// here' a map
$("#mapDiv").append(googleMap);