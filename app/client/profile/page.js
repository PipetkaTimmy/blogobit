import styles from "./profile.module.css";

const profile = () => {
  return (
    <main className="container">
      <div className="staticBlock">
        <div className={styles.profileContainer}>
          <div className={styles.userInfo}>
            <div className={styles.userBlock}>
              <img src="/profile/user.png" alt="" className={styles.userLogo} />
              <div className={styles.socialNetworks}>
                <div className={styles.networkBlock}>
                  <img src="/networks/instagram.svg" alt="" />
                </div>
                <div className={styles.networkBlock}>
                  <img src="/networks/telegram.svg" alt="" />
                </div>
                <div className={styles.networkBlock}>
                  <img src="/networks/facebook.svg" alt="" />
                </div>
                <div className={styles.networkBlock}>
                  <img src="/networks/whatsapp.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.postsInfo}></div>
        </div>
      </div>
    </main>
  );
};

export default profile;
