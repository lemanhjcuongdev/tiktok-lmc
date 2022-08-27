import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import images from "~/assets/images";
import {
  faCircleNotch,
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faPlus,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faMessage,
  faPaperPlane,
  faSignOut,
  faUser,
  faCircleDollarToSlot,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";

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
  const [searchResult, setsearchResult] = useState([]);
  //CHECK LOGIN STATUS
  const isSignedIn = true;

  useEffect(() => {
    setTimeout(() => {
      setsearchResult([]);
    }, 0);
  }, []);

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
          <img src={images.logo} height={50} alt="Tiktok" />
          <div className={cx("actions")}>
            {isSignedIn ? (
              <>
                <Button border_style left_icon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
                </Button>
                {/* <Tippy delay={200} content="Message" placement="bottom">
                  <button className={cx("msg-btn")}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </button>
                </Tippy> */}
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
                <img
                  src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d427cb356d6b2d79005fde9f642f3d7a~c5_100x100.jpeg?x-expires=1661734800&x-signature=4uUihNPUzmGN3CkU7AtdidLzv5Y%3D"
                  className={cx("user-avt")}
                  alt="Đào Lê Phương Hoa"
                />
              ) : (
                <button className={cx("settings")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              )}
            </Menu>
          </div>
        </div>
        <div className={cx("section-two")}>
          <HeadlessTippy
            interactive
            zIndex={1}
            // visible
            // ={searchResult.length > 0}
            // content="Tìm kiếm"
            // placement="bottom"
            render={(attrs) => (
              <div className={cx("search-results")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-label")}>Accounts</h4>
                  <AccountItem />
                  <AccountItem />
                  <AccountItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx("searchbar")}>
              {/* <form> */}
              <input type="text" placeholder="Search accounts, videos, more and more... " spellCheck={false} />
              <button className={cx("clear-btn")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx("loading")} icon={faCircleNotch} />

              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
              {/* </form> */}
            </div>
          </HeadlessTippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
