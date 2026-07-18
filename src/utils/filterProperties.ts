import { Property } from "@/types/onboarding";
import { getPropertyStatus } from "./getPropertyStatus";

// interface PropertiesProps {
//     properties: Property[];
// }

export type PropertyFilter =
    | "all"
    | "complete"
    | "action_required"
    | "in_progress"
    | "not_started"


export function filterProperties(properties: Property[], filter: PropertyFilter): Property[] {
    if (filter === "all") {
        return properties;
    }

    return properties.filter((property) => {
        const status = getPropertyStatus(property, filter);
        return status === filter;
    })


}