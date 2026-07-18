export default function FilterBar(activeFilter: any, setFilter: any){
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("needsAttention")}>Needs Attention</button>
            <button onClick={() => setFilter("live")}>In Progress</button>
            <button onClick={() => setFilter("notStarted")}>Not Started</button>
        </div>
    )
}