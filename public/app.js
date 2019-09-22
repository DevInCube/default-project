System.register("utils/misc", [], function (exports_1, context_1) {
    var t;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("t", t = 5);
        }
    };
});
System.register("main", [], function (exports_2, context_2) {
    var canvas, ctx;
    var __moduleName = context_2 && context_2.id;
    function drawCell() {
        ctx.strokeStyle = "#bbb";
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.7;
        // palette borders
        ctx.strokeRect(10, 10, 100, 100);
    }
    return {
        setters: [],
        execute: function () {
            canvas = document.getElementById("canvas");
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            ctx = canvas.getContext("2d");
            drawCell();
        }
    };
});
//# sourceMappingURL=app.js.map