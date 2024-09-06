import React from "react";
import {PiCheckFatFill} from "react-icons/pi";

const ExtraLogo = () =>{
    const logos = [
        {_id: 2001, title: "Ganhe tempo para focar no crescimento da sua empresa"},
        {_id: 2002, title: "Tenha indicadores financeiros para tomar decisões em tempo real"},
        {_id: 2003, title: "Reduza custos da sua operação"}
    ]
    return(
        <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            {/*<p className="text-center text-sm font-semibold text-gray-900 lg:text-left">Teste aqui</p>*/}
            <ul>
                {logos.map(({title,_id}) =>(
                    <li key={_id} className="flex flex-wrap ml-3 gap-3">
                        <PiCheckFatFill />
                        <span>{title}</span>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ExtraLogo
