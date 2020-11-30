const start = ["#cvButton", "#aboutButton", "#worksButton", "#contactButton"]

const contact = ["#callButton", "#mailButton"]

const back = ["#backButton"];

const allElements = [...back, ...start, ...contact];

function openContact() {
$(document.querySelectorAll(allElements)).css("display", "none");
$(document.querySelectorAll(contact)).css("display", "inline-flex");
$(document.querySelectorAll(back)).css("display", "inline-flex");
}

function openCv() {
$(document.querySelectorAll(allElements)).css("display", "none");
document.getElementById('cv').style.display = "inline-table";
}

function backToStart() {
$(document.querySelectorAll(allElements)).css("display", "none");
$(document.querySelectorAll(start)).css("display", "inline-flex");
}
