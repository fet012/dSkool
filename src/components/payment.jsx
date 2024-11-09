import { useState, useEffect } from "react";

const Payment = ({ studentId }) => {
  const [studentData, setStudentData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/students/${studentId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setStudentData(data);
      } catch (error) {
        setErrorMessage("Error fetching student data.");
      }
    };
    fetchStudentData();
  }, [studentId]);

  const handlePayment = async () => {
    try {
      const response = { success: true }; // Simulated response
      if (response.success) {
        setPaymentStatus("Payment successful!");
      } else {
        setPaymentStatus("Payment failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error processing payment.");
    }
  };

  return (
    <div>
      {studentData ? (
        <div>
          <h2>Pay Fees for {studentData.name}</h2>
          <button onClick={handlePayment} className="btn btn-primary">Pay Now</button>
          {paymentStatus && <p>{paymentStatus}</p>}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default Payment;