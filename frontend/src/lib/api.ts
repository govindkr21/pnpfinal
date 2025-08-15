const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-production-domain.com" // replace with your production URL
    : "http://localhost:7400";

// Generic POST request
export const apiPost = async <T = any>(
  endpoint: string,
  data: any
): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "API request failed");
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err.message || "Network error");
  }
};

// Generic GET request
export const apiGet = async <T = any>(endpoint: string): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "API request failed");
    }

    return res.json();
  } catch (err: any) {
    throw new Error(err.message || "Network error");
  }
};

// Optional: API helper for Razorpay verification (type-safe)
export type RazorpayVerifyPayload = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

export const verifyRazorpayPayment = async (payload: RazorpayVerifyPayload) => {
  return apiPost("/api/seminar/verify-payment", payload);
};
