const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
]

export default function GallerySection() {
  return (
    <section className="py-24 bg-white px-6">

      <h2 className="text-5xl font-bold text-center mb-14">
        Restaurant Gallery 
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="gallery"
            className="rounded-3xl h-80 w-full object-cover hover:scale-105 transition"
          />
        ))}

      </div>

    </section>
  )
}