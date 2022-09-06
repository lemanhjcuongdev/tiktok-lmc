import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./SuggestAccounts.module.scss";
import AccItem from "./AccItem";

const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      <AccItem />
      <AccItem />
      <AccItem />
      <AccItem />
      <AccItem />
      <p className={cx("more-btn")}>See all</p>
    </div>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccounts;
