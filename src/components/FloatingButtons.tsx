import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="https://wa.me/918448668060"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
    <a
      href="tel:+918448668060"
      className="w-12 h-12 rounded-full gradient-orange text-white flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
      aria-label="Call"
    >
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

export default FloatingButtons;
