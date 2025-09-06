import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    (function (d, m) {
      const kommunicateSettings = {
        appId: import.meta.env.VITE_KOMMUNICATE_APP_ID, // .env variable
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";

      const h = document.getElementsByTagName("head")[0];
      h.appendChild(s);

      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return null;
};

export default Chatbot;
