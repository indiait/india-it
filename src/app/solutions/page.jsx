import Card from "../components/Card/Card";
import  { SolutionsData } from "../constants/data";

export default function Solutions() {
    return (
        <div className="w-full h-fit text-dark">

            {/* Solutions */}
            <section className="flex flex-wrap lg:justify-center lg:flex-row p-section ">
                {SolutionsData.map((solution) => (
                    <Card
                        key={solution.id} 
                        image={solution.image}
                        title={solution.title}
                        description={solution.description}
                    />
                ))}
                
            </section>
        </div>);
}
