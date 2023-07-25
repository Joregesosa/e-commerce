import Image from "next/image";
import Card from "../components/card/Card";
export default function Home() {
  return (
    <>
      <h2 className=" font-bold text-lg text-blue-700 w-28 text-center bg-gray-300 rounded-lg mt-6 ml-6">
        Project init
      </h2>

      <Card />
    </>
  );
}
