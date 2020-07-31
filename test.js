function deleteProject(id) {
    console.log("clicked delete", id)
     var project = document.getElementById(id);
         if (project.style.display === "none") {
             project.style.display = "block";
         } else {
             project.style.display = "none";
         }
         alert("Project Deleted Successfully!");
}

function searchClicked() {
    let searchText = document.getElementById('searchBar').value

 var headings = document.querySelectorAll('h5');

 for( var i = 0; i < headings.length; i++ ) {
     var project = document.getElementById(headings[i].id);
     if (headings[i].innerHTML.toLowerCase().includes(searchText.toLowerCase())) {
         project.style.display = "block";
     } else {
         project.style.display = "none";
     }
 }
}