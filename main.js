var canvas = document.getElementById("editor-canvas");
var editor = document.getElementById("editor-textarea");
var ctx = canvas.getContext("2d");

(function() {
  let initialize = function() {
    editor.oninput = keyboardEvent;
    editor.rows = "8";
    editor.cols = "100";
    window.addEventListener('resize', resizeCanvas);
    canvas.style.position = "relative";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    resizeCanvas();
  };

  let resizeCanvas = function() {
    canvas.width = Math.max(window.innerWidth * 0.5, 200);
    canvas.height = Math.max(window.innerHeight * 0.5, 200);
    clearCanvas();
    if (typeof f !== "undefined" && f !== null) {
      f();
    }
  };


  let clearCanvas = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  let keyboardEvent = function(event) {
    try {
      f = Function(editor.value);
      clearCanvas();
      console.log("function content");
      console.log(editor.value);
      f();
    }
    catch (error) {
      console.log("Parsing: " + error);
    }
  };

  let f = undefined;

  initialize();
  clearCanvas();
})();
