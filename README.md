# Belfast's Housing Crisis by Area
A datavisualisation page demonstrating homelessness and public housing provision statistics across East, North, South and West Belfast.

## Overview

### What is this application for?
In the north of Ireland, new build public housing programmes are determined by assessing relative need in different areas. This included the numbers of people experiencing homelessness and housing need, the availability of current public housing and any forthcoming plans to build new housing.

Official statistics are a necessary component of this decision making process and are critical for the public to hold politicians and publc officials to account.

"Belfast's Housing Crisis by Area" is a response to the Northern Ireland Housing Executive's 2016 decision to cease periodic publications of key statistics relating to homelessness and public housing provision. "Belfast's Housing Crisis by Area" is an attempt to generate the crowd sourcing and sharing of statistics and information among community organisations and NGOs active on housing issues. 

### What does it do?
Users can view 5 separate datasets, disaggregated by area (north, south, east and west), by visiting "Belfast's Housing Crisis by Area":
* number of households in 'Housing Stress' (i.e. >30 points on the General Housing Waiting List) - 2015
* number of households in critical need of housing (i.e. >150 points on the General Housing Waiting List) - 2015
* number of housing units allocated to individuals/families - 2015
* number of new units of public housing built - 2010-15
* total amount of public money paid to private landlords due to the shortage of public housing

The datasets are visualised through interactive charts which can be filtered to compare statsitics between areas.

Users can send email messages from the site to pass on information or statistics to the Equality Can't Wait campaign.

### How does it work
The "Belfast's Housing Crisis by Area" data is stored in the **static/data/housingdata.csv** file. The **Javascript** libraries **dc.js** (including **crossfilter** to enable interaction) and **d3.js** are used to plot and render charts as instructed by the ```charts.js``` file or in response to the user's filter.

The programme is written in **Javascript** and the site is styled with a **Bootswatch** (**Bootstrap**) theme and **JQuery** code. The Bootstrap grid layout is used to make the application responsive across mobile, tablet and desktop devices. The site is designed using a **mobile-first** design and can be viewed [HERE](insert link following deployment).

Users can contact the Equality Can't Wait campaign by sending an email directly from the site using **EmailJS** service.

**AWS Cloud9** has been used to manage package dependencies for deployment of site on github pages. 


## Tech Used
javascript (email_js, text-rotation.js), jquery, html, sasscss
cs

### Code
- **HTML**, **CSS**, and **JavaScript (inc JQuery)**
    - Base languages used to create website
