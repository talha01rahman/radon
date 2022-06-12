const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://talha01rahman:Abc123@cluster0.vflfgln.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
  );

const assingmentMW = function (req, res, next) {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + " "
                  + (currentdate.getMonth()+1) + " "
                  + currentdate.getFullYear() + " "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds();
    
  let ip = req.ip
  let url = req.orignalUrl
 // console.log('${datetime} ${ip} ${url}')
  console.log("Date&Time => "+ datetime+ " IP => "+ip+ " Url => "+url)
  next()
}
app.use(assingmentMW)




app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
