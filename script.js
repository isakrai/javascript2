function lataaLeffat() {
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            parseLeffat(this);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function parseLeffat (xml) {
    var xmlData = xml.responseXML;
    var table = "<table>";
    var x = xmlData.getElementsByTagName("Title");
    for (i=0; i < 10; i++){
        table += "<tr><td>" + x[i].childNodes[0].nodeValue + "</tr></td>"
    }
    table += "</table>";
    document.getElementById("elokuvat").innerHTML = table;
}

function lataaKestot() {
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            parseKestot(this);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function parseKestot(xml) {
    var xmlData = xml.responseXML;
    var table = "<table>";
    var x = xmlData.getElementsByTagName("LengthInMinutes");
    for (i=0; i < 10; i++){
        table += "<tr><td>" + aikaTunteina(x[i].childNodes[0].nodeValue) + "</tr></td>"
    }
    console.log(x);
    table += "</table>";
    document.getElementById("kesto").innerHTML = table;
}
function aikaTunteina(duration){
    var minutes = duration % 60;
    var hours =(duration-minutes) / 60;
    return hours + "h " + minutes + "min";
}

function lataaGenret() {
    var url = "https://www.finnkino.fi/xml/Schedule/";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
            parseGenret(this);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function  parseGenret(xml) {
    var xmlData = xml.responseXML;
    var table = "<table>";
    var x = xmlData.getElementsByTagName("Genres");
    for (i=0; i < 10; i++){
        table += "<tr><td>" + x[i].childNodes[0].nodeValue + "</tr></td>"
    }
    table += "</table>";
    document.getElementById("genre").innerHTML = table;
}