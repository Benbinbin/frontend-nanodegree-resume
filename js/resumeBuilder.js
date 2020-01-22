/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /* Model */
var Model = {
    bio: {
        name: "Benbinbin",
        role: "前端工程师",
        contact: {
            mobile: "666-666-666",
            email: "mebeansbin@gmail.com",
            github: "https://github.com/Benbinbin",
            Weibo: "@BinBinDesign",
            location: "广州"
        },
        bioPic: "img/profile.jpg",
        welcomeMessage: "这是我的简历模板",
        skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    },

    work: [
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
    ],

    projects: {
        project1:
            {
                "title": "项目模板",
                "dates": "2019",
                "description": "预留空间，在此填写详细信息。",
                "images": [
                    "img/cat-1.jpg",
                    "img/cat-1.jpg"
                ]
            }
    },

    education: {
        school: [
            {
                "name": "大学模板一",
                "location": "广州",
                "degree": "本科",
                "major": "设计",
                "dates": 2017,
                "url": "http://example.com"
            },
            {
                "name": "大学模板二",
                "location": "浙江",
                "degree": "研究生",
                "major": "信息可视化",
                "dates": 2021,
                "url": "http://example.com"
            }
        ],
        onlineCourses: [
            {
                "title": "前端工程师",
                "school": "Udacity",
                "dates": 2019,
                "url": "http://www.udacity.com"
            }
        ]
    }


};

/* Octopus */
var Octopus = {
    init: function() {
        bioView.init();
        workView.init();
        educationView.init();
        projectView.init();
    },
    getBio: function() {
        return Model.bio;
    },
    getEducation: function() {
        return Model.education;
    },
    getProjects: function() {
        return Model.projects;
    },
    getWork: function() {
        return Model.work;
    }
}

/* view */
// 个人介绍视图模块
var bioView = {
    init: function() {
        this.render();
    },

    render: function() {
        var bio = Octopus.getBio();
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
};

/* View part2 */
// 教育经历视图模块
var educationView = {
    init: function() {
        this.render();
    },

    render: function() {
        var education = Octopus.getEducation();
        education.school.forEach(function(x) {
            $("#education").append(HTMLschoolStart)

            var formattedName = HTMLschoolName.replace("%data%", x.name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", x.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", x.dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", x.location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", x.major);

            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        });

        education.onlineCourses.forEach(function(y) {
            var formattedTitle = HTMLschoolName.replace("%data%", y.title);
            var formattedSchool = HTMLschoolDegree.replace("%data%", y.school);
            var formattedDates = HTMLschoolDates.replace("%data%", y.dates);
            var formattedUrl = HTMLschoolLocation.replace("%data%", y.url);

            $(".education-entry:last").append(formattedTitle);
            $(".education-entry:last").append(formattedSchool);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedUrl);
        });
    }
};

/* View part3 */
// 项目视图模块
var projectView = {
    init: function() {
        this.render();
    },

    render: function() {
        var projects = Octopus.getProjects();
        for (key in projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", projects[key].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects[key].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects[key].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            if (projects[key].images.length > 0) {
                projects[key].images.forEach(function(image) {
                    var formattedImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedImage);
                })
            }
        }
    }
};

/* View part4 */
// 工作经历视图模块
var workView = {
    init: function() {
        this.render();
    },

    render: function() {
        var work = Octopus.getWork();
        work.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart)

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployerTitle);
            $(".work-entry:last").append(formattedDates);
            $(".work-entry:last").append(formattedDescription);
        })
    }
}

Octopus.init();
// 增添足迹模块
$("#mapDiv").append(gaodeMap);