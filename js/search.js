///**
// * Created by Abhishek on 10-10-2015.
// */
//
//var script = document.createElement('script');
//script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);
//
//


function subm() {
    //Reading values from the form
    var categ = $("#cat").find('option:selected').val().toString();
    var place = $("#place").val().toString();

    Parse.initialize("Y9xqZX58mQYpEmHUphM7hFpd84LA5ba8mhJvnqNE", "iyjnAfqbh3U3MnYptBJV3KjvE93e8mdXCFbcBvQK");
    var wed = Parse.Object.extend(categ);
    var query = new Parse.Query(wed);
    query.equalTo("address", place);
    query.find({
        success: function(results) {
            sessionStorage.place = place;
            sessionStorage.category = categ;
            window.location.href = "next.html"
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}