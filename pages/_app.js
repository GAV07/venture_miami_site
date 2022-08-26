import '../styles/index.css'
import '../styles/data-links.css'
import '../styles/transitions.css'
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp
