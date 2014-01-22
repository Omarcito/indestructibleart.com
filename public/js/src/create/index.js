var screenHeight = screen.height;
var screenWidth = screen.width;

var renderWindow = window.open(
  '/create/preview.html', 
  'ia-post-preview',
  'height=' + screenHeight + ',width=' + screenWidth * 0.5 +
  'toolbar=yes,directories=yes,status=yes,menubar=yes,' +
  'scrollbars=yes,resizable=yes,top=0,left=0'
);

var editorWindow = window.open(
  '/create/editor.html', 
  'ia-post-editor', 
  'height=' + screenHeight + ',width=' + screenWidth * 0.5 +
  'toolbar=yes,directories=yes,status=yes,menubar=yes,' +
  'scrollbars=yes,resizable=yes,top=0,left=0'
);

editorWindow.moveTo(screenWidth * 0.51, 0);

window.name = "creator";
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
  console.log(event);
  if (event.origin !== 'http://localhost:8080') {
    return;
  }

  if (event.data.msgType == 'render-output') {
    renderWindow.postMessage(event.data, 'http://localhost:8080');
  }
}
