const Contact = require("../models/contact");
const mongoose = require("mongoose");

//Create api
function create(req, res, next) {
  let name = req.body.name;
  let mail = red.body.mail;
  let mobile = req.body.mobile;
  let contact = new Contact({
    name,
    mail,
    mobile,
  });
  contact.save().then((data) => {
    res.send(data);
  });
}

//Read api
function view(req, res, next) {
  Contact.find({}).then((data) => {
    res.send(data);
  });
}

//Update api
function update(req, res, next) {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Updating the Contact records." });
    }
    res.send({ success: "Updated successfull" });
  });
}

//Delete api
function remove(req, res, next) {
  Contact.findByIdAndDelete(req.params.id, (err, contact) => {
    if (err) {
      return res
        .status(500)
        .send({ error: "Problem with Deleting the contact records." });
    }
    res.send({ success: "Contact deleted successfully" });
  });
}

module.exports.create = create;
module.exports.view = view;
module.exports.update = update;
module.exports.remove = remove;
