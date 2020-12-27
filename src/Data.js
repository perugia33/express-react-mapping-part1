const express = require ('express');
const app = express();
var cors = require('cors');


app.use(cors());
app.get('/', (req,res) => {
    var obj = [{
        userId:33,
        id:3,
        title: "Pride and Prejudice",
        completed:true,
    },
    {

        userId:35,
        id:7,
        title: "Sense and Sensibility",
        completed:true,
    },

    {

        userId:37,
        id:8,
        title: "Emma",
        completed:true,
    },



    ]
    res.send(obj)

});




app.listen(3004, () =>{

    console.log("Listening");
})