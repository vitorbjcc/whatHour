"use strict"

console.log("JavaScript susccefully loaded.");

const output = document.getElementById("output");

var date = new Date();

var hour = date.getHours();

var minute = date.getMinutes();

output.style.color = "#fff";

output.innerHTML = `Agora são exatamente <strong>${hour}:${minute}</strong>`;

function update_hour()
{
    //window.alert("Debug");

    date = new Date();

    hour = date.getHours();

    minute = date.getMinutes();

    output.innerHTML = `Agora são exatamente <strong>${hour}:${minute}</strong>`;

    if (parseFloat(hour) < 12 && parseFloat(hour) > 0)
    {
        document.body.style.backgroundColor = "#fff654";
    }
    else if (parseFloat(hour) >= 12 && parseFloat(hour) < 18)
    {
        document.body.style.backgroundColor = "#ffbb54";
    }
    else
    {
        document.body.style.backgroundColor = "#6d7985";
    };
};

setInterval(update_hour, 1000);