const express = require('express');
const tasksRouter =  require('./routes/tasks');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Osumare Task API!');
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);

});


