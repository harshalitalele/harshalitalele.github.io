function setTitles() {
    document.getElementsByTagName("title")[0].innerHTML = details.name;
    var myPic = document.getElementById("picture");
    myPic.setAttribute("src", details.pictureSrc);
}

setTitles();