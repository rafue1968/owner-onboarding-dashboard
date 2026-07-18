import { Property } from "@/types/onboarding";
import { calculateProgress } from "./calculateProgress";
import { getPropertyStatus } from "./getPropertyStatus";

export interface PortfolioSummaryData {
    totalProperties: number;
    liveProperties: number;
    needsAttention: number;
    inProgressProperties: number;
    overallProgress: number;
}

export function calculatePortfolioSummary(properties: Property[]): PortfolioSummaryData {
    const totalProperties = properties.length;

    if (totalProperties === 0) {
        return {
            totalProperties: 0,
            liveProperties: 0,
            needsAttention: 0,
            inProgressProperties: 0,
            overallProgress: 0,
        };
    }

    const liveProperties = properties.filter((property) => getPropertyStatus(property) === "live").length;
    const needsAttention = properties.filter((property) => getPropertyStatus(property) === "needs_attention").length;
    const inProgressProperties = properties.filter((property) => getPropertyStatus(property) === "in_progress").length;
    const overallProgress = Math.round(
        properties.reduce((sum, property) => sum + calculateProgress(property), 0) / totalProperties
    );

    return {
        totalProperties,
        liveProperties,
        needsAttention,
        inProgressProperties,
        overallProgress,
    };
}