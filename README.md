# Chatbot with pre-programmed answers

MS2 GitHub project page [here](https://github.com/AwsSG/chatbot)

This is a one page chatbot website used to answer all customers questions that does not require human interaction (answers that can be automated). The design of this website was inspired by a business need in my work in customer care at a telecommunication company. The site offers multiple branches of pre-programmed answers depending on what the user selects, each selected choice leads to either an answer (end of the branch) or another question to narrow down the usre's (customer) issue. At any point, the user can press the "start over" button to reset to the initial choices and start again. The current branches of questions and answers are just a sample, which can be scaled (expanded) by editing the variables containing the questions and answers.

## User Experience (UX)

-   ### User stories

    -   #### customers

        1. As a customer, I want to go to one place where I can get answers about the issue I am facing
        2. As a customer, I want to be able to easily navigate throughout the site to find the answer I am looking for.
        3. As a customer, I want to be able to start again from the beginning to ask about something else or if I make a mistake in my query.
        4. As a customer, I might not know the exact name or term for the issue I am facing, So I expect to get some help to narrow down and pinpoint my issue.


-   ### Design
    -   #### Color Scheme
        -   The main color used in the site is purple, which is the same as the main color in the robot image that was used in the site. This color was used as the general theme in the site.
        -   Other colors used in the site were: Darker level of purple as the background color for the reset button, a level of gray for the user speech bubble when selected.

    -   #### Typography
        -   The Montserrat font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Montserrat is a clean font used frequently in programming, so it is both attractive and appropriate. A secondary font was used in main heading of the page, which was the Roboto Condensed. Another font that is clear and attractive for and it looks good when combined with uppercase letters.
    -   #### Imagery
        -   The only image used in the site was the Robot image in two sizes, just so that the user would have a face-like representation of who is answering the questions.

*   ### Wireframes

    -   The wireframe was created to show a simple user interaction, choosing through options to reach final answer.

    -   You can see the initial logic that was created and how user interaction was imagined below:
        - Initial look of the page [View](wireframe/initial.png)
        - User made first selection [View](wireframe/selection1.png)
        - User made second selection [View](wireframe/selection2.png)
        - User made third selection [View](wireframe/selection3.png)
        - User made fourth selection [View](wireframe/selection4.png)
        - User made last selection [View](wireframe/selection5.png)


## Features

-   Responsive on all device sizes.
-   On page load, contents slide down section by section to lead the user vision and help focus his/her attention.
-   When the user selects one of the available choices, the bot will keep presenting follow up questions and give choices untill it reaches the final answer.
-   At any time, the user can reset the page to show the starting choices and start again. This process can be repeated as many times as the user needs.

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5:](https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    - Latest Bootstrap was used to assist with the responsiveness and styling of the website.
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the Roboto and Exo 2 fonts into the style.css file which is used on all pages throughout the project.
3. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used in the footer in the social links throughout the website to add icons for aesthetic and UX purposes.
4. [JQuery:](https://jquery.com/)
    - JQuery library was used to make it much easier to use JavaScript, writing much less code to achieve much more.
5. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
6. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
7. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the wireframes during the design process.
8. [icons8:](https://icons8.com/)
    - icons8 library was used to get the Robot image.

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   W3C Markup Validator: No errors were found.
-   W3C CSS Validator: No errors were found.

### Testing User Stories from User Experience (UX) Section

-   #### Recruiters

    1. As a customer, I want to go to one place where I can get answers about the issue I am facing

        1. Upon entering the site, customers are presented with a clean content which are gradually revealed, making in easier to follow.
        2. The bot (Walli) will introduce itself first and give a simple brief intro.
        3. Customers will then see the available choices to choose the one that is closest to the issue they need and follow up intuitively to reach final answer.

    2. As a customer, I want to be able to easily navigate throughout the site to find the answer I am looking for.

        1. The whole site consists of one page.
        2. Simply selecting the closest choice to what the a customer need (by clicking it) will lead to the final available answer on the issue.

    3. As a customer, I want to be able to start again from the beginning to ask about something else or if I make a mistake in my query.

        1. At the buttom of the page just above the footer, there is a reset button called "Start over" to restore the initial choices and start again.
        2. This can happen as many times as needed, and at any point.

    4. As a customer, I might not know the exact name or term for the issue I am facing, So I expect to get some help to narrow down and pinpoint my issue.

        1. The final answers to issues are not presented right away, instead the customer will be asked several questions to narrow down the issue and provide the relevant answer.


### Further Testing

-   The Website was tested on browsers (Google Chrome, Internet Explorer, Microsoft Edge browsers) and it worked properly.
-   The website was viewed on a variety of devices (Desktop, Laptop, Big LG screen, iPhone 8 & iPhone5/SE) and the responsiveness was woring properly.
-   Testing was done to ensure that all available (clickable) choices for the user as well as the reset button are working properly and the social links are liked correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues. non were found.
-   Tested the site using Chrome Lighthouse (for both desktop and mobile) and below are the scores:
    -   Mobile
        -   Performance: 85
        -   Accessibility: 96
        -   Best Practices: 93
        -   SEO: 92
    -   Desktop
        -   Performance: 94
        -   Accessibility: 96
        -   Best Practices: 100
        -   SEO: 90

### Known Bugs

-   On very big screen sizes, the footer will be stuck right below the content instead of the bottom of the screen.
-   At random times, the automatic scrolldown does not have smooth transition. It jumps instead to the bottom of the page.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the steps in the CI video (GitHub Pages) as follows...

1. Log in to GitHub and locate the [GitHub chatbot Repository](https://awssg.github.io/chatbot/)
2. Go to the "Settings" tab and scroll down to GitHub Pages.
3. Under the "source" Select the "master branch" and click "save".
4. Scrol down on the next page to GitHub Pages and find the live link to the project.

## Credits

### Code

-   The robot image file came from [icons8:](https://icons8.com/)

-   [Bootstrap4](https://getbootstrap.com/docs/4.5/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System and to use some dafualt styling.

-   The automatic scroll down, as the chat contents are added, came from [www.geeksforgeeks.org](https://www.geeksforgeeks.org/how-to-scroll-automatically-to-the-bottom-of-the-page-using-jquery/#:~:text=To%20auto%20scroll%20a%20page,-1:%20Scroll%20without%20animation)

### Content

-   All content was written by the developer.

### Acknowledgements

-   Tutor support at Code Institute for their support.

-   CI slack comunity for quick answers to short questions

-   My Mentor for continuous helpful feedback.