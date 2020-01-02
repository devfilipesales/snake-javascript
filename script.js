window.onload = function() {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.clientWidth, stage.height);

}