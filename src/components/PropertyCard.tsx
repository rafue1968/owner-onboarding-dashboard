import Image from "next/image";


interface PropertyCardProps {
    propertyImage: string;
    propertyName: string;
    location: string;
    bedrooms: string;
    progressBar: number
    progressPercentage: number;
    statusBadge: string;
    targetGoLiveDate: string;
}


export default function PropertyCard({
    propertyImage,
    propertyName,
    location,
    bedrooms,
    progressBar,
    progressPercentage,
    statusBadge,
    targetGoLiveDate
}: PropertyCardProps) {

    return (
        <div>
            <Image src={propertyImage} alt={propertyName}/>
            <h2>{propertyName}</h2>
            <p>{location}</p>
            <p>{bedrooms} bedrooms</p>
        </div>
    )
}