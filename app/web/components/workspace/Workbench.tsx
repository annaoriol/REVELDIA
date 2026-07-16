import Image from "next/image";

export default function Workbench() {

  return (

    <section className="relative flex-1 overflow-hidden bg-black">

      <Image
        src="/workspace/desk.jpeg"
        alt="REVELA Creative Laboratory"
        fill
        priority
        className="object-cover"
      />

    </section>

  );

}