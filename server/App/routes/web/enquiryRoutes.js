let express = require('express');
const { enquiryInsert, enquiryDelete, enquiryUpdate, enquiryList } = require('../../controllers/web/UserEnquiryController');

let enquiryRoutes = express.Router();

enquiryRoutes.post('/enquiry-insert', enquiryInsert);

enquiryRoutes.delete('/enquiry-delete/:id', enquiryDelete);

enquiryRoutes.put('/enquiry-update/:id', enquiryUpdate);

enquiryRoutes.get('/enquiry-list', enquiryList);

module.exports = enquiryRoutes;