import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa, faHouseUser, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";

import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import SuggestAccounts from "~/components/SuggestAccounts";

import * as userService from "~/services/userService";
import { useCallback } from "react";

const cx = classNames.bind(styles);

const INITIAL_PAGE = 1;
const ITEMS_PER_PAGE = 5;

function Sidebar() {
  const [page, setPage] = useState(INITIAL_PAGE);
  const [suggestedUsers, setsuggestedUsers] = useState([]);
  useEffect(() => {
    userService
      .getSuggest({ page, perPage: ITEMS_PER_PAGE })
      .then((data) => {
        setsuggestedUsers((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleOnClick = () => {
    setPage(page + 1);
  };

  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routerConfig.home} icon={<FontAwesomeIcon icon={faHouseUser} />} />
        <MenuItem title="Following" to={config.routerConfig.following} icon={<FontAwesomeIcon icon={faUserGroup} />} />
        <MenuItem title="LIVE" to={config.routerConfig.live} icon={<FontAwesomeIcon icon={faVideo} />} />
      </Menu>
      <SuggestAccounts label="Suggest accounts" data={suggestedUsers} onClick={handleOnClick} />
      <SuggestAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
