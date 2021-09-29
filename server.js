const express = require('express')
const app = express()
const path = require('path')
const date = new Date();
const day=date.getDay()
const hour=date.getHours()



app.use((req, res, next) => {
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
      next();
    } else {
       
          res.sendFile(path.join(__dirname, 'public', 'closed.html'))
  
    }
  });

  app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000)