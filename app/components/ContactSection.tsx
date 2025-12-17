
export default function ContactSection() {
  return (
    <section className="min-h-screen px-6 md:px-16 py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h1 className="text-4xl md:text-6xl font-medium">
            Let us know what you want,
            so we can deliver magic!
          </h1>
        </div>

        {/* ===== RIGHT FORM ===== */}
        <form className="w-full max-w-xl space-y-6">
          
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-black/20 px-5 py-2 outline-none focus:border-[#87CEEB]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="jane@wantdesign.com"
              className="w-full rounded-lg border border-black/20 px-5 py-2 outline-none focus:border-[#87CEEB]"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm mb-2">Company Website</label>
            <input
              type="text"
              placeholder="Your Link"
              className="w-full rounded-lg border border-black/20 px-5 py-2 outline-none focus:border-[#87CEEB]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">
              WA / Telegram Phone Number
            </label>
            <input
              type="text"
              placeholder="+1 234 567 89 10"
              className="w-full rounded-lg border border-black/20 px-5 py-2 outline-none focus:border-[#87CEEB]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Your request</label>
            <textarea
              placeholder="I want this done fast..."
              rows={4}
              className="w-full rounded-2xl border border-black/20 px-5 py-2 outline-none focus:border-[#87CEEB] resize-none"
            />
          </div>

          {/* ===== SUBMIT BUTTON ===== */}
          <button
            type="submit"
            className="w-full rounded-full bg-black text-white py-2 font-medium hover:opacity-90 transition"
          >
            Submit request
          </button>
        </form>
      </div>
    </section>
  );
}
