
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactFormRoutes = require('./routes/contactFormRoutes');
const scheduleCabFormRoutes = require('./routes/scheduleCabFormRoutes');
const userLoginRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/error');

// To handle uncaught promise rejections and log them with winston, manually throw exception.
process.on('unhandledRejection', (ex) => { // here, ex = unhandles rejection exception
  throw ex;
});

mongoose.connect("mongodb+srv://root:yxdVW0CudWVi43BT@cluster0.sbw0ajg.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => {
    console.log('Connected to the DB :)');
  })
  .catch((err) => {
    console.log('Error connecting to db:', err);
  });
// 9AfndudvQEfo4yhT
// mongodb+srv://Garima:9AfndudvQEfo4yhT@advancecabbooking-6lrnk.mongodb.net/AdvanceCabBookingDB?retryWrites=true&w=majority
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
})

app.use('/api/ContactForms', contactFormRoutes);
app.use('/api/scheduleCabForm', scheduleCabFormRoutes);
app.use('/api/user', userLoginRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('dist/client'));

  // Important to put this below all the other routes.
  // Because the production build will be created in 'client/build', will have index.html
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'dist', 'client', 'index.html')));
}

app.use(errorMiddleware);

module.exports = app;