import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./SuggestAccounts.module.scss";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccPreview from "./AccPreview";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccItem({ data }) {
  const renderPreview = (props) => {
    return (
      <div className={cx("preview")} tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccPreview data={data} />
        </PopperWrapper>
      </div>
    );
  };
  return (
    //div wrap tippy to avoid warning
    <div>
      <Tippy interactive delay={[800, 0]} render={renderPreview} placement="bottom-start">
        <div className={cx("acc-item")}>
          <Image className={cx("avatar")} src={data.avatar} alt={data.last_name} />
          <div className={cx("info")}>
            <p className={cx("nickname")}>
              <strong>{data.nickname}</strong>
              {data.tick && <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />}
            </p>
            <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccItem;
