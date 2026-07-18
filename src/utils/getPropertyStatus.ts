import { Property } from "@/types/onboarding";


export function getPropertyStatus(property: Property, filter: string): any {
    const { steps } = property;

    if (steps.length === 0){
        return "not_started";
    }

    return steps.filter((step) => {
        return step.status === filter;
    })
}