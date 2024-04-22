function show(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById(id).scrollIntoView();
}

function hide(id) {
const ele = document.getElementById(id);  
  //ele.style.visibility = "hidden";
  ele.style.display = "none";
}

function toggle(id) {
  if (document.getElementById(id).style.display == "none") {
    show(id);
  } else {
    hide(id);
  }
}