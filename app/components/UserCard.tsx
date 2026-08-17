type ProductsCardProps = {
    name: string;
    age: number;
    jop: string;
};

export default function ProductsCard({name, age, jop} : ProductsCardProps) {
    return (
        <>
            <h1>{name}</h1>
            <h2>{age}</h2>
            <h3>{jop}</h3>
            
        </>
        
    )
}