import React, { useState } from "react";
import { apiPost } from "../lib/api";

declare global {
  interface Window {
    Razorpay: any;
  }
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SeminarRegistrationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const amountPaise = 49900; // ₹499.00

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1) Create order + provisional registration
      const { order } = await apiPost<{ order: any }>("/api/seminar/create-order", {
        ...form,
        amount: amountPaise,
        currency: "INR",
        meta: { source: "seminar_modal" }
      });

      // 2) Open Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_xxxxxxxxxxxxx",
        amount: order.amount,
        currency: order.currency,
        name: "Seminar Registration",
        description: "Registration fee",
        order_id: order.id,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone
        },
        theme: { color: "#111827" },
        handler: async function (response: any) {
          try {
            // 3) Verify payment on backend
            const verifyRes = await apiPost("/api/seminar/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
            alert("Payment successful! You're registered.");
            onClose();
          } catch (err: any) {
            alert("Verification failed: " + err.message);
          }
        },
        modal: {
          ondismiss: function () {
            // Optional: you could notify backend about cancellation
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: any) {
      alert(err.message || "Failed to initiate payment");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Register Now</h2>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full border rounded p-2" name="name" placeholder="Full Name" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="email" placeholder="Email" type="email" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="phone" placeholder="Phone" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="occupation" placeholder="Occupation" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="address" placeholder="Address" onChange={onChange} required />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Processing..." : "Pay ₹499 & Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SeminarRegistrationModal;
