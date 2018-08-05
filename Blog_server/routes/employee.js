const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const Employee = require("../models/employee");
/* GET users listing. */
router.get("/", function(req, res, next) {
  Employee.find()
    .then(response => {
      res.status(200).json({
        message: "Employee fetched data",
        employees: response
      });
    })
    .catch(error => {
      console.error(error);
    });
});

router.post("/", checkAuth, function(req, res, next) {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contact: req.body.contact,
    createdDate: req.body.createdDate
  });
  // Finally save employee into database
  employee.save().then(res => {
    res.status(201).json({
      message: "Created sucessfully",
      employeeId: res._id
    });
  });
});

router.put("/:id", function(req, res, next) {
  const employee = new Employee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    contact: req.body.contact
  });
  Employee.updateOne({ _id: req.params.id }, employee).then(() => {
    res.status(200).json({
      message: "updated sucessfully"
    });
  });
});

router.delete("/:id", function(req, res, next) {
  Employee.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({
      message: "Deleted sucessfully"
    });
  });
});

module.exports = router;
