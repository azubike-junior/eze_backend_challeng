# eze_backend_challeng

# Structure 
  if you notice, you will see i seperated my database from the other folders (utils, config, api). that's because i believe the database folder becomes larger as more tables and added to the app. it could add more complexity to the application infrastructure if it isnt indepedent from other folders. this will make more sense in a microservice application,
  
# Controller
  i had to seperate the controller from the routes. i know i was supposed to put them in the same function. express is an opinionated nodejs frame work. So i believe seperaing the routes from the controller helps when it comes to readabilty. it also helps the code to be DRY.
   
