function setTitles() {
    document.getElementsByTagName("title")[0].innerHTML = details.name;
    var myPic = document.getElementById("picture");
    myPic.setAttribute("src", details.pictureSrc);
    document.getElementById("picture-tag").innerHTML = details.name;
    document.getElementById("professional-tag").innerHTML = details.professionTitle;
    document.getElementById("linkedin-profile").setAttribute("href", details.linkedinLink);
    document.getElementById("github-profile").setAttribute("href", details.githubLink);
}

setTitles();