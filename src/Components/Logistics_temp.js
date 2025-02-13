import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  memo,
  useCallback,
} from "react";
import shippingImage from "../Assets/shipping.png"; // Replace with your shipping image file
import planeImage from "../Assets/plane.png";       // Replace with your plane image file
import cardImage from "../Assets/smallCard.png";//Hi!


// -----------------------------
// ForwardRef Memoized Input Component
// -----------------------------
const TextInput = memo(
  forwardRef(({ id, label, name, value, onChange, placeholder }, ref) => (
    <div style={{ marginBottom: "1rem" }}>
      {label && (
        <label
          htmlFor={id}
          style={{
            fontWeight: "bold",
            marginBottom: "0.25rem",
            display: "block",
          }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        style={{
          padding: "0.75rem",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
    </div>
  ))
);

const Logistics = () => {
  // -----------------------------
  // State Variables
  // -----------------------------
  // Steps: 1 = Choose Method, 2 = Select Schedule, 3 = Order Summary & Checkout, 4 = Order Confirmation
  const [step, setStep] = useState(1);
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({ name: "" });
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Schedule Data
  // -----------------------------
  const shippingSchedules = [
    { key: "express", label: "Express", description: "1-2 days", price: 1500 },
    { key: "standard", label: "Standard", description: "3-5 days", price: 800 },
    { key: "economy", label: "Economy", description: "6-8 days", price: 600 },
  ];

  const planeSchedules = [
    { key: "express", label: "Express", description: "6-8 hours", price: 2800 },
    { key: "standard", label: "Standard", description: "12 hours", price: 2300 },
    { key: "economy", label: "Economy", description: "18 hours", price: 2100 },
  ];

  // -----------------------------
  // Style Objects
  // -----------------------------
  const containerStyle = {
    backgroundColor: "#f0f0f0",
    fontFamily: "sans-serif",
    boxSizing: "border-box",
    padding: "2rem",
    minHeight: "100vh",
  };

  const centerContainerStyle = {
    ...containerStyle,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
  };

  const headerStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
  };

  const shippingOptionsContainer = {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  };

  const optionBoxStyle = {
    width: "35%",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  };

  const optionBoxHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
  };

  const optionTitleStyle = {
    fontSize: "2rem",
    fontWeight: "bold",
    margin: "1rem 0 0.5rem 0",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalContentStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "2rem",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    textAlign: "center",
  };

  const scheduleContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  };

  const scheduleBoxStyle = {
    backgroundColor: "#fff",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const scheduleBoxHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  };

  const scheduleTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const scheduleDescriptionStyle = {
    fontSize: "1rem",
    marginBottom: "0.5rem",
  };

  const schedulePriceStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "green",
  };

  const checkoutSectionStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    backgroundColor: "#fff",
    padding: "1.5rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const inputStyle = {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    width: "100%",
    boxSizing: "border-box",
  };

  const checkoutButtonStyle = {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "green",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  };

  const modalButtonStyle = {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "green",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const secondaryButtonStyle = {
    ...modalButtonStyle,
    backgroundColor: "#ccc",
    color: "#000",
  };

  const progressBarContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  };

  const progressStepStyle = {
    display: "flex",
    alignItems: "center",
    margin: "0 5px",
  };

  const progressCircleStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const progressLabelStyle = {
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };

  const progressConnectorStyle = {
    width: "50px",
    height: "4px",
    margin: "0 10px",
  };

  // -----------------------------
  // Progress Bar Component
  // -----------------------------
  const progressSteps = ["Method", "Schedule", "Review", "Confirmation"];
  const ProgressBar = () => (
    <div style={progressBarContainerStyle}>
      {progressSteps.map((label, index) => {
        const currentStep = index + 1;
        return (
          <div key={label} style={progressStepStyle}>
            <div
              style={{
                ...progressCircleStyle,
                backgroundColor: step >= currentStep ? "green" : "#ccc",
              }}
            >
              {currentStep}
            </div>
            <div style={progressLabelStyle}>{label}</div>
            {index < progressSteps.length - 1 && (
              <div
                style={{
                  ...progressConnectorStyle,
                  backgroundColor: step > currentStep ? "green" : "#ccc",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );

  // -----------------------------
  // Step 1: Shipping Options Component
  // -----------------------------
  const ShippingOptions = () => {
    const [hovered, setHovered] = useState(null);
    return (
      <>
        <h1 style={headerStyle}>Choose Your Shipping Method</h1>
        <div style={shippingOptionsContainer}>
          <div
            style={{
              ...optionBoxStyle,
              ...(hovered === "shipping" ? optionBoxHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered("shipping")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setSelectedCarrier("shipping");
              setSelectedSchedule(null);
              setStep(2);
            }}
            aria-label="Select Shipping"
          >
            <img
              src={shippingImage}
              alt="Shipping"
              style={{ width: "80%", borderRadius: "8px", marginBottom: "1rem" }}
            />
            <div style={optionTitleStyle}>Shipping</div>
          </div>
          <div
            style={{
              ...optionBoxStyle,
              ...(hovered === "plane" ? optionBoxHoverStyle : {}),
            }}
            onMouseEnter={() => setHovered("plane")}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setSelectedCarrier("plane");
              setSelectedSchedule(null);
              setStep(2);
            }}
            aria-label="Select Plane"
          >
            <img
              src={planeImage}
              alt="Plane"
              style={{ width: "80%", borderRadius: "8px", marginBottom: "1rem" }}
            />
            <div style={optionTitleStyle}>Plane</div>
          </div>
        </div>
      </>
    );
  };

  // -----------------------------
  // Step 2: Schedule Selection Modal
  // -----------------------------
  const ScheduleModal = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const schedules =
      selectedCarrier === "shipping" ? shippingSchedules : planeSchedules;
    return (
      <div style={modalOverlayStyle}>
        <div style={modalContentStyle}>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
            Select {selectedCarrier === "shipping" ? "Shipping" : "Air"} Schedule
          </h2>
          <div style={scheduleContainerStyle}>
            {schedules.map((option, index) => (
              <div
                key={option.key}
                style={{
                  ...scheduleBoxStyle,
                  ...(hoveredIndex === index ? scheduleBoxHoverStyle : {}),
                  border:
                    selectedSchedule === option.key ? "2px solid green" : "none",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedSchedule(option.key)}
                aria-label={`Select ${option.label} (${option.description})`}
              >
                <div style={scheduleTitleStyle}>{option.label}</div>
                <div style={scheduleDescriptionStyle}>{option.description}</div>
                <div style={schedulePriceStyle}>${option.price}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "space-between" }}>
            <button style={secondaryButtonStyle} onClick={() => setStep(1)}>
              Back
            </button>
            <button
              style={{
                ...modalButtonStyle,
                backgroundColor: selectedSchedule ? "green" : "#ccc",
                cursor: selectedSchedule ? "pointer" : "not-allowed",
              }}
              onClick={() => selectedSchedule && setStep(3)}
              disabled={!selectedSchedule}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };

  // -----------------------------
  // Step 3: Order Summary & Checkout Component
  // -----------------------------
  const Checkout = () => {
    const scheduleArray =
      selectedCarrier === "shipping" ? shippingSchedules : planeSchedules;
    const scheduleOption = scheduleArray.find((s) => s.key === selectedSchedule);
    const scheduleCost = scheduleOption ? scheduleOption.price : 0;
    const calculatedTotal = scheduleCost;

    const handleCustomerChange = useCallback((e) => {
      setCustomerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }, []);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(4);
      }, 2000);
    };

    // Use a ref for the Name input
    const nameInputRef = useRef(null);
    // Always focus the Name field on every render
    useEffect(() => {
      if (nameInputRef.current) {
        nameInputRef.current.focus();
      }
    });

    return (
      <div style={checkoutSectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Order Summary & Checkout
        </h2>
        <div style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", marginBottom: "1rem" }}>
          <h3 style={{ textAlign: "center" }}>Order Summary</h3>
          <p>
            <strong>Method:</strong>{" "}
            {selectedCarrier === "shipping" ? "Shipping" : "Plane"}
          </p>
          <p>
            <strong>Schedule:</strong>{" "}
            {scheduleOption ? scheduleOption.label : ""}
          </p>
          <p>
            <strong>Cost:</strong> ${scheduleCost}
          </p>
          <h3 style={{ textAlign: "center" }}>Final Total: ${calculatedTotal}</h3>
        </div>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextInput
            id="name"
            label="Name:"
            name="name"
            value={customerInfo.name}
            onChange={handleCustomerChange}
            placeholder="Your Name"
            ref={nameInputRef}
          />
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            backgroundColor: "#fff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
          }}>
            <img 
  src={cardImage} 
  alt="Saved Card" 
  style={{ width: "40px", height: "auto", marginRight: "1rem" }}
/>

            <div>
              <div style={{ fontSize: "1rem", fontWeight: "bold" }}>Visa</div>
              <div style={{ fontSize: "0.9rem", color: "#555" }}>
                Ending in 8070 
              </div>
            </div>
            
          </div>
          <button type="submit" style={checkoutButtonStyle}>
            {loading ? "Processing Order..." : "Place Order"}
          </button>
        </form>
      </div>
    );
  };

  // -----------------------------
  // Step 4: Order Confirmation Component
  // -----------------------------
  const Confirmation = () => {
    const scheduleArray =
      selectedCarrier === "shipping" ? shippingSchedules : planeSchedules;
    const scheduleOption = scheduleArray.find((s) => s.key === selectedSchedule);
    const scheduleCost = scheduleOption ? scheduleOption.price : 0;
    const finalPrice = scheduleCost;

    let estimatedDelivery = "";
    if (selectedCarrier === "shipping") {
      if (selectedSchedule === "express") estimatedDelivery = "1-2 days";
      else if (selectedSchedule === "standard") estimatedDelivery = "3-5 days";
      else if (selectedSchedule === "economy") estimatedDelivery = "6-8 days";
    } else {
      if (selectedSchedule === "express") estimatedDelivery = "6-8 hours";
      else if (selectedSchedule === "standard") estimatedDelivery = "12 hours";
      else if (selectedSchedule === "economy") estimatedDelivery = "18 hours";
    }

    const handleNewOrder = () => {
      setSelectedCarrier(null);
      setSelectedSchedule(null);
      setCustomerInfo({ name: "" });
      setStep(1);
    };

    return (
      <div style={checkoutSectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Order Confirmed!</h2>
        <p style={{ textAlign: "center" }}>
          Thank you, {customerInfo.name}. Your order for{" "}
          {selectedCarrier === "shipping" ? "Shipping" : "Plane"} with{" "}
          {selectedSchedule.toUpperCase()} schedule has been placed.
        </p>
        <p style={{ textAlign: "center" }}>
          <strong>Estimated Delivery:</strong> {estimatedDelivery}
        </p>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>
          Total Charged: ${finalPrice}
        </p>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button style={modalButtonStyle} onClick={handleNewOrder}>
            New Order
          </button>
        </div>
      </div>
    );
  };

  // -----------------------------
  // Main Render
  // -----------------------------
  return (
    <div style={step === 1 ? centerContainerStyle : containerStyle}>
      <ProgressBar />
      {step === 1 && <ShippingOptions />}
      {step === 2 && <ScheduleModal />}
      {step === 3 &&
        (loading ? (
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Processing Order...
          </div>
        ) : (
          <Checkout />
        ))}
      {step === 4 && <Confirmation />}
    </div>
  );
};

export default Logistics;
