const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require("mongoose")
const cors = require('cors')
const app = express();


// aloww coress-origin requerst
app.use(cors())
// connect to mongoose
mongoose.connect('mongodb+srv://mohaned:Mohaned210210@cluster0-f7uzy.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once("open",()=>{
    console.log('connected to database !!!!')
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`now listeniing on port ${PORT}`)
})

// server.listen().then(({ url }) => console.log(`server listen at ${url}`));
