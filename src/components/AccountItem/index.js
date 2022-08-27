import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avt")}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f75993e97bd5424690cb3c702fc88b0d~c5_100x100.jpeg?x-expires=1661572800&x-signature=CwhO%2BuRVO8YZ8zpqwuB75w0VdZY%3D"
        alt="Đào Lê Phương Hoa"
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Đào Lê Phương Hoa</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx("check-icon")} />
        </p>
        <span className={cx("username")}>hoaa.hanassii</span>
      </div>
    </div>
  );
}

export default AccountItem;
