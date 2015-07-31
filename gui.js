// ========= GUI FUN MINI LIBRARY =================

function setHTML(id, html) {
    var element = document.getElementById(id);
    element.innerHTML = html;
}

function addHTML(id, html) {
    var element = document.getElementById(id);
    element.innerHTML = element.innerHTML + html;
}

function setClickHandler(id, func) {
    var element = document.getElementById(id);
    element.onclick = func;
}

function getInput(id) {
    return document.getElementById(id).value;
}

// ================================================

