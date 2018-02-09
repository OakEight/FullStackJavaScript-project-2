"use strict";

//all the students
var studentItems = $(".student-item");
//strings containing the html to be added to the page
var emptyPageLinks ="<div class='pagination'><ul></ul></div>";

//makes sure everything is loaded correctly once the page is loaded 
$( document ).ready(function(){
    //adds <li>s inside div>ul so it becomes div>ul>li, ammount of <li>s depend on studentItems's length
createPaginationLinks(studentItems);
    //shows 10 students at the beginning
    showCorrectStudents();
    
});

//pagination links 
function createPaginationLinks () {
    //removes previous links
    $(".pagination").remove();
    //appends div>ul at bottom of page (the pagination part)
    $(".page").append(emptyPageLinks);
    //creates a li with a link inside it, then appends it to the pagination bar, repeats untill the correct ammount of links are created
    for (var i = 1; i<(studentItems.length/10)+1; i++)
        {
            //creates the pagination link with with eventhandeler
            var LiInsidePaginator = "<li></li>";
            var linkInsidePaginator = $("<a href='#'>"+i+"</a>").on("click", showNewSetOfStudents);
            
            //appends the "button"
            $(".pagination ul").append(LiInsidePaginator);
            //i use li:last to only append the link to the last instead of all .pag>ul>li iteams
            $(".pagination ul li:last").append(linkInsidePaginator);
        }
    //gives the class pagination>ul>li>a (first one) the class active
    $('.pagination ul li a').first().addClass('active');
    
    
}

//show correct studentItems depending on paginationLink in use
function showCorrectStudents() {
    //hides previously shown students
    studentItems.hide();
    //finds which link is in use
    var linkInUse = $(".pagination ul li a[class='active']")[0].innerHTML;
    //shows the related students
    var upperReach = linkInUse*10;
    //if for example there are 55 students and button 6 is clicked then upperReach becomes 55 instead of 60
    if(upperReach > studentItems.Length){
        upperReach = studentItems.length;
    }
    for (var i=(linkInUse-1)*10; i<upperReach; i++) {
        studentItems[i].style.display = "block";
    }
}
//fires when the pagination link is clicked
function showNewSetOfStudents(e) {
    //removes the class active
    $('.pagination ul li a').removeClass("active");
    //adds class active to the pressed pagination link
    $(e.target).addClass("active");
    //calls on showCorrectStudents to uppdate the shown students
    showCorrectStudents();
}