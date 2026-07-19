import styles from "@/app/page.module.css";

interface HeaderProps {
    ownerName: string;
}

export default function Header({ ownerName }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerTitle}>
                    <h1>Madestays</h1>
                    <p>Owner onboarding dashboard</p>
                </div>

                <div className={styles.headerUser}>
                    <span>Welcome back,</span>
                    <h2>{ownerName}</h2>
                </div>
            </div>
        </header>
    );
}