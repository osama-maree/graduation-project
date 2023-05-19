import styles from "./../style/Btom.module.css";
function Bottom() {
  return (
    <>
      <div className={`${styles.sh} b-0 py-2 pb-2 text-center mb-0 pb-0 w-100`}>
        <h4 className={`mb-0 text-dark`}>
          designed 2023 & <span className="text-secondary">PTUK Team</span>
        </h4>
      </div>
    </>
  );
}
export default Bottom;
