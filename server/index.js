let express = require('express');
let mongoose = require('mongoose');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
require('dotenv').config();

let app = express();

app.use(express.json());

app.use("/web/api/enquiry",enquiryRoutes);

//connct to mongodb
mongoose.connect(process.env.DBURL)
  .then(() => {
    console.log('MongoDB connected...');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));

