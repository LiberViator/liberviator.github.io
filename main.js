// Button actions 💥
// const chat = ["#cvButton", "#aboutButton", "#worksButton", "#contactButton"]
// const contact = ["#callButton", "#mailButton"]
// const allElements = [...back, ...start, ...contact, ...works];
// function openContact() {
//   $(document.querySelectorAll(chat)).css("display", "none");
//   $(document.querySelectorAll(contact)).css("display", "inline-flex");
// }

function goBack() {
  window.history.back();
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

function openMenu() {
  const scrollY = document.body.style.top;
  var x = document.querySelector('.navMenu');
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
