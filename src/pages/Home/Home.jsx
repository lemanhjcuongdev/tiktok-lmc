import classNames from "classnames/bind";
import sample from "~/assets/videos/sample.mp4";

import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <div className={cx("content-item")}>
        <video controls className={cx("video")} src={sample} />
        <div className={cx("sub-content")}>{/* <h1>Title</h1> */}</div>
      </div>
    </>
  );
}

export default Home;
