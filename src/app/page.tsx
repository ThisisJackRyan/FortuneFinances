// import Image from "next/image";
import Cookie from "./ui/Cookie"


export default function Home() {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-evenly h-full">
        <div className="text-center text-4xl">Fortune Finances</div>
        <Cookie />
      </div>
         
    </div>
  );
}
