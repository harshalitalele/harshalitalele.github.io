function setLeftBarDetails() {
    document.getElementsByTagName("title")[0].innerHTML = details.name;
    var myPic = document.getElementById("picture");
    myPic.setAttribute("src", details.pictureSrc);
    document.getElementById("picture-tag").innerHTML = details.name;
    document.getElementById("professional-tag").innerHTML = details.professionTitle;
    document.getElementById("linkedin-profile").setAttribute("href", details.linkedinLink);
    document.getElementById("github-profile").setAttribute("href", details.githubLink);
}

/*function setAboutMeDetails() {
    document.getElementById("about-me").innerHTML = details["About Me"];
    var rightBar = document.getElementById("more-info"),
        headers = details.resumeInfo;
    for(var header in headers) {
        var desc = headers[header];
        var headerElem = document.createElement("h2");
        headerElem.innerHTML = header;
        rightBar.appendChild(headerElem);
        var detailElem = document.createElement("div");
        detailElem.innerHTML = desc.title;
        rightBar.appendChild(detailElem);
    }
}*/

setLeftBarDetails();
//setAboutMeDetails();
