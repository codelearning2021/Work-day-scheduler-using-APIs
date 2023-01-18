// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  $(document).ready(function () {
    $("*[data-store]").each(function () {
      $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("keyup", function (itm) {
      localStorage.setItem("item-" + $(this).attr("data-store"), $(this).val());
    })
  })


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  // TODO: Add code to display the current date in the header of the page.
  import dayjs from 'dayjs';
  let currentDay = dayjs();
  console.log(currentDay.format("dddd, MMMM D YYYY"));
  // var gradDate = dayjs('2023-06-15').format('MMM D, YYYY');
  // $('#1a').text(gradDate);

//   $("#clearFieldsBtn").click(function (t) { t.preventDefault, $("textarea").val(""), localStorage.clear() }), $(".time-div").each(function () { var t = $(this).attr("id").split("-")[1]; a == t ? ($(this).addClass("present"), $(this).children(".description").addClass("white-text")) : a < t ? ($(this).removeClass("present"), $(this).addClass("future")) : t < a && ($(this).removeClass("future"), $(this).addClass("past")) }), $(".saveBtn").click(function (t) { t.preventDefault(); var e = $(this).siblings(".time-block").val(), t = $(this).parent().attr("id").split("-")[1]; localStorage.setItem(t, e) }), $("#hour-09 .time-block").val(localStorage.getItem("09")), $("#hour-10 .time-block").val(localStorage.getItem("10")), $("#hour-11 .time-block").val(localStorage.getItem("11")), $("#hour-12 .time-block").val(localStorage.getItem("12")), $("#hour-13 .time-block").val(localStorage.getItem("13")), $("#hour-14 .time-block").val(localStorage.getItem("14")), $("#hour-15 .time-block").val(localStorage.getItem("15")), $("#hour-16 .time-block").val(localStorage.getItem("16")), $("#hour-17 .time-block").val(localStorage.getItem("17"))
// });
// });


// create divs, append child in jquery
