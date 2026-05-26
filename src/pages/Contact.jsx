import { useState } from "react"

export default function Contact() {

  const whatsappNumber = "250786675051" // change to your real number

  const [form, setForm] = useState({
    name: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const sendWhatsApp = () => {
    const text = `Hello House of Mandi,
Name: ${form.name}
Message: ${form.message}`

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">

        <h1 className="text-2xl font-bold text-center mb-4">
          Contact Us
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-3"
          rows="4"
        />

        {/* Button */}
        <button
          onClick={sendWhatsApp}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-bold"
        >
          Send via WhatsApp
        </button>

        {/* Info */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          We reply fast on WhatsApp 📱
        </p>

      </div>
    </div>
  )
}