export default function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          
          {/* ===== Left Logo ===== */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white" />
            <span className="text-lg font-medium">ubernatural</span>
          </div>

          {/* ===== Navigation ===== */}
          <div>
            <p className="text-sm text-white/50 mb-4">Ubernatural</p>
            <ul className="space-y-2 text-sm">
              <li className="hover:opacity-70 transition">Home</li>
              <li className="hover:opacity-70 transition">About</li>
              <li className="hover:opacity-70 transition">How it Works</li>
              <li className="hover:opacity-70 transition">Projects</li>
              <li className="hover:opacity-70 transition">Framer</li>
              <li className="hover:opacity-70 transition">FAQ</li>
            </ul>
          </div>

          {/* ===== Social ===== */}
          <div>
            <p className="text-sm text-white/50 mb-4">Social</p>
            <ul className="space-y-2 text-sm">
              <li className="hover:opacity-70 transition">Dribbble</li>
              <li className="hover:opacity-70 transition">Instagram</li>
              <li className="hover:opacity-70 transition">Whats App</li>
            </ul>
          </div>

          {/* ===== Right Info ===== */}
          <div className="text-sm text-white/70 md:text-right">
            <p className="font-medium text-white">Ubernatural</p>
            <p>Website in one Day</p>
            <p className="mt-2 text-white/40">
              ©2025 All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
