import classNames from "classnames/bind";
import sample from "~/assets/videos/sample.mp4";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return <video controls className={cx("video")} src={sample} />;
}

export default Home;
