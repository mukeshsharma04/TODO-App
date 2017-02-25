var express = require('express');

//Create our App
var app = express();
const PORT = process.env.PORT || 3000;

//Added this because of OpenWeatherAPI because that works only on http
// app.use((req, res, next) => {
//   if(req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect(`http://${req.hostname}${req.url}`);
//   }else {
//     next();
//   }
// });

app.use(express.static('public'));

app.listen(PORT,function () {
  console.log(`Express Server is up on PORT ${PORT}`);
});
