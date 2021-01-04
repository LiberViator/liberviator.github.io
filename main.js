// Button actions 💥

const start = ["#nazarFigure", "#chat"]

const chat = ["#cvButton", "#aboutButton", "#worksButton", "#contactButton"]

const contact = ["#callButton", "#mailButton"]

const back = ["#backButton"];

const works = ["#works"];

const allElements = [...back, ...start, ...contact, ...works];

function openContact() {
  $(document.querySelectorAll(chat)).css("display", "none");
  $(document.querySelectorAll(contact)).css("display", "inline-flex");
  $(document.querySelectorAll(back)).css("display", "inline-flex");
}

function openCv() {
  $(document.querySelectorAll(allElements)).css("display", "none");
  document.getElementById('cv').style.display = "inline-table";
}

function openWorks() {
  $(document.querySelectorAll(allElements)).css("display", "none");
  $(document.querySelectorAll(works)).css("display", "block");
  $(document.querySelectorAll(back)).css("display", "inline-flex");
}

function backToStart() {
  $(document.querySelectorAll(allElements)).css("display", "none");
  $(document.querySelectorAll("#nazarFigure")).css("display", "block");
  $(document.querySelectorAll("#chat")).css("display", "flex");
  $(document.querySelectorAll(chat)).css("display", "inline-flex");
}

// Gallery filter 🧺

$(document).ready(function() {
  $('.list').click(function() {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".container").show("1000");
    } else {
      $(".container").not('.' + value).hide('1000');
      $(".container").filter('.' + value).show('1000');
    }
  })
  $(".list").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
  })
})
