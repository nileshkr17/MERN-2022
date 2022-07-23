# Learning MERN Stack

## Notes

- **M** = MongoDB (We'll use Mongoose to make it easier for Node.js to work with MongoDB, and we'll use MongoDB Atlas = MongoDB database, but cloud).
- **E** = Express (makes it easier to work with Node.js. We'll use `cors` middleware to access other servers outside our server).
- **R** = React (for the frontend. We'll use `bootstrap` for styling, `react-router-dom` for React routes, `react-datepicker` for React Datepicker component, and `axios` to connect to the backend).
- **N** = Node.js (for the server. We'll use `dotenv` to load environment variables from an .env file into `process.env`, and `nodemon` to make the app auto-restart when you edit/save files).
`package`:-package lock .json ensure that exactly version of your project and the nested dependencies and 
/*
Exercise Tracker App:

- Exercises collection
- Users collection
- every Exercise has one User


To just get it running after you `git clone`, set up [MongoDB Atlas](https://github.com/hchiam/learning-mern-stack#mongodb-atlas), and then follow these CLI steps:
*/
```bash
cd /directory name
npm install
cd backend
npm install
touch .env

# inside /mern-2022: (separate CLI tab)
cd ..
cd mern-exercise-tracker
npm start

# inside /backend folder: (separate CLI tab)
cd mern-2022
nodemon server.js
# or: nodemon -x 'npm run lint; node server.js'
```

Day 11:
![Netflix-react]![image](https://user-images.githubusercontent.com/77370375/180591164-1cffc11b-92c1-4631-adbe-c6f4ed758f22.png)




