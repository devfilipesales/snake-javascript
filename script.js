window.onload = function() {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    setInterval(game, 60);

    const vel = 1;

    var vx = vy = 0;
    var px = 10;
    var py = 15;



    function game() {

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.clientWidth, stage.height);

    }

}