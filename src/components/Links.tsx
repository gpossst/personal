import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Links() {
  return (
    <div className="p-4 px-8 md:p-0 md:fixed bottom-4 right-4 flex flex-row gap-2 text-gray-500 ">
      <a href="https://github.com/gpossst">
        <FaGithub className="w-6 h-6 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/garrett-post/">
        <FaLinkedin className="w-6 h-6 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300" />
      </a>
      <a href="https://x.com/imgarrettpost">
        <FaXTwitter className="w-6 h-6 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-300" />
      </a>
    </div>
  );
}
