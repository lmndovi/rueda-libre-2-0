const express = require("express");
const app = express();

const stripe = require("stripe")(
  "sk_test_51MjSnfJBzGorYhtOD6oGpxdX7UtEsXxb0EelbOhndibkRYqyisaJXRXYzOv6rCBZ89ceOGWcqp0Wbq7QAgSJfEWW00817YvY0c"
);

app.post("/payment-sheet", async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: "2022-11-15" }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 8000,
    currency: "gbp",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey:
      "pk_test_51MjSnfJBzGorYhtOxdluSjGQ06ZGu4HXhyBVD4WA9MqkK2ZizF1gTGwDnIyIbyjmMI7LuIQEi7C9s0b8hSICPkJg00Q4sFjL3V",
  });
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));
