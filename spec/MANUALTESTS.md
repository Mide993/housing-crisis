# Manual Tests
## Introduction 
Manual testing is used in this project to test back and front end features of “Belfast Housing Crisis” datavisualisation application.

## Features to be tested 
### The following features were tested manually:
`Data processing and chart rendering`, `EmailJS`, `JQuery animations`, `hyperlinks`, `simple-text-rotator`, `browser compatibility`

### Approach:
The testing methodology involved breaking down each test into the following headings: 
* `TEST CASE ID`
    * unique id for each test 
* `TEST SCENARIO`
    * what will be tested
* `TEST CASE`
    * what is expected to happen   
* `TEST DATA/STEPS`
    * what data will need to be entered or steps taken to test the feature  
* `EXPECTED RESULT`
    * what is the expected result 
* `ACTUAL RESULT`
    * what is the actual result 
* `PASS/FAIL`
    * did the test pass or fail

Below are examples of tests used on front and back end functionality. The testing was assisted by the small dataset used which enabled manual searches of the .csv database to verify data (e.g. area totals)

## Test Area NAME
### Data processing and chart rendering

|`TEST CASE ID` |`TEST SCENARIO`|`TEST CASE`|`TEST DATA/STEPS`|`EXPECTED RESULT`|`ACTUAL RESULT`|`PASS/FAIL`|
|---|---|---|---|---|---|---|
|1|Verify creation of charts|There will be 4 **dc Charts** rendered on page load  |**Enter site url**<br>Check chart<br>**Reload page**<br>Check chart<br>**Refresh page**<br>Check chart| Chart is rendered (x4)|Chart is rendered (x4)|**PASS**|
|2|Verify correct object count from **Housing_Stress_gtr_30** passed to charts|There will be 4 rowChart bars and pieChart segments|**Reload page**<br>Check chart |4 x segments/bars per chart|4 x segments/bars per chart|**PASS**|
|3.i|Verify correct values from **Housing_Stress_gtr_30** passed to charts|The Chart area totals will match .csv file values|Hover over charts (slices and bars) to reveal tooltips. Check totals against housingData.csv|Tooltip totals match .csv values|Tooltip totals equal: 2944(W), 1484(N), 1255(S), 1250(E)|**PASS**|
|3.ii, iii, iv |*Above repeated with **Allocations, New_Housing_2010_15, Critical_Need_gtr_150***|
|4|Verify **dc.selectMenu** renders with correct values |There will be 4 values: North, South, East, West |Click on selectMenu to reveal values|Dropdown menu displays N, S, E, W|Dropdown menu displaying N, S, E, W|**PASS**|


### EmailJS [(sendEmail.js)](/js/sendEmail.js)
|`TEST CASE ID` |`TEST SCENARIO`|`TEST CASE`|`TEST DATA/STEPS`|`EXPECTED RESULT`|`ACTUAL RESULT`|`PASS/FAIL`|
|---|---|---|---|---|---|---|
|5|Verify that invalid EmailJS does not send from application to site inbox|There will be an alert triggered indicating failure|**Change EmailJS code in index html from 'user' to 'users'**; input: `name`, `email`, `comments` into email form; **check site inbox for new message**|Alert reading *"Your email failed to send. Please try again. If the problem persists, contact info@pprproject.org."*, No message in site inbox|Alert reading *"Your email failed to send. Please try again. If the problem persists, contact info@pprproject.org."*, No message in site inbox|**PASS**|
|6|Verify that EmailJS sends from application to site inbox|There will be an alert triggered indicating success|**input: `name`, `email`, `comments` into email form**; check site inbox for new message|Alert reading *“Thank you for contacting the campaign. Hopefully we can work together!”*, Message in site inbox|Alert reading *“Thank you for contacting the campaign. Hopefully we can work together!”*, Message in site inbox|**PASS**|

### JQuery [(custom.js)](/js/custom.js)
> columns condensed for JQuery feature tests 

|`TEST CASE ID` |`TEST SCENARIO`| `TEST CASE` |`TEST DATA/STEPS` `EXPECTED RESULT` | `PASS/FAIL`|
|---|---|---|---|---|
|7|Verify that hover produces fade and highlight effect|**Hovering** over **[a]** will produce **fade** effect on **[b]** and **highlight** effect on **[c]**:<br>|**[a = hover]:[b = fade]:[c = highlight]**<br><br>[Allocations rowChart div] : [Key icon] : [“current planned housing is capable of meeting that need (supply)”]<br><br>**[New Build Housing rowChart div] : [Home icon] : [“current planned housing is capable of meeting that need (supply)”]**<br><br>[Household Stress pieChart div] : [Users icon] : [“how many people need housing (demand)"]<br><br>**[Critical Need pieChart div] : [Exclamation icon] : [“how many people need housing (demand)”]**]|**PASS**|
|8|Verify fade effect|**Hovering** over [a] will produce **fade** effect on same element|**[a = hover ... fade]**<br><br>[PPR logo]<br><br>**[Equality Can't Wait logo]**|**PASS**|
|9|Verify slide effect on page load |**[a]** will **slide down** on **page load** or refresh|**[a = slide down]**<br><br>[left-hand column]|**PASS**|
|10|Verify that modal is triggered |**[a]** will **appear** when **[b]** button is pushed and closed when **[c]** button is pushed|**[a = pushed] : [b = open] : [c = pushed]**<br><br>["Share it!"] : [Contact Modal] : ["Close"]|**PASS**|

### Other
**Hyperlinks**, **js-text-rotator** and **navigation bar page refresh** were tested by simply observing the text-loop (**simple-text-rotator**) and clicking on each of the elements containing links (**navBar, PPR logo, ECW logo, social media logos(x3))**)

### Broswer compatibility
The above features were tested in each of the following browsers:
  - Google Chrome
  - Opera
  - Microsoft Edge
  - Mozilla Firefox
 
> when carrying out testing with Firefox, it was necessary to set the pieChart widths to be identical, otherwise they would not left-align in their divs.

