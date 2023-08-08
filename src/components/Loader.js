import styles from "@/styles/Loader.module.scss";

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.loader_outter}></div>
        <div className={styles.loader_inner}></div>
      </div>
    </div>
  );
}

export default Loader;
