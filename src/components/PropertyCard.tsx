import styles from "@/app/page.module.css";
import { Property } from "@/types/onboarding";

interface PropertyCardProps {
    property: Property;
    progress: number;
    status: string;
    onClick: () => void;
}

function formatStatus(status: string) {
    switch (status) {
        case "live":
            return "Live";
        case "in_progress":
            return "In progress";
        case "needs_attention":
            return "Needs attention";
        default:
            return "Not started";
    }
}

export default function PropertyCard({ property, progress, status, onClick }: PropertyCardProps) {
    const statusClassName =
        status === "live"
            ? styles.statusLive
            : status === "needs_attention"
              ? styles.statusNeedsAttention
              : status === "in_progress"
                ? styles.statusInProgress
                : styles.statusNotStarted;

    return (
        <button type="button" className={styles.propertyCard} onClick={onClick}>
            {property.image ? (
                <img src={property.image} alt={property.name} className={styles.propertyImage} />
            ) : (
                <div className={styles.propertyImagePlaceholder}>No photo available</div>
            )}

            <div className={styles.propertyBody}>
                <div className={styles.propertyHeader}>
                    <h3>{property.name}</h3>
                    <span className={`${styles.statusBadge} ${statusClassName}`}>{formatStatus(status)}</span>
                </div>

                <p>{property.location}</p>
                <p>{property.bedrooms} bedrooms</p>
                <p>Target go-live: {property.targetGoLiveDate}</p>

                <div className={styles.progressMeta}>
                    <div className={styles.progressTrack}>
                        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                    </div>
                    <span>{progress}% complete</span>
                </div>
            </div>
        </button>
    );
}