import '../styles/index.css'
import '../styles/data-links.css'
import '../styles/transitions.css'
import "animate.css/animate.min.css";
import { AnimatePresence } from "framer-motion";
import { useState } from 'react';

function MyApp({ Component, pageProps, router }) {
  const [localStorage, setLocalStorage] = useState(false);
  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} storage={localStorage} setStorage={setLocalStorage} />
    </AnimatePresence>
  );
}

export default MyApp
