import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Sidebar from "./Sidebar";
import Header from "~/layouts/sharedComponents/Header";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bg-img")}></div>
      <div className={cx("overlay")}></div>
      <div className={cx("container")}>
        <div className={cx("navigation")}>
          <Header />
          <Sidebar />
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
