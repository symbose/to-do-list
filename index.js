var button = $('button');
var list = $('input');
var items = $('.items');
// var x = document.getElementById("myCheck").checked;
// var blankArray = [];

button.on("click", addtext);

function addtext(){

  items.append(`
    <input type ="checkbox">
    <p>${list.val()}</p>`);


}

// function delete() {
//     document.getElementById("myCheck").checked = true;
//     blankArray.push[];
// }
