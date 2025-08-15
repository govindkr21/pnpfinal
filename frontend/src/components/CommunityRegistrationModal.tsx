import React, { useState } from "react";
import { apiPost } from "../lib/api";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CommunityRegistrationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "" // comma-separated
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const interestsArr = form.interests
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);

      await apiPost("/api/community/register", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        interests: interestsArr,
        source: "community_modal"
      });

      alert("Thanks for joining the community!");
      onClose();
    } catch (err: any) {
      alert(err.message || "Failed to register");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center p-4 z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Join Community</h2>
          <button onClick={onClose} className="text-gray-600">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full border rounded p-2" name="name" placeholder="Full Name" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="email" placeholder="Email" type="email" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="phone" placeholder="Phone" onChange={onChange} required />
          <input className="w-full border rounded p-2" name="interests" placeholder="Interests (comma separated)" onChange={onChange} />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Submitting..." : "Join Community"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityRegistrationModal;
