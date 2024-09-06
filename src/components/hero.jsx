import React from "react";
import Container from "@/components/container";
import Title from "@/components/title";
import Button from "@/components/button";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io";
import ExtraLogo from "@/components/extraLogo";
import BackgroundDesign from "@/components/backgroundDesign";
import { motion } from "framer-motion";
import {BannerImg} from "@/constants";
import Image from "next/image";
import ImageMotion from "@/components/imageMotion";

const Hero = () => {
    return (
        <section id="Home" className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    {/* right side*/}
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                        <Title title="Terceirize seu financeiro com a Genessys" className="text-4xl"/>
                        <p className="mt-6 text-lg text-gray-600">
                             Somos especializados em executar as tarefas operacionais do financeiro de Micro e Pequenas
                            empresas
                            de serviços.
                            Tenha uma empresa de sucesso, simplifique o controle financeiro.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
                            <Button>
                                <IoIosArrowDown className="w-6 h-auto" />
                                <span className="ml-2.5">Como funciona</span>
                            </Button>
                            <Button variant="outline"
                                    href="#">
                                <AiOutlineWhatsApp className="w-6 h-auto"/>
                                <span className="ml-2.5">Falar com Especialista</span>
                            </Button>

                        </div>
                    </div>
                    {/* left side*/}
                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6" >
                        <BackgroundDesign
                            className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0"/>
                        <ImageMotion />
                    </div>
                    <ExtraLogo/>

                </div>
            </Container>
        </section>
    )
}
export default Hero