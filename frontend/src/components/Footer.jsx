import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-6 px-8 bg-black text-white border-t border-gray-800">
      <div className="relative flex items-center justify-center">
        
        <p className="text-sm text-center">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/krish2006-jain"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Krish Jain
          </a>
          {" • "}
          © 2026 All Rights Reserved
        </p>

        <div className="absolute right-0 flex items-center gap-4">
          <a
            href="https://github.com/krish2006-jain/Netflix-clone-using-mernstack"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/krish-jain-6687bb329/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;