
# workout buddy

from net ninja's YT course
[MERN ](https://youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)
[auth ](https://youtube.com/playlist?list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT)

---

  
# Backend

## file structure

server.js --> userRoute --> userController --> userModel
	      --> workRoute --> reqAuth middleware
                        --> workController --> workModel

  
## Model

##### userModel.js
- make user schema
- add signup & login function to schema
- make model based on schema
- export model

##### workoutModel.js
- make workout schema
- make model based on schema
- export model

## Controller

##### userController.js
- create token
- make signup & login function
- get email, password from req.body
- userModel se usko signup/login karo
- export them

##### workoutController.js
- make getAll, getOne, create, update, delete function
- export them
  
## Middleware

##### reqAuth.js
- check authentication of user
- get authorization property from req.headers
- get token from authorization
- token se id find karo
- agar id hai toh thik else error

## Router

##### userRoutes.js
- send to login or signup route

##### workoutRoutes.js
- authenticate user
- send to workout controllers

## Server.js
- run middlewares
- send to routes
- connect to DB
  
---

# Frontend

### file structure
     
	   index.js--> app.js --> navbar --> useLogout
                          --> home --> workoutForm
                                   --> workoutDetails
                          --> signup
                          --> login
   

## App.js
- authorization ke hisab se alag alag routes me direct karo

## Components

### navbar
### workoutDetails
- display details of workout
- DELETE request send karo
	- update context

### workoutForm
- user logged in hona chahiye
- POST request send karo
	- update context

## Pages

### home
- GET request send karo
	- context update karo
- display the workouts

### login & signup
- use apropriate hooks

## Context

### authContext

### workoutContext



## Hooks

### useAuthContext & useWorkoutContext
- if being accessed in proper place, provide the context

### useLogin & useSignup
- send POST request
- add user to localStorage
- update context

### useLogout
- remove user from localStorage
- update context