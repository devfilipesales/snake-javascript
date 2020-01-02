window.onload = function() {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");

    setInterval(game, 60);

    const vel = 1;

    var vx = vy = 0;

    var px = 10;
    var py = 15;

    var tp = 20;
    var qp = 20;

    var ax = ay = 15;

    var trail = [];
    tail = 5;

    function game() {

        px += vx;
        py += vy;

        if (px < 0) {
            px = qp - 1
        }

        if (px > qp - 1) {
            px = 0
        }

        if (py < 0) {
            py = qp - 1;
        }

        if (py > qp - 1) {
            py = 0;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.clientWidth, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp)

        ctx.fillStyle = "gray";
        for (var i = 0; i < trail.lenght; i++) {
            ctx.fillRect(trail[i].x * lp, trail[i].y * tp, tp, tp);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
            }
        }

        trail.push({ x: px, y: py })
        while (trail.length > trail) {
            trail.shift();
        }

        if (ax == px && ay == py) {
            trail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }
    }
}