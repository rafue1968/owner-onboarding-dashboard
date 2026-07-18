import { Property } from "@/types/onboarding";

export type PropertyStatus = "live" | "in_progress" | "needs_attention" | "not_started";

export function getPropertyStatus(property: Property): PropertyStatus {
    const { steps } = property;

    if (steps.length === 0) {
        return "not_started";
    }

    const hasActionRequired = steps.some(
        (step) => step.status === "action_required" || step.status === "on_hold"
    );

    if (hasActionRequired) {
        return "needs_attention";
    }

    const completedSteps = steps.filter((step) => step.status === "complete").length;
    const isLive = completedSteps === steps.length;

    if (isLive) {
        return "live";
    }

    return "in_progress";
}