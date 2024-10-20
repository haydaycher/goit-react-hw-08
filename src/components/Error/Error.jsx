import PropTypes from "prop-types"; // Імпорт бібліотеки prop-types
import css from "./Error.module.css";

export default function Error({ children }) {
  return (
    <p className={css.textError}>
      <b>{children}</b>
    </p>
  );
}

// Валідація пропсів
Error.propTypes = {
  children: PropTypes.node.isRequired, // Визначаємо тип для пропса children
};
