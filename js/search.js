/**
 * Created by Abhishek on 10-10-2015.
 */

function subm() {
    //Reading values from the form
    var categ = $(".thumb").find('img').attr('alt');
    var place = $("#place").find('option:selected').val().toString();

    Parse.initialize("Y9xqZX58mQYpEmHUphM7hFpd84LA5ba8mhJvnqNE", "iyjnAfqbh3U3MnYptBJV3KjvE93e8mdXCFbcBvQK");
    var wed = Parse.Object.extend(categ);
    var query = new Parse.Query(wed);
    query.equalTo("address", place);
    query.find({
        success: function(results) {
            sessionStorage.place = place;
            sessionStorage.category = categ;
            sessionStorage.page=1;
            window.location.href = "next.html";
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}