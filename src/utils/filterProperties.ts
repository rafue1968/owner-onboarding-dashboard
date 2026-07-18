import { Property } from "@/types/onboarding";
import { getPropertyStatus } from "./getPropertyStatus";

export type PropertyFilter =
    | "all"
    | "live"
    | "in_progress"
    | "needs_attention"
    | "not_started";

export function filterProperties(properties: Property[], filter: PropertyFilter): Property[] {
    if (!filter || filter === "all") {
        return properties;
    }

    return properties.filter((property) => getPropertyStatus(property) === filter);
}