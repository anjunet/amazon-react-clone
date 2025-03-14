// Import necessary libraries
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51PYC9FDyqG2OZZ2Obooa6b2BLINlGJm6hukNOGDEZeTUm8tMxL0YeDSHKRHFEts9sjMoqveMINYskKh0cG3Jswog00gQ8qjjEY"
);

// Initialize Express app
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Root API route
app.get("/", (req, res) => res.status(200).send("Hello, World!"));

// Create payment intent route
app.post("/payments/create", async (req, res) => {
  // Get the total from query parameters
  const total = req.query.total;

  console.log("Payment request received :", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, 
    currency: "usd", 
  });

  // Send back the client secret
  console.log("client secret", paymentIntent.client_secret);
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Expose the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);