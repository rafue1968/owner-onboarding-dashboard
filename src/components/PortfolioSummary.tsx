import styles from "@/app/page.module.css";

interface PortfolioSummaryProps {
    summary: {
        totalProperties: number;
        liveProperties: number;
        needsAttention: number;
        inProgressProperties: number;
        overallProgress: number;
    };
}

export default function PortfolioSummary({ summary }: PortfolioSummaryProps) {
    return (
        <section className={styles.summarySection}>
            <div className={styles.sectionHeading}>
                <h2>Portfolio overview</h2>
                <p>See how the onboarding pipeline is tracking across the portfolio.</p>
            </div>

            <div className={styles.summaryGrid}>
                <div className={styles.progressCard}>
                    <div className={styles.progressMeta}>
                        <span>Overall progress</span>
                        <strong>{summary.overallProgress}%</strong>
                    </div>
                    <div className={styles.progressTrack}>
                        <div className={styles.progressFill} style={{ width: `${summary.overallProgress}%` }} />
                    </div>
                </div>

                <div className={styles.statGrid}>
                    <StatCard label="Total properties" value={summary.totalProperties} />
                    <StatCard label="Live" value={summary.liveProperties} />
                    <StatCard label="In progress" value={summary.inProgressProperties} />
                    <StatCard label="Needs attention" value={summary.needsAttention} />
                </div>
            </div>
        </section>
    );
}

interface StatCardProps {
    label: string;
    value: number;
}

function StatCard({ label, value }: StatCardProps) {
    return (
        <div className={styles.statCard}>
            <span>{label}</span>
            <h3>{value}</h3>
        </div>
    );
}