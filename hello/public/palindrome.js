let url = “query?animal=bat"
let xhr = new XMLHttpRequest();
xhr.open(method, url, true);
xhr.onload = function() {…};
xhr.onerror = function() {…};
xhr.send();

