import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItems";
import Heading from "./Heading";

const cx = classNames.bind(styles);

function Menu({ children, data, onChange }) {
  const [history, setHistory] = useState([{ data }]);
  const present = history[history.length - 1];
  const renderItems = () => {
    return present.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // console.log(item.children);
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 200]}
      // visible
      placement="bottom-end"
      zIndex={1806}
      render={(attrs) => (
        <div className={cx("setting-items")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Heading
                label="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, history.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
