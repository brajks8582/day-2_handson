var data = [];

function append_to_div(div_name, data) {
    document.getElementById(div_name).innerText += data;
}

function addFeedback() {
    //Fill the required logic

    var x = document.getElementById("feedback").value;
    data.push(x);
    append_to_div("result", "\n" + "Successfully Added Feedback Details!" + "\n");
    // document.getElementById("result").innerHTML = "<h2>Form Details</h2><br>Successfully Added Feedback Details";
}

function viewFeedback() {
    //Fill the required logic
    var text = "",
        dlen = data.length;
    var i = 0,
        j = i + 1;


    for (i = 0; i < dlen; i++) {
        text += "Feedback " + j + "<br>" + data[i] + "<br>";
        j++;
    }


    document.getElementById("result").innerHTML = "<h2>Form Details</h2><br>" + text;
    while (data.length > 0) {
        data.pop();
    }
}