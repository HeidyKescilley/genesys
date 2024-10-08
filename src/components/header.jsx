'use client'
import React from "react";
import Container from "@/components/container";
import Logo from "@/components/logo";
import NavLinks from "@/components/navLinks";
import Button from "@/components/button";
import {Popover} from "@headlessui/react";
import Link from "next/link";
import {TbMenu2} from "react-icons/tb";
import {IoIosArrowUp} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import {navData} from "@/constants";

const MobileNavLinks = ({children,...props}) => {
    return(
        <Popover.Button as={Link} className="block text-base leading-7 tracking-tight text-gray-700"
            {...props}
        >
            {children}
        </Popover.Button>
    )
}

const Header = () => {
    return (
        <header>
            <nav>
                <Container className="relative z-50 flex justify-between py-8">
                    {/*logo*/}
                    <div className="relative z-10">
                        <Logo/>
                    </div>
                    <div className="hidden lg:flex lg:gap-10 items-center">
                        <NavLinks/>
                    </div>
                    <div className="flex items-center gap-6">
                        <Button href="#" variant="outline" className="hidden lg:block">Teste -1-</Button>
                        <Button href="#" className="hidden lg:block">Teste -2-</Button>
                    </div>
                    <Popover className="lg:hidden">
                        {({open})=>(
                            <>
                                <Popover.Button
                                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus-outline-none outline-none"
                                    aria-label="Toggle site navigation">
                                    {({open}) => open?
                                        (<IoIosArrowUp className="text-2xl"/>):
                                        (<TbMenu2 className="text-2xl"/>)}
                                </Popover.Button>
                                <AnimatePresence initial={false}>
                                    {open &&(
                                        <>
                                            <Popover.Overlay
                                                static
                                                as={motion.div}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                className="fixed inset-0 z-0 bg-gray-300/60
                                                backdrop::blur"
                                            />
                                            <Popover.Panel
                                                static
                                                as={motion.div}
                                                initial={{opacity: 0, y: -32}}
                                                animate={{opacity: 1, y: 0}}
                                                exit={{opacity: 0, y:-32, transition: {duration: 0.2},}}
                                                className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50
                                                 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                                            >
                                                <div className="space-y-4">
                                                    {navData.map(({_id, title, href}) =>(
                                                        <MobileNavLinks key={_id}
                                                                        href={href}>
                                                            {title}
                                                        </MobileNavLinks>
                                                    ))}
                                                </div>
                                                <div className="mt-8 flex flex-col gap-4">
                                                    <Button href="#" variant="outline">Teste -1-</Button>
                                                    <Button href="#">Teste -2-</Button>
                                                </div>
                                            </Popover.Panel>
                                        </>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </Popover>

                </Container>
            </nav>
        </header>);
};

export default Header;