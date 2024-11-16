import Card from "../components/Card/Card";
import  { SolutionsData } from "../constants/data";

export default function Solutions() {
    return (
        <div className="w-full h-fit text-dark">

            {/* Solutions */}
            <section className="flex flex-wrap p-section ">
                {SolutionsData.map((solution) => (
                    <Card 
                        image={solution.image}
                        title={solution.title}
                        description={solution.description}
                    />
                ))}
                
            </section>
        </div>);
}
