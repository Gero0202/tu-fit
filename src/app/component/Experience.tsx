import styles from "@/app/css/experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.bgFixed}></div>

      <div className={styles.content}>
        <h2 className={styles.title}>Más que café, una experiencia sensorial.</h2>
        <p className={styles.subtitle}>
          Diseñamos cada detalle para que el tiempo se detenga.
        </p>
      </div>
    </section>
  );
}
