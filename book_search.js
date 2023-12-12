/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    const matches = []

    for (const book of scannedTextObj) { // each book provided
        for (const content of book["Content"]) { // each scanned content available for each book
            // case-sensitive comparison
            if (content["Text"].includes(searchTerm)) {
                // we have a match
                matches.push(
                    {
                        "ISBN": book["ISBN"],
                        "Page": content["Page"],
                        "Line": content["Line"]
                    }
                )
            }
        }
    }

    return {
        "SearchTerm": searchTerm,
        "Results": matches
    };
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


const twentyLeaguesNegativeOutput = {
    "SearchTerm": "come",
    "Results": []
}
/** Test with a search term that is not present in any content. */
const negativeTestResult = findSearchTermInBooks("come", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesNegativeOutput) === JSON.stringify(negativeTestResult)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesNegativeOutput);
    console.log("Received:", negativeTestResult);
}


const twentyLeaguesPositiveOutput = {
    "SearchTerm": "momentum",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}
/** Test with a search term that is present in the content. */
const positiveTestResult = findSearchTermInBooks("momentum", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesPositiveOutput) === JSON.stringify(positiveTestResult)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesPositiveOutput);
    console.log("Received:", negativeTestResult);
}


const twentyLeaguesMultipleMatchesOutput = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/**
 * Test with a search term that appears multiple times in the same content piece.
 * Ensure all occurrences are captured in the results.
 */
const multipleMatchesResult = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesMultipleMatchesOutput) === JSON.stringify(multipleMatchesResult)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesMultipleMatchesOutput);
    console.log("Received:", multipleMatchesResult);
}


const twentyLeaguesCaseSensitiveOutput = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}
/**
 * Test with a search term that is case-sensitive.
 * Ensure the correct results are returned, considering the case.
 */
const caseSensitiveResult = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesCaseSensitiveOutput) === JSON.stringify(caseSensitiveResult)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesCaseSensitiveOutput);
    console.log("Received:", caseSensitiveResult);
}


const twentyLeaguesPunctuationOutput = {
    "SearchTerm": "Canadian's",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
/** Test with a search term that includes punctuation. */
const punctuationResult = findSearchTermInBooks("Canadian's", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesPunctuationOutput) === JSON.stringify(punctuationResult)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", twentyLeaguesPunctuationOutput);
    console.log("Received:", punctuationResult);
}
