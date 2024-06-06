const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const postsRouter = require('./routers/postRoutes.js');

// middleware json
app.use(express.json());

//middleware routes
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`);
})