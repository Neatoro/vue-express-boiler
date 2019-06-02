const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config();

const app = express();

const apiRouter = express.Router();

apiRouter.get('/hello', (request, response) => {
  response.json({
    message: 'hello world'
  });
});

app.use('/api/v1.0/', apiRouter);

app.use('/', express.static(path.resolve(__dirname, 'public')));

const port = process.env.BACKEND_PORT;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
