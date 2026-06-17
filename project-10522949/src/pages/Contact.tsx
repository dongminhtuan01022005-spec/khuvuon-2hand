export default function Contact() {
  return (
    <div className="p-10">
      <input placeholder="Your Name" className="border p-2 block mb-3" />

      <input placeholder="Email" className="border p-2 block mb-3" />

      <input placeholder="Phone Number" className="border p-2 block mb-3" />

      <textarea placeholder="Message" className="border p-2 block mb-3" />

      <button className="bg-green-600 text-white px-4 py-2">
        Send Message
      </button>
    </div>
  );
}
