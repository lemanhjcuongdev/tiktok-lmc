import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useMemo } from "react";

import styles from "./SuggestAccounts.module.scss";
import AccItem from "./AccItem";

const cx = classNames.bind(styles);

function SuggestAccounts({ label, data = [], onClick }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("label")}>{label}</p>
      {data.map((account) => (
        <AccItem key={account.id} data={account} />
      ))}
      <p className={cx("more-btn")} onClick={onClick}>
        See more
      </p>
    </div>
  );
}

SuggestAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default SuggestAccounts;
