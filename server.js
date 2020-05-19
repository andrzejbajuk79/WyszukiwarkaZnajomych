const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

const app = express();

// Connect Database
connectDB();

dotenv.config();
//connect to DB
// // 'mongodb+srv://rhino11:rhino11@cluster0-xsha6.mongodb.net/test?retryWrites=true&w=majority',
// mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () =>
//  console.log('Połaczono z bazą danych')
// );

// Init Middleware
app.use(express.json({extended: false}));

//App setup
app.use(morgan('combined'));
// app.use(cors());

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
 // Set static folder
 app.use(express.static('client/build'));

 app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
 );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
