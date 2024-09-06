import React from "react";
import CircleBackground from "./CircleBackground";
import Container from "./Container";
import Title from "./Title";
import Button from "@/components/button";
import {AiFillFacebook, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";

const CallToAction = () => {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
        >
            <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                <CircleBackground color="#fff" className="animate-spin-slower" />
            </div>
            <Container className="relative">
                <div className="mx-auto max-w-md sm:text-center">
                    <Title
                        title="Comece a transformação financeira da sua empresa já"
                        className="text-3xl text-white sm:text-4xl"
                    />
                    <p className="mt-4 text-lg text-gray-300">
                        Fale agora com um de nossos especialistas e descubra como podemos
                        otimizar sua gestão financeira e impulsionar o crescimento da sua empresa.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-4">
                        <Button
                                href="#">
                            <AiOutlineWhatsApp className="w-6 h-auto"/>
                            <span className="ml-2.5">Entre em contato</span>
                        </Button>
                        <Button>
                            <AiOutlineInstagram className="w-6 h-auto"/>
                        </Button>
                        <Button>
                            <AiFillLinkedin className="w-6 h-auto"/>
                        </Button>
                        <Button>
                            <AiFillFacebook className="w-6 h-auto"/>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CallToAction;
