function over2(obj) {
    obj.src = "./images/스펀지밥 뚱이02.gif";
}
function out2(obj) {
    obj.src = "./images/스펀지밥 뚱이.gif";
}
var img4 = document.getElementById("img4")
img4.addEventListener("mouseover", function() {
    img4.src = "./images/스펀지밥 뚱이.gif"
});
img4.addEventListener("mouseout", function() {
    img4.src = "./images/스펀지밥 뚱이02.gif"
});

