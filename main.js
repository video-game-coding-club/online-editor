var canvas = document.getElementById("editor-canvas");
var editor = document.getElementById("editor-textarea");
var ctx = canvas.getContext("2d");

(function() {
  let initialize = function() {
    editor.oninput = keyboardEvent;
    window.addEventListener('resize', resizeCanvas);
    canvas.style.position = "relative";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    resizeCanvas();
  };

  let resizeCanvas = function() {
    canvas.width = Math.max(window.innerWidth * 0.5, 200);
    canvas.height = Math.max(window.innerHeight * 0.5, 200);
  };


  let clearCanvas = function() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  let keyboardEvent = function(event) {
    try {
      let f = Function(editor.value);
      clearCanvas();
      f();
    }
    catch (error) {
      console.log("Parsing: " + error);
    }
  };

  initialize();
  clearCanvas();
})();
