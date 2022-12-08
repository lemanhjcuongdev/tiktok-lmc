import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import Button from "~/components/Button";
import styles from "./AccPreview.module.scss";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

function AccPreview({ data }) {
  return (
    <section className={cx("wrapper")}>
      <section className={cx("header")}>
        <Image className={cx("avatar")} src={data.avatar} alt={data.last_name} />
        <Button primary_style>Follow</Button>
      </section>
      <section className={cx("info")}>
        <p className={cx("nickname")}>
          <strong>{data.nickname}</strong>
          {data.avatar && <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />}
        </p>
        <p className={cx("name")}>{`${data.first_name} ${data.last_name}`}</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>{data.followers_count} </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>{data.likes_count} </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </section>
    </section>
  );
}

AccPreview.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AccPreview;
