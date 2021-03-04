var data = [];

function addFeedback() {
    //Fill the required logic

    var x = document.getElementById("feedback").value;
    if (x) {
        data.push(x);
        document.getElementById("result").innerHTML = "<h2>Form Details</h2><br>Successfully Added Feedback Details!";
        document.getElementById("feedback").value = '';
    }
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

    if (dlen == 0) {
        document.getElementById("result").innerHTML = "";
        return;
    }
    while (data.length > 0) {
        data.pop();
    }

    document.getElementById("result").innerHTML = "<h2>Form Details</h2><br>" + text;
}