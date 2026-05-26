import { useState } from "react";

export default function ContactForm() {
  const whatsappNumber = "250786675051";

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const text = `Hello House of Mandi 👋
Name: ${form.name}
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Contact Us
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-3"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-lg mb-3"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        className="w-full p-3 border rounded-lg mb-3"
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 disabled:bg-gray-400"
      >
        {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </button>

      <p className="text-center text-gray-500 text-sm mt-3">
        We reply fast on WhatsApp 
      </p>
    </div>
  );
}