import React from "react";
import Button from "./Button";
import Container from "./Container";
import {TextField} from "@/components/fields";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row md:justify-between md:pt-6">
                    <p className="text-xs text-gray-500">
                        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
                    </p>
                    <form className="flex w-full justify-center md:w-auto mt-6 md:mt-0">
                        <TextField
                            type="email"
                            aria-label="Email address"
                            placeholder="Email"
                            autoComplete="email"
                            required
                            className="w-60 min-w-0 shrink"
                        />
                        <Button type="submit" className="ml-4 flex-none">
                            <span className="hidden lg:inline">Fique por dentro!</span>
                            <span className="lg:hidden">Fique por dentro!</span>
                        </Button>
                    </form>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;