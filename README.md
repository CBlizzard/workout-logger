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
    - export them

##### workoutController.js
- make getAll, getOne, create, update, delete function
    - export them


## Middleware

##### reqAuth.js
- check authentication of user


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
    app.js 

