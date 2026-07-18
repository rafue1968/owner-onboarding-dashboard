import { Dispatch, SetStateAction } from "react";
import styles from "@/app/page.module.css";
import { PropertyFilter } from "@/utils/filterProperties";

interface FilterBarProps {
    activeFilter: PropertyFilter;
    setFilter: Dispatch<SetStateAction<PropertyFilter>>;
}

const filters: Array<{ id: PropertyFilter; label: string }> = [
    { id: "all", label: "All" },
    { id: "live", label: "Live" },
    { id: "in_progress", label: "In progress" },
    { id: "needs_attention", label: "Needs attention" },
    { id: "not_started", label: "Not started" },
];

export default function FilterBar({ activeFilter, setFilter }: FilterBarProps) {
    return (
        <div className={styles.filterBar}>
            {filters.map((filter) => (
                <button
                    key={filter.id}
                    type="button"
                    className={`${styles.filterButton} ${activeFilter === filter.id ? styles.filterButtonActive : ""}`.trim()}
                    onClick={() => setFilter(filter.id)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}