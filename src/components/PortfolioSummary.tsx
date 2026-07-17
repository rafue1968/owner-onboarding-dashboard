interface PortfolioSummaryProps{
    summary: {
        totalProperties: number;
        liveProperties: number;
        needsAttention: number;
        overallProgress: number;
    }
}

export default function PortfolioSummary({
    summary
}: PortfolioSummaryProps
){
    return (
        <section>
            <div>
                <h2>Portfolio Overview</h2>
                <p>Track onboarding progress across your properties</p>
            </div>

            <div>
                <div>
                    <span>Overall Progress</span>
                    <strong>{overallProgress}%</strong>
                </div>

                <div>
                    <div
                    
                    />
                </div>

                <div>
                    <StatCard label="Total Properties" value={totalProperties}/>
                    <StatCard label="Live" value={liveProperties}/>
                    <StatCard label="In Progress" value={inProgressProperties}/>
                    <StatCard label="Needs Attention" value={needsAttentionProperties} />
                </div>
            </div>
        </section>
    )
}


interface StatCardProps {
    label: string;
    value: number;
}

function StatCard({label, value}: StatCardProps){
    return (
        <div>
            <span>{label}</span>
            <h3>{value}</h3>
        </div>
    )
}