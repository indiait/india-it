import { aboutUs } from "@/app/constants/data";

export default function AboutUs() {
  return (
    <div className="w-full h-screen text-dark p-aboutUs">
        <h1 className="text-[36px] pb-4">
            {aboutUs.title.toUpperCase()}
        </h1>
        <p className="text-[16px] leading-5">
            {aboutUs.description}
        </p>
    </div>);
}
