const Footer = () => {
  return <footer className="bg-contartara-black text-contartara-cream py-12">
      <div className="container mx-auto px-4">
        {/* Google Maps */}
        <div className="mb-12 h-[300px] rounded-lg overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.147675011499!2d-73.11726482529685!3d7.117772316573688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f0eee0e15b5%3A0x9f9f9d9d9f9f9f9f!2sCra.%2027%20%2354-10%2C%20Bucaramanga%2C%20Santander!5e0!3m2!1sen!2sco!4v1620000000000!5m2!1sen!2sco" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-xl mb-2">DIRECCIÓN</h3>
            <p>Cra 27 #54-10</p>
            <p>Bucaramanga, Colombia</p>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-2">CONTACTO</h3>
            <a href="tel:+573214458734" className="block hover:text-contartara-yellow transition-colors">
              +57 321 445 8734
            </a>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-2">SÍGUENOS</h3>
            <a href="https://instagram.com/contartara" target="_blank" rel="noopener noreferrer" className="hover:text-contartara-yellow transition-colors">
              @contartara
            </a>
          </div>
          
          <div>
            <h3 className="font-display text-xl mb-2">HORARIOS</h3>
            <p>Lunes a Domingo</p>
            <p>12:00 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;