import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-base-200"
    >
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-4">Contact</h1>
        <p className="text-lg mb-4 opacity-70 text-center">Let's Connect.</p>
        <p className="text-lg mb-12 opacity-70 text-center">
          Connect with me through any of these platforms.
        </p>

        {/* Contact Info Cards - Inline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="card bg-base-100 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <Mail className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:jaimenicolastolentino@gmail.com"
                className="opacity-70 hover:text-primary transition-colors text-sm break-all"
              >
                jaimenicolastolentino@gmail.com
              </a>
            </div>
          </div>

          <div className="card bg-base-100 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <Linkedin className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/jntolentino1201"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:text-primary transition-colors"
              >
                in/jntolentino1201
              </a>
            </div>
          </div>

          <div className="card bg-base-100 hover:shadow-xl transition-shadow">
            <div className="card-body items-center text-center">
              <MapPin className="text-primary mb-2" size={32} />
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="opacity-70">Iloilo City, Philippines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
