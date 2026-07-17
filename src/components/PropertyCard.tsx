import Image from "next/image";


interface PropertyCardProps {
    propertyImage: string;
    propertyName: string;
    location: string;
    bedrooms: string;
    progressBar: number
    progressPercentage: number;
    statusBadge: string;
    targetDate: Date;
}


export default function PropertyCard({
    propertyImage,
    propertyName,
    location,
    bedrooms,
    progressBar,
    progressPercentage,
    statusBadge,
    targetDate
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