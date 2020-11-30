const start = ["#cv", "#about", "#works", "#contact"]

const contact = ["#call", "#mail"]

const back = ["#back"];

const allElements = [...back, ...start, ...contact];

function openContact() {
$(document.querySelectorAll(allElements)).css("display", "none");
$(document.querySelectorAll(contact)).css("display", "inline-flex");
$(document.querySelectorAll(back)).css("display", "inline-flex");
}


function backToStart() {
$(document.querySelectorAll(allElements)).css("display", "none");
$(document.querySelectorAll(start)).css("display", "inline-flex");
}
