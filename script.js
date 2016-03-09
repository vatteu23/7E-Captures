
var myImageOne = document.getElementById("gallery");

var myImageTwo = document.getElementById("gallery1");

var myImageThree = document.getElementById("gallery2");

var myImageFour = document.getElementById("gallery3");




var imageArray = ["images/m1.jpg","images/m2.jpg","images/m3.jpg","images/m4.jpg","images/m5.jpg","images/m6.jpg","images/m6.jpg"];


var imageIndex = 0;

function changeImageOne() {
    myImageOne.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if( imageIndex >= imageArray.length)
        {
            imageIndex= 0;
        }
}

setInterval(changeImageOne,5000);


function changeImageTwo() {
    myImageTwo.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if( imageIndex >= imageArray.length)
        {
            imageIndex= 0;
        }
}

setInterval(changeImageTwo,3000);


function changeImageThree() {
    myImageThree.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if( imageIndex >= imageArray.length)
        {
            imageIndex= 0;
        }
}

setInterval(changeImageThree,6000);


function changeImageFour() {
    myImageFour.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if( imageIndex >= imageArray.length)
        {
            imageIndex= 0;
        }
}

setInterval(changeImageFour,5000);
