import React from "react";
import Title from "@/components/title";
import Container from "@/components/container";
import DesktopView, {FeatureMobile} from "@/components/desktopView";

const Feature = () =>{
    return (
        <section
            id="features"
            aria-label="Features"
            className="bg-gray-900 py-20 sm:py-32">
            <Container>
                <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-3xl">
                    <Title
                        title="Transforme seus dados financeiros em decisões estratégicas."
                        className="text-white text-2xl"/>
                    <p className="mt-2 text-lg text-gray-400">
                        Conte com a Genessys para transformar seus desafios financeiros em oportunidades de sucesso.
                        Com nosso BPO financeiro, oferecemos soluções completas para otimizar sua gestão, reduzir custos
                        e aumentar a lucratividade.
                    </p>
                </div>
            </Container>
            {/* desktop*/}
            <div className="hidden md:mt-20 md:block max-w-screen-xl mx-auto">
                <DesktopView/>
            </div>
            {/* mobile*/}
            <div className="mt-16 md:hidden">
                <FeatureMobile/>
            </div>

        </section>
    )
};

export default Feature;