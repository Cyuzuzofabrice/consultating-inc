export default function WhatsAppButton() {

  const phone = "250786675051"

  const message =
    "Hello House of Mandi 👋 I would like to place an order."

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition"
    >
      WhatsApp Order
    </a>
  )
}