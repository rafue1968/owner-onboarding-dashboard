import { Property } from "@/types/onboarding"

export function calculateProgress(property: Property): number {
    const {steps} = property;

    if (steps.length === 0) {
        return 0;
    }

    const completedSteps = steps.filter(
        (step) => step.status === "complete"
    ).length;

    return Math.round((completedSteps / steps.length) * 100);

}