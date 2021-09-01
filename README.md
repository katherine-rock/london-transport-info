# London Traffic Report #

## Purpose ##

The purpose of London Traffic Report is to provide users living in or visiting London with an easy and fast way to identify and avoid traffic problems.

The information used by this website has been sourced from the Transport for London Unified API. Please visit <https://api.tfl.gov.uk/> for more information.

### Instructions to install ###

1. Double click on the zip file named "london-transport-info"

2. Open a terminal window and navigate into the folder you just opened: "london-transport-info"

3. Type `yarn install` and press enter. This may take a few minutes.

4. Type `yarn start` and press enter. 

This should open automatically in your browser window. If it does not, please open your browser and type the following in for the address:

`http://localhost:3000/`

### Instructions for use ###

To see a list of all current traffic disruptions in London, click the button labelled 'Show all traffic indicents'.

To see a list of traffic disruptions for a particular road, enter the road number in the search field and click 'Search by road number'.

To see a list of traffic disruptions for many roads, enter each road number in the search field, separated by a comma, and click 'Search by road number'.

### Tech Stack ###

The app has been developed in React which uses JavaScript. JavaScript allows asynchronous code, which ensures the initial page is rendered while waiting to receive the traffic data from the API in response to the user's input.

### Testing ###

Unit testing has been performed using Jest. Testing of the API requests has been performed using REST Client and visual inspection of React developer tools in Chrome.

To run the Jest tests, in a terminal window, type `yarn test`.

To run the Cypress tests, start the program by running the `yarn start` command in the terminal. In a second terminal window, run `yarn run cypress open`.

### Dependencies ###

Refer to the package.json file for the complete list of dependencies.

### Design ###

The header icon and favicon were purchased from <www.vectorstock.com> and have been used in accordance with their standard licensing agreement that permits use of their images for web publication.
The website has been styled to account for differences in screen sizes across mobiles, tablets and desktops.
Tailwind CSS has been used to style the components. Please visit <https://tailwindcss.com/> for more information.