- [Jasmine](https://jasmine.github.io/) 
    - Javascript code was tested in the Jasmine framework test suite
- [d3.js](https://d3js.org/)
    - this Javascript library manipulates the DOM based on interactions with the datasets
- [dc.js](https://dc-js.github.io/dc.js/) and  [crossfilter](https://crossfilter.github.io/crossfilter/)
    - creates the charts and enables interaction/responsiveness between the charts based on user selection
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap 4.0.0** is used to render a responsive layout
- [Bootswatch](https://bootswatch.com/)
    - the **Bootswatch** skethcy theme was used for the elements on the site
- [JQuery](https://jquery.com)
    - **JQuery** adds animation styling to our site to enhance user experience. The JQuery plug-in **Marquee** was used to display the scrolling alerts
- [Sass](https://sass-lang.com/)
    - **Sass/scss** CSS extension is used to code and organise CSS stylesheets



## Testing 
jasmine
manual








## Tech Used

### Specific technology used on the application includes:

### Code
- **HTML**, **CSS**, **JavaScript (JQuery)** and **Python**
    - Base languages used to create website
- **unittest** 
    - A test suite was developed using unittest 
- [Flask](http://flask.pocoo.org/)
    - **Flask** is used to handle different view functions which guide the participant through the challenge, 
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap 3.3.7** is used to render a responsive layout, including navigation bar and display table
- [JQuery](https://jquery.com)
    - **JQuery** adds animation styling to our site to enhance user experience. The JQuery plug-in **Marquee** was used to display the scrolling alerts
- [Sass](https://sass-lang.com/)
    - **Sass/scss** CSS extension is used to code and organise CSS stylesheets


### Functionality
- [AWS S3](https://aws.amazon.com/s3/)
    - **AWS S3** cloud storage is used to store the static and media files for the application.

### Hosting
- [Heroku](https://www.heroku.com/)
    - The Cloud Application Platform **Heroku** hosts the MDA TimeBank Application.


## Testing
The MDA TimeBank App was first prototyped on the python shell (see file ```timeBankTeaser_proto.py```) to identify the core features and functionalities that would be required for the flow of the challenge.

Two main functions were identified - one to assess the guess range relative to the answer, and one to attribute scores based on that guess.

A Test Driven Development approach was used to develop this code using the folllowing steps:

1. Identify the functionality that needs to be built and write pseudocode
2. Write a test for this feature
3. Run a failing test
4. Edit and make it pass
5. Refactor code
6. Repeat each of these steps for every new feature with every test written up until that point passing

#### 1. Identify the functionality that needs to be built and write pseudocode
Here is an example of the pseudocode developed for the two main functions involved in calculating user score:

> Guess range relative to answer
Test: 
*if guess is 0 or less
*if guess and answer are equal
*if guess is within a 10+ range of answer
*if guess is within a 10- range of answer

> Score based on guess range relative to answer
Test:
*if guess is equal to 0 or less then score is 0
*if guess is equal to answer then score is 10
*if guess is 10 or more numbers greater than answer, score is 0
*if guess is 10 or more numbers fewer than answer, score is 0


### 2. Write a test for this feature
Each separate step in these functions was tested individually and added to only once all of the preceding tests were passing the latest test.

For example here is the first code developed for the guess_range() function:

> """
Guess range relative to answer
"""
def guess_range(guess, answer):
    if guess <= 0:
        return True

### 3. Run a failing test
The above code was then tested with a deliberately failing outcome:

> assert guess_range(3, 4) == True, "Guess is 0"

> $ python3 testing/testing.py
> Traceback (most recent call last):
  File "testing/testing.py", line 25, in <module>
    assert guess_range(3, 4) == True, "Guess is 0"
AssertionError: Guess is 0

### 4. Edit and make it pass
The test was then amended to produce a passing outcome:

> assert guess_range(0, 4) == True, "Guess is 0"

> $ python3 testing/testing.py
> All tests passed

The next feature was then added to the existing code:

> def guess_range(guess, answer):
    if guess <= 0:
        return True
    > <!--new line of code-->
    elif guess == answer:
        return True

and tested, first proudcing a failing outcome then edited to produce a pass (ensuring the preceding code also passed):

> assert guess_range(0, 4) == True, "Guess is 0"
assert guess_range(-5, 4) == True, "Guess is less than 0"
assert guess_range(15, 15) == True, "Guess is equal to answer"

### 5. Refactor code
### 6. Repeat previous steps
Steps 1-4 were repeated until the function had been completed and as the two functions were to be merged, the code was refactored when the individual functions had been tested separately. For example:

> """
Guess range relative to answer
"""
def guess_range(guess, answer):
    if guess <= 0:
        return True

and 

> score_test = []

> def allocate_points(guess, answer):
    # 0 points
    if guess <= 0:
        score_test.append(0)
        return int(sum(score_test))

was refactored to:

> score = []

> def calc_score(guess, answer):
    if guess <= 0:
        points = 0
    score.append(points)
    return int(sum(score))

and tested, with the scores accumulating as they would during the challenge:

> assert calc_score(0, 8) == 0, "Guess is 0, score is 0"
assert calc_score(-5, 8) == 0, "Guess is below 0, score is 0"
...
assert calc_score(8, 8) == 10, "Guess is equal to answer, score is 10"
assert calc_score(9, 18) == 15, "Guess is within 10- point range of answer, score is 5"
assert calc_score(22, 18) == 20, "Guess is within 10+ point range of answer, score is 5

The testing suite (with development code) is found in ```testing/testing.py``` 

## Contributing
This project is customisable by entering your own relevant surevy information into the ```data/challenge.json``` file and changing the background images in the static files.

### Getting the code up and running
1. Create an environment running python 2.7.6 as the default in your IDE
2. Clone this repository by running the ```git clone https://github.com/Deasun/snAPP.git``` command
3. pip install requirements

## Credits

## Media
All images used on the site are from [FREEIMAGES](https://www.freeimages.com)
and used under their CONTENT LICENSE AGREEMENT.

The youtube video is a product of [TimeRepublik](https://timerepublik.com/)

### Developer
Dessie Donnelly (email: des_donn@mailbox.org)

### Partner
Market Development Association C/O Market Community Centre Belfast BT1 3JD (tel: 028 90312272)
Contact: Fionntan Hargey (email: fionntanh@hotmail.com)











## Instructions for use
* download data (use wget from github)