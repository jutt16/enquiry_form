const enquiryModel = require("../../models/enquiry.model");

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  let enquiry = new enquiryModel({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  enquiry
    .save()
    .then(() => {
      console.log("Enquiry saved to database");
      return res.status(200).json({
        status: "success",
        message: "Enquiry saved successfully",
        // data: req.body
      });
    })
    .catch((err) => {
      console.log("Error saving enquiry to database:", err);
      return res.status(500).json({
        status: "error",
        message: "Error saving enquiry",
        error: err,
      });
    });
};

let enquiryDelete = async (req, res) => {
  let enquiryId = req.params.id;
  let enquiry = await enquiryModel.deleteOne({ _id: enquiryId });
  if (!enquiry) {
    return res.status(404).json({
      status: "error",
      message: "Enquiry not found",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Enquiry deleted successfully",
  });
};

let enquiryUpdate = async (req, res) => {
  let enquiryId = req.params.id;
  let enquiry = await enquiryModel.findById(enquiryId);
  if (!enquiry) {
    return res.status(404).json({
      status: "error",
      message: "Enquiry not found",
    });
  }
  enquiry.name = req.body.name || enquiry.name;
  enquiry.email = req.body.email || enquiry.email;
  enquiry.phone = req.body.phone || enquiry.phone;
  enquiry.message = req.body.message || enquiry.message;
  let enquiryUpdate = await enquiry.save();
  if (!enquiryUpdate) {
    return res.status(500).json({
      status: "error",
      message: "Error updating enquiry",
    });
  }
  res.status(200).json({
    status: "success",
    message: "Enquiry updated successfully",
    data: enquiry,
  });
};

let enquiryList = async(req, res) => {
    let enquiryList = await enquiryModel.find();
    res.status(200).json({
        status: 'success',
        message: 'Enquiry list fetched successfully',
        data: enquiryList
    });
};

module.exports = { enquiryInsert, enquiryDelete, enquiryUpdate, enquiryList };
