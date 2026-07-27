interface Props {
    value:string;
    onChange:(value:string)=>void;
}

export default function ReferenceSearch({value,onChange}:Props){

    return(

        <div className="mt-8">

            <input
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                type="text"
                placeholder="Buscar referencias..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-cyan-400/50"
            />

        </div>

    )

}