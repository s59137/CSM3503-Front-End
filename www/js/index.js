$(function(){

    if (!localStorage.datacount || localStorage.datacount == null)
        localStorage.datacount = 0;

    var link1 = crossroads.addRoute('', function () {

        secondpage="<a href='secondpage.html?id="+employeeNumber+"'>"+email+"</a>";

        var employeeNumber = $("#employeeNumber").val();
        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var officeCode = $("#officeCode").val();
        var extension = $("#extension").val();
        var email = $("#email").val();
        var jobTitle = $("#jobTitle").val();
        var reportsTo = $("#reportsTo").val();

        mydata = {
            employeeNumber:"",
            firstname: "",
            lastname: "",
            officeCode: "",
            extension: "",
            email: "",
            jobTitle:"",
            reportsTo:""
        };
        mydata.employeeNum = employeeNumber;
        mydata.first = firstName;
        mydata.last = lastName;
        mydata.officecode = officeCode;
        mydata.ext = extension;
        mydata.Email = email;
        mydata.job = jobTitle;
        mydata.report = reportsTo;


        var i = localStorage.datacount
        i++;
        localStorage.setItem("data" + i, JSON.stringify(mydata));
        localStorage.datacount = i;

        $('#maintable tbody').html(htmlText);

        $("#masterC").show();
        
        $.ajax({ 
            type: "get", 
            url: "https://kerbau.odaje.biz/getstaff.php", 
            data: mydata, 
            cache: false, 
            success: function(mydata){ 
             //instructions to execute when the ajax call is succeeds 
             var myData = JSON.parse(mydata);
             dataLength = localStorage.datacount;
             htmlText = "";
             if (dataLength > 0) {
                 for (var i = 1; i <= dataLength; i++) {
                     myData = localStorage.getItem("data" + i);
                     myData = JSON.parse(mydata);
                     htmlText = htmlText + "<tr><td>"+secondpage+"</td></tr>"
                 }
             } else {
                 htmlText = htmlText + "<tr><td> no data found </td></tr>";
             }
             
            },
            error: function(){ 
            console.log("ajax error!");
            alert("Please contact admin!");
            } 
            }); 
        
    });

    function parseHash(newHash,oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
})