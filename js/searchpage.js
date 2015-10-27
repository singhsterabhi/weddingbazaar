/**
 * Created by Abhishek on 11-10-2015.
 */

function loaddata(page1)
{
    sessionStorage.page=page1;
    window.location.href = "next.html";
}

function getdata() {
    var place=sessionStorage.place;
    var categ= sessionStorage.category;
    var page= sessionStorage.page;
    //initializing parse
    Parse.initialize("Y9xqZX58mQYpEmHUphM7hFpd84LA5ba8mhJvnqNE", "iyjnAfqbh3U3MnYptBJV3KjvE93e8mdXCFbcBvQK");
    var wed = Parse.Object.extend(categ);
    var query = new Parse.Query(wed);
    query.equalTo("place", place);
    query.skip(20*(page-1));
    query.limit(20);
    query.find({
        success: function(results) {
            var name1;
            var vendor;
            var phno;
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                name1=object.get('bandname');
                vendor=object.get('provider');
                phno=object.get('mobno');

                if(phno=="undefined"){
                    phno=object.get("phno");
                }
                console.log(phno);
                var $abc=$("#clone").clone().attr("id","clone"+i);
                $abc.find(".pname").html(name1);
                $abc.find(".vname").html(vendor);
                $abc.find("#ph").html(phno);
                $("tbody").append($abc);
            }

        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}