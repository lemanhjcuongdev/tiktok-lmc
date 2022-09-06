import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from "./AccPreview.module.scss";

const cx = classNames.bind(styles);

function AccPreview() {
  return (
    <section className={cx("wrapper")}>
      <section className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662519600&x-signature=vGkFWfzTctzLh36NS4zNjubrdkY%3D"
          alt=""
        />
        <Button primary_style>Follow</Button>
      </section>
      <section className={cx("info")}>
        <p className={cx("nickname")}>
          <strong>theanh28entertainment</strong>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Thế Anh 28 Entertainment</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </section>
    </section>
  );
}

export default AccPreview;
