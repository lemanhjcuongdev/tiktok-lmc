import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccPreview from "./AccPreview";

const cx = classNames.bind(styles);

function AccItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccPreview />
        </PopperWrapper>
      </div>
    );
  };
  return (
    //div wrap tippy to avoid warning
    <div>
      <Tippy interactive delay={[800, 0]} render={renderPreview} placement="bottom-start">
        <div className={cx("acc-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662519600&x-signature=vGkFWfzTctzLh36NS4zNjubrdkY%3D"
            alt=""
          />
          <div className={cx("info")}>
            <p className={cx("nickname")}>
              <strong>theanh28entertainment</strong>
              <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Thế Anh 28 Entertainment</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccItem.propTypes = {};

export default AccItem;
