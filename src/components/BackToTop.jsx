import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional (icon)

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
      >
        <ArrowUp size={20} className="animate-pulse" />
      </button>
    )
  );
};

export default BackToTop;
