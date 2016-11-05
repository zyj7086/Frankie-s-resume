
var bio ={
    "name":"Frankie",
    "role":"sales",
    "contacts":{
        "mobile":"17772351745",
        "email":"romantic7086@qq.com",
        "github":"zyj7086",
        "facebook":"https://www.facebook.com/frankie.cheung.560272",
        "location":"Chong Qing"
    },
    "welcomeMessage":"Hello , nice to meet you ",
    "skills":["Customer support","Negotiating","Office software","English-Chinese Translation"],
    "biopic":"images/Frankie.jpg"
};

var education = {
    "schools":[
    {
        "school":"Beijing Foreign Study University",
        "location":"Beijing",
        "degree":"bachelor",
        "majors":["English"],
        "dates":"2013",
        "url":"http://www.bfsu.edu.cn/"
    },
    {
        "school":"Hailian Technology institute",
        "location":"Chonqing",
        "degree":"associate",
        "majors":["business management"],
        "dates":"2009",
        "url":"http://www.ccca.edu.cn/"
    }
  ],
    "onlineCourses":[
    {
        "title":"Web Front-end developer",
        "school":"Udacity",
        "dates":"2016",
        "url":"http://www.udacity.com"
    }
  ]
};

var work = {
    "jobs":[
    {
        "employer":"Shenzhen MYH technology Co.,LTD",
        "title":"sales",
        "location":"Shenzhen",
        "dates":"2015.3--now",
        "description":"Develop new and maintain existing customer relations on various online platforms,Respond to enquiries, quote and negotiate ,Track new purchase orders.",
        "url":"http://myh1tech.cn.globalimporter.net/"
    },
    {
        "employer":"Shenzhen Anyuantong Chemical Co.,LTD",
        "title":"document clerk",
        "location":"Shenzhen",
        "dates":"2014.3--2015.3",
        "description":"Examine and produce Letters of Credit,Facilitate the smooth operation of company affairs",
        "url":"http://www.hysz.net/plus/view-52716-1.html"
    }
  ]
};

var projects = {
    "projects":[
    {
        "title":"Portfolio",
        "dates":"2016",
        "description":"Udacity assignment",
        "images":["images/portfolio_on_Nexus 5X.png","images/portfolio_on_ipad.png"]
    }
  ]
};


var data = "%data%";
bio.display=function(){
    var formattedRole=HTMLheaderRole.replace(data,bio.role);
    $("#header").prepend(formattedRole);
    var formattedName=HTMLheaderName.replace(data,bio.name);
    $("#header").prepend(formattedName);
    var formattedMobile=HTMLmobile.replace(data,bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace(data,bio.contacts.email);
    var formattedGithub=HTMLgithub.replace(data,bio.contacts.github);
    var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts","#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    var formattedPic=HTMLbioPic.replace(data,bio.biopic);
    $("#header").append(formattedPic);
    $("#header").append(HTMLskillsStart);
    for(i=0;i<bio.skills.length;i++){
        var formattedSkill = HTMLskills.replace(data,bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();


work.display=function(){
    for (i=0;i<work.jobs.length;i++){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer=HTMLworkEmployer.replace(data,work.jobs[i].employer);
        formattedEmployer=formattedEmployer.replace("#",work.jobs[i].url);
        var formattedTitle=HTMLworkTitle.replace(data,work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates=HTMLworkDates.replace(data,work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedWorkLocation=HTMLworkLocation.replace(data,work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedDescription=HTMLworkDescription.replace(data,work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
     }
    };
work.display();

education.display=function(){
    for(i=0;i<education.schools.length;i++){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName=HTMLschoolName.replace(data,education.schools[i].school);
        formattedSchoolName=formattedSchoolName.replace("#",education.schools[i].url);
        var formattedSchoolDegree=HTMLschoolDegree.replace(data,education.schools[i].degree);
        var formattedSchoolNameAndDegree=formattedSchoolName+formattedSchoolDegree;
        var formattedSchoolDates=HTMLschoolDates.replace(data,education.schools[i].dates);
        var formattedSchoolLocation=HTMLschoolLocation.replace(data,education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolNameAndDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        for (a=0;a<education.schools[i].majors.length;a++){
            var formattedSchoolMajor=HTMLschoolMajor.replace(data,education.schools[i].majors[a]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
   for (i=0;i<education.onlineCourses.length;i++){
        $(".education-entry:last").append(HTMLonlineClasses);
        var onlineSchoolTitle=HTMLonlineTitle.replace(data,education.onlineCourses[i].title);
        onlineSchoolTitle=onlineSchoolTitle.replace("#",education.onlineCourses[i].url);
        var onlineSchoolName=HTMLonlineSchool.replace(data,education.onlineCourses[i].school);
        var onlineSchoolAndTitle=onlineSchoolTitle+onlineSchoolName;
        var onlineSchoolDates=HTMLonlineDates.replace(data,education.onlineCourses[i].dates);
        var onlineSchoolUrl=HTMLonlineURL.replace(data,education.onlineCourses[i].url);
        onlineSchoolUrl=onlineSchoolUrl.replace("#",education.onlineCourses[i].url);
        $(".education-entry:last").append(onlineSchoolAndTitle);
        $(".education-entry:last").append(onlineSchoolDates);
        $(".education-entry:last").append(onlineSchoolUrl);
  }
};

education.display();


projects.display = function(){
    for (i=0;i<projects.projects.length;i++){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle=HTMLprojectTitle.replace(data,projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace(data,projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription=HTMLprojectDescription.replace(data,projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);
        $(".project-entry:last").append("<div class=project-image></div>");
        if(projects.projects[i].images.length>0){
            for(a=0;a<projects.projects[i].images.length;a++){
                var formattedImage = HTMLprojectImage.replace(data,projects.projects[i].images[a]);
                $(".project-image").append(formattedImage);
            }
        }

    }
};
projects.display();

$("#mapDiv").append(googleMap);




