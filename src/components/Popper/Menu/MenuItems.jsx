import Button from "~/components/Button";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  const classes = cx("item", {
    divider: data.divider,
  });
  return (
    <Button className={classes} left_icon={data.icon} to={data.to} onClick={onClick}>
      {data.label}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default MenuItem;
