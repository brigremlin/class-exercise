# Send It App

In this activity we will add a Firebase Backend, Firebase Email/Password Authentication, and Auto Login/ Logout.

## Instructions

* Run npm install in the project dicrectory

* Run `ng serve -o` to start the server and open the webpage in your browser.

  * This example contains two main features:

    1. `/explore`: A page which displays public posts from users. 

    2. `/profile`: A page that displays the current user profile.

***You do not need to modify the explore section***

### Step 1:
  * Create a Firebase project and add a realtime database.
  * Create a service to handle storing and retrieving current users posts.
  
### Step 2:
  * Add an auth component that you can use to sign up and sign in. 
    - Don't forget to add a route and link in your header for this component.
  * In your submit method, log the value of the form.

### Step 3: 
  * In Firebase, change your database rules to only allow authorized users to read and write.
  * Add email/password authentication to your firebase project.
  * Store your api key in an environmental variable to prevent unauthorized access to your api.
  * Add login and signup functionality, you should see users that signup in the firebase authentication console.
 

### Step 4: 
  * Create a User model.
  * Create a subject to hold the current state of the user.
  * Hide routes based on authentication status.

### Step 5: 
  * Add a token to outgoing requests with the interceptor.

### Step 6:
* Add logout functionality.



### Bonus

* Once you complete all of the basic functionality for this activity, try adding auto-login and auto-logout.

### Hints

* Don't hesitate to refer back to the notes from last class.

* Utilize documentation if you're unsure about how anything works.

* Ask for help if you get stuck!
