/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
    "jobs": [
      {
        "employer": "工作模板一",
        "title": "设计师",
        "location": "深圳",
        "dates": "2020/01 - 当前",
        "description": "预留空间，在此填写详细信息。"
      },
      {
        "employer": "工作模板二",
        "title": "初级数据分析师",
        "location": "北京",
        "dates": "2020/09 - 2021/03",
        "description": "预留空间，在此填写详细信息。"
      },
      {
        "employer": "工作模板三",
        "title": "数据可视化研究员",
        "location": "浙江",
        "dates": "2023/09 - ~",
        "description": "预留空间，在此填写详细信息。"
      }
    ]
  };

var projects = {
    "projects": [
        {
            "title": "项目模板",
            "dates": "2019",
            "description": "预留空间，在此填写详细信息。",
            "images": [
                "http://placekitten.com/400/200", "http://placekitten.com/400/200"
            ]
        }
    ]
}

var education = {
    "school": [
        {
            "name": "大学模板一",
            "location": "广州",
            "degree": "本科",
            "major": ["设计"],
            "dates": 2017,
            "url": "http://example.com"
        },
        {
            "name": "大学模板二",
            "location": "浙江",
            "degree": "研究生",
            "major": ["设计"],
            "dates": 2021,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "前端工程师",
            "school": "Udacity",
            "dates": 2019,
            "url": "http://www.udacity.com"
        }
    ]
}

var bio = {
    name: "Ben Thomson",
    role: "前端工程师",
    contact: {
        mobile: "666-66-666",
        email: "mebeansbin@gmail.com",
        github: "https://github.com/BenThomsonBin",
        Weibo: "@BenThomson",
        location: "香港"
    },
    bioPic: "images/fry.jpg",
    welcomeMessage: "这是我的简历模板",
    skills: ["厉害了", "啥都想会一点", "主要瞎折腾", "项目为主导的学习模式"]
}

// 增添个人信息模块
bio.display = function() {
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
}

bio.display();

// $(document).click(function(loc) {
//     logClicks(loc.pageX, loc.pageY);
// });

// function locationizer(work_obj) {
//     var locations = [];

//      work_obj["jobs"].forEach(function(job) {
//          locations.push(job.location);
//      });

//      return locations;
// }

// console.log(locationizer(work));



// 一键转换名字为国际模式：family name 全大写
var name = bio.name;
function inName(name) {
    nameList = name.split(' ');
    nameList[0] = nameList[0][0].toUpperCase() + nameList[0].slice(1).toLowerCase();
    nameList[1] = nameList[1].toUpperCase();
    
    return nameList.join(' ');
}

$("#main").append(internationalizeButton);

// 增添教育模块
education.display = function() {
    for(x in education.school) {
        $("#education").append(HTMLschoolStart)

        var formattedName = HTMLschoolName.replace("%data%", education.school[x].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.school[x].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.school[x].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.school[x].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.school[x].major);

        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
}

education.display();

// 增添工作模块
work.display = function() {
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
}

work.display();



// 增添项目模块
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

// 增添足迹模块
$("#mapDiv").append(gaodeMap);