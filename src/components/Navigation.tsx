import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/officialkujapanesecafe/", icon: Instagram, label: "Instagram" },
    { href: "https://www.facebook.com/Japanstudiercafe", icon: Facebook, label: "Facebook" },
  ];

  return (
    <nav className="bg-wood-50 border-b border-wood-200 py-4 px-6 mb-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-wood-900">日本語カフェ</span>
          <span className="text-lg text-wood-600">Japanese Café</span>
        </Link>
        <div className="flex items-center space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-wood-800 hover:text-sakura-600 transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;