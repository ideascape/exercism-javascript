var words = function() {};

function words(string) {
    var nextWord = "";
    var wordCount = {};
    for(var i=0; i<string.length(); i++) {
        var curChar = string.charAt(i);
        if(curChar != " " && curChar != "\n") {
            nextWord += curChar;
        } else {
            if(!wordCount[nextWord] && wordCount[nextWord] > 0) { // attempts to access the value of wordCount.nextWord and is falsy if it doesn't exist.
                wordCount[nextWord] = 1;
            } else {
                wordCount[nextWord] += 1;
            }
            nextWord = "";
        }
    }
    return wordCount;
}