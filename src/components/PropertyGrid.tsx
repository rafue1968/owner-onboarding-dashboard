import PropertyCard from "./PropertyCard";
import { Property } from "@/types/onboarding";
import { calculateProgress } from "@/utils/calculateProgress";
import { getPropertyStatus } from "@/utils/getPropertyStatus";
import styles from "@/app/page.module.css";

interface PropertiesProps {
    properties: Property[];
    onSelectProperty: (property: Property) => void;
}

export default function PropertyGrid({ properties, onSelectProperty }: PropertiesProps) {
    if (properties.length === 0) {
        return <p className={styles.emptyState}>No properties match this view right now.</p>;
    }

    return (
        <div className={styles.propertyGrid}>
            {properties.map((property) => {
                const progress = calculateProgress(property);
                const status = getPropertyStatus(property);

                return (
                    <PropertyCard
                        key={property.id}
                        property={property}
                        progress={progress}
                        status={status}
                        onClick={() => onSelectProperty(property)}
                    />
                );
            })}
        </div>
    );
}