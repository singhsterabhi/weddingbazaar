/**
 * Created by Abhishek on 11-10-2015.
 */


function getdata() {
    var place=sessionStorage.place;
    var categ= sessionStorage.category;

    //initializing parse
    Parse.initialize("Y9xqZX58mQYpEmHUphM7hFpd84LA5ba8mhJvnqNE", "iyjnAfqbh3U3MnYptBJV3KjvE93e8mdXCFbcBvQK");
    var wed = Parse.Object.extend(categ);
    var query = new Parse.Query(wed);
    query.equalTo("address", place);
    query.find({
        success: function(results) {
            var name1;
            var address;
            var budget;
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                name1=object.get('name');
                address=object.get('address');
                budget=object.get('cost');
                var table = document.getElementById("mytable");
                var row = table.insertRow(1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = name1;
                cell2.innerHTML = address;
                cell3.innerHTML = budget;
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}