interface OnboardingStep {
        id: string;
        status: string
        note?: string
    }

export interface Property {
    id: string;
    name: string;
    location: string;
    bedrooms: number;
    image: string
    targetGoLiveDate: string;
    steps: OnboardingStep[];
}