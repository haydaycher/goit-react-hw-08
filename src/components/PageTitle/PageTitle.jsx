import PropTypes from "prop-types";
import css from "./PageTitle.module.css";

export default function PageTitle({ children }) {
  return <h1 className={css.heading}>{children}</h1>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
