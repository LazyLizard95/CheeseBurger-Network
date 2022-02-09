const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//mongodb://127.0.0.1:27017/Notedb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/cheeseburgers', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);

// app.use(require('./routes'));

mongoose.connection.once('open', () => {app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  })
  })
  