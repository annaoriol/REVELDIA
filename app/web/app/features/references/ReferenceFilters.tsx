import Button from "@/app/components/ui/Button";

interface Props{

    current:string;

    onChange:(filter:string)=>void;

}

const filters=[

"Todas",
"Fotografía",
"Publicidad",
"Branding",
"Marketing",
"Editorial",
"Arquitectura"

];

export default function ReferenceFilters({current,onChange}:Props){

return(

<div className="mt-5 flex flex-wrap gap-2">

{filters.map(filter=>(

<Button

key={filter}

variant={current===filter?"primary":"ghost"}

onClick={()=>onChange(filter)}

className="uppercase tracking-[0.22em] text-[11px]"

>

{filter}

</Button>

))}

</div>

)

}