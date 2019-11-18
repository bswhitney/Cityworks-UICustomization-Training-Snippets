$(function () {
    // Select the problem state text box.
    var element = $("#ctl00_Main_txtProbState");
    // Check to see if the element's value is null.
    if (element.val() === "") {
        // If the element's value is null, replace the null value with "AZ".
        element.val("AZ");
    }
});