window.onload = function () {
    console.log('App started')
}

function apirequest(cmd, opt) {
    // Standard Request to the Backend
    var url;
    if (opt == '') {
        url = '/api/' + cmd;
    } else {
        url = '/api/' + cmd + '/' + opt;
    }
    fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
    })
}

function readLCD() {
    fetch('/api/readlcd')
        .then(function (response) {
            parseLCD(response.json())
        })
}

function parseLCD(json) {
    // Parse json Response and write to html element
    var lcdfirst = document.getElementById("lcdfirst")
    var lcdsecond = document.getElementById("lcdsecond")
    lcdfirst.innerHTML = json.first
    lcdsecond.innerHTML = json.second
}