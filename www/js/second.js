$(function () {

    if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount = 0;

    var link2 = crossroads.addRoute('', function () {

        window.location.search;
        urlParam = new URLSearchParams(query);
        var id = urlParam.get('#masterC');

        var employeeNumber = $("#employeeNumber").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var officeCode = $("#officeCode").val();
        var extension = $("#extension").val();
        var email = $("#email").val();
        var jobTitle = $("#jobTitle").val();
        var reportsTo = $("#reportsTo").val();

        var datalist = "employeeNumber" + employeeNumber + "firstName" + firstName +
            "lastName" + lastName + "officeCode" + officeCode + "extension" + extension +
            "email" + email + "jobTitle" + jobTitle + "reportsTo" + reportsTo

        $.ajax({
            type: "post",
            url: "https://kerbau.odaje.biz/getstaff.php",
            data: datalist,
            cache: false,
            success: function (myData) {
                //instructions to execute when the ajax call is succeeds 
                var myData = JSON.parse(mydata);
                if (myData.status === 1) {
                    htmlText = htmlText +
                        "<tr><td>" +
                        myData.employeeNumber +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.firstName +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.lastName +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.officeCode +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.extension +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.email +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.jobTitle +
                        "</td><tr>";
                        "<tr><td>" +
                        myData.reportsTo +
                        "</td><tr>";
                } else {
                    alert("No data is found");
                }
            },
            error: function () {
                console.log("ajax error!");
                alert("Please contact admin!");
            }
        });

    });

    function parseHash(newHash, oldHash) {
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();

})