# Ionic-Mobile-Application

Ionic Country, Weather and Currency Conversion Application
@author John Sullivan G00425758
@ionic 7.1.1

This is an application that is run on the local host of the machine, and when the server is open will initially return a list of the countries that is pulled from restcountries.com. The user can click into each country, doing so will redirect the user to the country details page. At this stage local ionic storage is created to hold some data of the country selected in order to append this to URLs located in the code, in order to interact with APIs.

In the country details page the flag, capital and other information will be pulled from the same website as above. Upon selecting the country, the code responsible for pulling the capitals weather information will be initialised. It takes the latitude and longitude of the capital city and generates the URL, with the API key. The forecast is returned then. This all happens when the page is loaded. 

Below the other information is a currency converter tool. This takes an amount of whatever the user wants to convert. The button is disabled until an amount has been entered. Upon clicking the button, the amount needed to be converted is appended to the URL, with the API key and the currency symbol to be converted i.e. USD. The returned conversion is then displayed below the tool. 

This code is from the src folder after creating an Ionic application using the CLI commands as outlined in Ionic documentation, therefore the current file omits the node module folder, due to the large size of the files. 
