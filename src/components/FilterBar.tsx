import { PropertyFilter } from "@/utils/filterProperties";

interface FilterBarProps {
    activeFilter: string;
    setFilter: React.Dispatch<React.SetStateAction<PropertyFilter>>;
}


export default function FilterBar({ activeFilter, setFilter }: FilterBarProps) {
    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("complete")}>Complete</button>
            <button onClick={() => setFilter("action_required")}>Action Required</button>
            <button onClick={() => setFilter("in_progress")}>In Progress</button>
            <button onClick={() => setFilter("not_started")}>Not Started</button>
        </div>
    )
}