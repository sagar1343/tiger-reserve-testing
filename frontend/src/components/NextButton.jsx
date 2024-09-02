import moment from "moment-timezone";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.webp";
import { useBookingContext } from "@/context/BookingContext";
import { useNavigate } from "react-router-dom";
import { calculateTimeLeft } from "@/lib/utils";

function loadRazorpayScript() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay script"));
    document.body.appendChild(script);
  });
}

const NextButton = ({
  formData,
  currentStep,
  setCurrentStep,
  validated,
  handleValidation,
  open,
  setOpen,
}) => {
  const navigate = useNavigate();
  const { setBookingId, setTimerStartAt, setSuccessData, setPaymentDone } =
    useBookingContext();

  const safariId = JSON.parse(sessionStorage.getItem("safariId"));
  const adultCount = JSON.parse(sessionStorage.getItem("adultCount"));
  const childCount = JSON.parse(sessionStorage.getItem("childCount"));
  const adultPerSeat = JSON.parse(sessionStorage.getItem("adultPerSeat"));
  const childPerSeat = JSON.parse(sessionStorage.getItem("childPerSeat"));

  const handleNext = () => {
    if (currentStep === 1) {
      validated && setOpen(true);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    handleNext();
  }, [validated]);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePayment = async () => {
    if (!window.Razorpay) {
      console.error("Razorpay script is not loaded.");
      return;
    }

    try {
      const response = await fetch(
        "http://3.111.234.190/api/rpay/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: adultPerSeat * adultCount + childPerSeat * childCount,
            currency: "INR",
          }),
        }
      );
      const data = await response.json();

      if (!data.id) {
        throw new Error("Order ID not received from server.");
      }

      const resKey = await fetch("http://3.111.234.190/api/getkey");
      const { key } = await resKey.json();
      const options = {
        key: key,
        amount: adultPerSeat * adultCount + childPerSeat * childCount,
        currency: "INR",
        name: "Pilibhit Tiger Reserve",
        description: "Payment for Safari Reservation",
        image: logo,
        order_id: data.id,
        retry: {
          enabled: false,
        },
        timeout: calculateTimeLeft(7 * 60),
        handler: function (response) {
          fetch("http://3.111.234.190/api/rpay/verify-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              userData: { ...formData },
              // paymentMethod: response.method,
              paymentDate: moment()
                .tz("Asia/Kolkata")
                .format("YYYY-MM-DD HH:mm:ss"),
              bookingId: JSON.parse(sessionStorage.getItem("bookingId")),
              safariId: safariId,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                setPaymentDone(true);
                setSuccessData(data.successData);
                sessionStorage.clear();
                setBookingId(null);
                setTimerStartAt(null);
                navigate("/success");
              }
            })
            .catch((error) => {
              // Do we need to release seats here
              console.error(error.message);
            });
        },
        prefill: {
          name: formData.firstName,
          contact: formData.phone,
          email: formData.email,
        },
        theme: {
          color: "#005df0",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    loadRazorpayScript()
      .then(() => {
        console.log("Razorpay script loaded");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div onClick={handleValidation}>
      <Button
        variant="contained"
        size="large"
        style={{
          width: "30%",
          height: "50px",
          color: "white",
          backgroundColor: "black",
        }}
        onClick={handleNext}
        disabled={currentStep === 3}
      >
        {currentStep === 3 ? "Download Ticket" : "Next"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        className="p-5"
        sx={{
          textAlign: "center",
          // width: '450px', // Set the width
          height: "2000px",
          margin: "auto", // Center the dialog
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "4px",
            paddingBottom: "4px",
            color: "black",
          }}
          className="text-l font-bold"
        >
          {"Ready to Go?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              textAlign: "center",
              color: "black",
              paddingTop: "0px",
              fontSize: "12px",
            }}
          >
            Just a quick double-check! Make sure all your details are spot-on
            before we hit the payment button.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }} className="mb-5">
          <Button
            onClick={handleClose}
            sx={{
              color: "black",
              border: "1px solid black",
              textTransform: "none",
              width: "35%",
            }}
          >
            Back
          </Button>
          <Button
            onClick={handlePayment}
            sx={{
              "&:hover": {
                backgroundColor: "black",
              },
              color: "white",
              backgroundColor: "black",
              border: "1px solid black",
              textTransform: "none",
              width: "35%",
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default NextButton;
