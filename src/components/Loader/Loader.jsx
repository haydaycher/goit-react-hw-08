import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import css from "./Loader.module.css";

export default function Loader({ children }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className={css.textLoader}>
      <b>
        {children}
        {dots}
      </b>
    </p>
  );
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};

Loader.defaultProps = {
  children: "Loading",
};
