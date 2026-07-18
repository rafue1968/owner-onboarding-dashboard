import PropertyCard from "./PropertyCard";
import { Property } from "@/types/onboarding";
import { calculateProgress } from "@/utils/calculateProgress";

interface PropertiesProps {
    properties: Property[];
}

export default function PropertyGrid({
    properties,
}: PropertiesProps) {

    return (
        <div>
            {properties.map((property) => {

                const progress = calculateProgress(property);

                return (
                    <PropertyCard
                        key={property.id}
                        propertyImage={property.image}
                        propertyName={property.name}
                        location={property.location}
                        bedrooms={property.bedrooms}
                        progressPercentage={progress}
                        targetGoLiveDate={property.targetGoLiveDate}
                    />
                );
            })}
        </div>
    );
}