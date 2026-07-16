interface HeaderProps {
    ownerName: string;
}


export default function Header({ ownerName }: HeaderProps){
    return (
        <header>
            <div>
                <h1>Madestays</h1>
                <p>Owner Dashboard</p>
            </div>

            <div>
                <span>Welcome back,</span>
                <h2>{ownerName}</h2>
            </div>
        </header>
    )
}