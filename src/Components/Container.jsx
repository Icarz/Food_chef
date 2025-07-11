import styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className={styles.outerContainer}>{children}</div>;
};

export default Container;
