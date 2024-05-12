// step1 : stripe login krke public and secret key nikalna hai..publickey frontend me use hoga and secret key backend me

//step2 :ye code frontend me daalna hai..checkout button ke onclick event pe ye call hoga..


const handlePayment = async () => {
    //idhar auth is checking for either user is signed in or not
    if (auth) {
      const stripePromise = await loadStripe(
        "pk_test_51P8fRZSBZcJvq0CZzAKx9gpheGAATvOCMOCaXxOp3s1flZl6l2GljzAdqkI8nsv9k78f4FmeyTl0Qmx16OvJWqBP00Ch77Z7Mz"
      );
      //ye api endpoint hum backend me banayenge
      const res = await fetch(`https://ecommerce-server-1-2twm.onrender.com/api/v1/order/payment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
        //cart me apne cart items hai with name ,pic,quantity and all..
      });
      if (res.statusCode === 500) return;
      console.log(res)
      const data = await res.json();
      //console.log(data)
      toast("Redirect to payment Gateway...!");
      console.log(data)
      stripePromise.redirectToCheckout({ sessionId: data });
    } else {
      toast("You have not Login!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

//   step3: Backend code

// this is our api controller func, isko /order/payment se route kiya hai

//easy integration done
const stripe = new Stripe(
    "sk_test_51P8fRZSBZcJvq0CZevJM9r9OA0Z76OhQhCvVoNCVYADRlENYSoO74tFEdMuG3qsYPQgeceyxJDhrhKrEYSeRJ0O400hbC5CQBa"
  );
  const Stripepayment = async (req, res) => {
      try {
        const params = {
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          billing_address_collection: "auto",
          line_items: req.body.map((item) => {
            return {
              price_data: {
                currency: "inr",
                product_data: {
                  name: item.name,
                  images: [item.images],
                },
                unit_amount: item.price*100,
              },
              quantity: item.quantity,
            };
          }),
          success_url: `http://localhost:5173/success`,
          cancel_url: `http://localhost:5173/cancel`,
        };
        const session = await stripe.checkout.sessions.create(params);
        console.log('Session ID:', session.id);
        res.status(200).json(session.id);
      } catch (error) {
        console.error('Error creating session:', error);
        res.status(error.statusCode || 500).json(error.message);
      }
    };
    