import PropertyCard from "./PropertyCard"

export default function PropertyGrid(properties: Array<object>) {
    properties.map((property) => {
        <PropertyCard
            key={property.id}
            propertyImage={property.image}
            propertyName={property.name}
            location={property.location}
            bedrooms={property.bedrooms}
            progressBar={property.progressBar}
            progressPercentage={property.progressPercentage}
            statusBadge={property.statusBadge}
            targetGoLiveDate={property.targetGoLiveDate}
        />
    })
}