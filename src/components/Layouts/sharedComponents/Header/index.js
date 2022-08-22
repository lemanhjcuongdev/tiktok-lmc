import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles); //use "-" in css without syntax classNames javascript error

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        {/* search */}
        <h1>Tiktok</h1>
        <h2>U</h2>
        <h2>DM</h2>
        <h2>N</h2>
        <h2>P</h2>
      </div>
    </header>
  );
}

export default Header;
