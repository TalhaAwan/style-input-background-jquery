$(document).ready(function() {
  $("#inpt").on('input', function() {
    formatInputField($(this).val());
  });
})


function formatInputField(input) {
  $("#bckg-leading").css("width", emptySpaceWidth(input));
  $("#bckg-middle").css("width", textWidth(input.trim()));
  if (/\S/.test(input)) { //check from http://stackoverflow.com/a/2031143
    $("#bckg-trailing").css("width", emptySpaceWidth(input, true));
  } else {
    $("#bckg-trailing").css("width", 0 + "px"); //if middle content is empty all spaces should be leading
  }
}

function emptySpaceWidth(ct, reverse) {
  var content = reverse ? ct.split("").reverse().join("") : ct,
    emptySpaces = ""
  for (var i = 0; i < content.search(/\S|$/); i++) {
    emptySpaces += " "; //spaces string
  }
  return textWidth(emptySpaces);
}

// Following code taken and modified. Sources: http://stackoverflow.com/a/15302051 & http://stackoverflow.com/a/18109656
function textWidth(text) {
  var element = $('<span>').appendTo(document.body),
    htmlText = text,
    width;
  htmlText = element.text(htmlText).html(); //encode to Html
  htmlText = htmlText.replace(/\s/g, "&nbsp;"); //replace trailing and leading spaces
  element.html(htmlText).css({
    "font-family": "Arial",
    "font-size": "12px",
    "line-height": "13px"
  });
  width = Math.ceil(element.width());
  element.remove();
  return width + 'px';
};
