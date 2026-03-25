export function GoogleMap({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-lg border border-border ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3820050!3d28.6295310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce553e2ef4a5b%3A0xb9c8e0a5e7b8c8d0!2sCapstone%20IT%20Trends%20Pvt.%20Ltd.%2C%20Near%20First%20floor%2C%20AAROGYA%20NIKETAN%20TRUST%2C%20main%20road%2C%20Chhajarsi%20Colony%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "300px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Capstone IT Trends Office Location - Sector 63, Noida"
      />
    </div>
  );
}
