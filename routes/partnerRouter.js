const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all partner information to you");
  })
  .post((req, res) => {
    res.end(
      `Will add partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

partnerRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.end(`Will send details of partner ${req.params.partnerId} to you`);
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /partners/${req.params.partnerId}`
    );
  })
  .put((req, res) => {
    res.write(`Updating partner ${req.params.partnerId}\n`);
    res.end(
      `Will update partner ${req.params.partnerId} with name: ${req.body.name} and description: ${req.body.description}`
    );
  })
  .delete((req, res) => {
    res.end(`Deleting partner ${req.params.partnerId}`);
  });

module.exports = partnerRouter;
