import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import {
  faPlus,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faPaperPlane,
  faSignOut,
  faUser,
  faCircleDollarToSlot,
  faGear,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import ImgComponent from "~/components/ImgComponent";
import Search from "~/Layouts/sharedComponents/Search";
import config from "~/config";

const cx = classNames.bind(styles); //use "-" in css without syntax classNames javascript error

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    label: "English",
    children: {
      label: "Language",
      data: [
        {
          type: "lang",
          code: "en",
          label: "English",
        },
        {
          type: "lang",
          code: "vi",
          label: "Tiếng Việt",
        },
        {
          type: "lang",
          code: "jp",
          label: "日本",
        },
        {
          type: "lang",
          code: "ru",
          label: "Русский",
        },
        {
          type: "lang",
          code: "kr",
          label: "한국인",
        },
        {
          type: "lang",
          code: "fr",
          label: "Français",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    label: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    label: "Keyboard shortcuts",
  },
];

function Header() {
  //CHECK LOGIN STATUS
  const isSignedIn = true;

  //MESS, NOTI COUNTER
  // const haveMsg = 0;
  // const haveNoti = 0;

  //popper wrapper menu change handle
  const handleMenuChange = (menuItem) => {
    // console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      label: "View profile",
      to: "/@quanglanbui",
    },
    {
      icon: <FontAwesomeIcon icon={faCircleDollarToSlot} />,
      label: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      label: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      label: "Log out",
      to: "/logout",
      divider: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("section-one")}>
          <Link to={config.routerConfig.home} className={cx("logo-link")}>
            <img src={images.logo} height={50} alt="Tiktok" />
          </Link>
          <div className={cx("actions")}>
            {isSignedIn ? (
              <>
                <Button border_style left_icon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
                </Button>
                <Tippy delay={200} content="Message" placement="bottom">
                  <button className={cx("msg-btn")}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    {isSignedIn ? <sup className={cx("noti")}>264</sup> : <></>}
                  </button>
                </Tippy>
                <Tippy delay={200} content="Notification" placement="bottom">
                  <button className={cx("noti-btn")}>
                    <FontAwesomeIcon icon={faBell} />
                    {isSignedIn ? <sup className={cx("noti")}>186</sup> : <></>}
                  </button>
                </Tippy>
              </>
            ) : (
              <>
                <Button left_icon={<FontAwesomeIcon icon={faPlus} />} border_style>
                  Upload
                </Button>
                <Button primary_style>Login</Button>
              </>
            )}
            <Menu data={isSignedIn ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
              {isSignedIn ? (
                <ImgComponent
                  src="none"
                  className={cx("user-avt")}
                  // altImg="https://f8.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ff8_icon.fa5f0478.png&w=1920&q=75"
                />
              ) : (
                <button className={cx("settings")}>
                  {/* <FontAwesomeIcon icon={faEllipsisVertical} /> */}
                  <ImgComponent
                    src="none"
                    className={cx("user-avt")}
                    // altImg="https://f8.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ff8_icon.fa5f0478.png&w=1920&q=75"
                  />
                </button>
              )}
            </Menu>
          </div>
        </div>
        <div className={cx("section-two")}>
          <Search />
        </div>
      </div>
    </header>
  );
}

export default Header;
