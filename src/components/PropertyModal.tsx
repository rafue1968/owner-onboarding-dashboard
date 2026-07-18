import styles from "@/app/page.module.css";
import { Property } from "@/types/onboarding";

interface StepDefinition {
    id: string;
    label: string;
    order: number;
}

interface PropertyModalProps {
    property: Property | null;
    onClose: () => void;
    stepDefinitions: StepDefinition[];
}

function formatStatus(status: string) {
    switch (status) {
        case "complete":
            return "Complete";
        case "in_progress":
            return "In progress";
        case "action_required":
            return "Action required";
        case "on_hold":
            return "On hold";
        default:
            return "Not started";
    }
}

export default function PropertyModal({ property, onClose, stepDefinitions }: PropertyModalProps) {
    if (!property) {
        return null;
    }

    const orderedSteps = stepDefinitions
        .filter((definition) => property.steps.some((step) => step.id === definition.id))
        .map((definition) => {
            const step = property.steps.find((entry) => entry.id === definition.id);
            return {
                id: definition.id,
                label: definition.label,
                status: step?.status ?? "not_started",
                note: step?.note,
            };
        });

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div className={styles.modalCard} onClick={(event) => event.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div>
                        <h2>{property.name}</h2>
                        <p>{property.location}</p>
                    </div>
                    <button type="button" className={styles.modalClose} onClick={onClose}>
                        Close
                    </button>
                </div>

                <div className={styles.modalBody}>
                    <p>{property.bedrooms} bedrooms • Target go-live {property.targetGoLiveDate}</p>

                    <ul className={styles.checklist}>
                        {orderedSteps.map((step) => (
                            <li key={step.id} className={styles.checklistItem}>
                                <div className={styles.checklistContent}>
                                    <strong>{step.label}</strong>
                                    <span className={styles.checklistStatus}>{formatStatus(step.status)}</span>
                                </div>
                                {step.note ? <p className={styles.checklistNote}>{step.note}</p> : null}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}