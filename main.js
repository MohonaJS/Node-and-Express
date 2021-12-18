const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/customer", require("./route/customer"))

const port = process.env.PORT || 3050;
app.listen(port, () => {   
    console.log(`server is successfully running at ${port}`);
});

