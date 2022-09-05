import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faHouseUser, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";

import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import config from "~/config";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routerConfig.home} icon={<FontAwesomeIcon icon={faHouseUser} />} />
        <MenuItem title="Following" to={config.routerConfig.following} icon={<FontAwesomeIcon icon={faUserGroup} />} />
        <MenuItem title="LIVE" to={config.routerConfig.live} icon={<FontAwesomeIcon icon={faVideo} />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
