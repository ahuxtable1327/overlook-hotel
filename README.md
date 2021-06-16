# Overlook Hotel 

A solo project by [Ashton Huxtable](https://github.com/ahuxtable1327). Original project spec can be found [here](https://frontend.turing.edu/projects/overlook.html).

### Description
Welcome to OverlookHotel. Famed for it's views *and* it's history. As a user, you will be prompted to log in, and then be taken to your dashboard. The dashboard will allow you to book a room at the hotel by entering a date and room type(optional).You may only book one night at a time, but you may book as many nights in advance as you would like. On your user dashboard you will be able to see the amount you have spent here at the overlook, as well as all past and upcoming trips. 

#### Login View

![login](https://user-images.githubusercontent.com/78318468/122140936-8f5a0100-ce09-11eb-9e28-b3f1ca76b596.gif)

#### Dashboard View 

![userBookings](https://user-images.githubusercontent.com/78318468/122140996-abf63900-ce09-11eb-8acf-dc65e9f7bd4e.gif)

#### Book a Room

![bookRoom](https://user-images.githubusercontent.com/78318468/122141032-bca6af00-ce09-11eb-9cde-6402f663eb06.gif)

#### Mobile View/Responsive

<img src="https://user-images.githubusercontent.com/78318468/122141057-ca5c3480-ce09-11eb-8118-e629e9f4735d.gif" width="300" height="642"/>



### Setup
- `git clone` this repository
- `cd` into the repository on your local machine
- Run `npm install`
- Run `npm start`

A local API was used to retrieve data for this project. Below is the link to the API and instructions for using it. 
- `git clone` this [API repository](https://github.com/turingschool-examples/overlook-api)
- Run `npm install`
- Run `npm start`
- Double check that both are running, and enjoy!


### Technologies Used
- JavaScript
- Semantic HTML
- SCSS/Sass
- Mocha & Chai
- WebPack

### Libraries
- [DAY.JS](https://www.npmjs.com/package/dayjs) used for:
  - getting 'todays' date and setting it on the calendar
  - formatting the date   


### Future Additions
- Build out a more dynamic login page
- Allow user to book more than 1 night at a time
- Update CSS and general styling to present a more visually appealing product. 
- Add functionality for users to cancel bookings

### Wins & Challenges
#### Wins
This project was daunting to start to say the least. I would say my biggest win was successfully creating GET and POST requests and then creating a login that would fetch data for a single user based on the username and password input. 

#### Challenges
Getting all of the files to talk to each other and not override necessary code was a challenging piece of this project. It required a lot of thought and effort. It also meant that tracking down where a bug might be coming from could be time consuming if the errors provided did not hold enough information. 


### Contributors
[Claire Fields](https://github.com/clairefields15) - Reviewed two PRs and provided me with copious amounts of advice and resources. 
