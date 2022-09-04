import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Heading({ label, onBack }) {
  return (
    <header className={cx("heading")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("heading-label")}>{label}</h4>
    </header>
  );
}

Heading.propTypes = {
  label: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default Heading;
