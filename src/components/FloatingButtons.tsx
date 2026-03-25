import { Phone } from "lucide-react";

export function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/919151555290"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-float-btn"
        aria-label="Contact us on WhatsApp"
      >
        <img src="/images/2062095-application-chat-communication-logo-whatsapp-icon.png" alt="WhatsApp" className="w-14 h-14 rounded-full" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </a>

      <a
        href="tel:+919151555290"
        className="group relative w-14 h-14 bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-float-delayed"
        aria-label="Call us"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call Now
        </span>
        <span className="absolute inset-0 rounded-full bg-[hsl(var(--primary))] animate-ping opacity-20" />
      </a>
    </div>
  );
}

export default FloatingActionButtons;
