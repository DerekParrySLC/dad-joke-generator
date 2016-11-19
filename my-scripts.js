$(document).ready(function() {
  // Function to retrieve joke
  $("#getJoke").on("click", function() {
    $.getJSON("https://www.reddit.com/r/dadjokes.json", function(json) {
      var html = "";
      var randChoice = Math.floor(Math.random() * json["data"]["children"].length);
      
      //Create html element to house text and set-up line
      html += "<div class = 'aJoke'>";
      html += "<p>" + json["data"]["children"][randChoice]["data"]["title"];

      //Grammar check
      if (html.substring(html.length - 3) == "...") {
        html += "</p>"
      } else if (html.substring(html.length - 1) == "." 
                 || html.substring(html.length - 1) == " " 
                 || html.substring(html.length - 1) == "!" 
                 || html.substring(html.length - 1) == "?") {
        html += " </p>";
      } else {
        html += '. </p>';
      } 

      // Add punchline to html
      html += "</p>" + json["data"]["children"][randChoice]["data"]["selftext"] + "</p>";
      html = html.replace(/(?:\r\n|\r|\n)/g, '<br />');
      
      // Button HTML code created and updated for new URL linking to Reddit joke
      var redditURLhtml = "<a href='" + json["data"]["children"][randChoice]["data"]["url"] + "' target='_blank' >";
      redditURLhtml += "<img class='img-round' id = 'snoo' height = '35' width = '35' src ='https://dl.dropboxusercontent.com/u/24797896/freecodecamp/quote-generator/CduSn7x.png'></a>";
      
      // dadAlias contains a title to bestow upon the user
      var dadAlias = [
              // "Sugar Daddy", 
              "father-in-training", 
              // "father", 
              "Internet stranger", 
              "grandfather", 
              // "witty adolescent",  
              // "witty adult", 
              // "papi", 
              "reddit user",
              "agony inducer", 
              "man who is the inspiration for Jeffrey 'The Dude' Lebowski", 
              // "woman with wit",
              "grandfather who just discovered the Internet", 
              // "Father who secretly worships Harambe", 
              "karma seeker", 
              // "snappy retorter",
              "man who has ears of corn", 
              "parent made of 95 percent corn", 
              "father whose bodily water composition has been replaced by cheese", 
              "cheesy person full of gouda jokes"]
      var randDadAlias = dadAlias[Math.floor(Math.random() * dadAlias.length)];
      
      // Credit line
      html += "<br /><h6> Agony brought to you by " + randDadAlias + " /u/" + json["data"]["children"][randChoice]["data"]["author"] + "</h6>";
      html += "</div>";
      
      // Send information to the message and redditbLinkButton classes
      $(".message").html(html)
      $(".redditLinkButton").html(redditURLhtml)
    });
  });
});