"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import LogoutButton from "./LogoutButton";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};
const styles = {
    wrapperLogin: `sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm`,
    wrapperLogout: ``,
    content: ``,
};
const Header = function () {
    const session = true;

    if (session) {
        return (
            <motion.header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
                <motion.div
                    initial={{}}
                    animate={{}}
                    transition={{}}
                    className="flex space-x-2"
                >
                    <img
                        className="rounded-full mx-2 object-contain"
                        src=""
                        width={10}
                        height={50}
                    />
                    <div>
                        <p className="text-blue-400">Loggin as: </p>
                        <p className="font-bold text-lg">Independence</p>
                    </div>
                </motion.div>
                <motion.div>
                    <LogoutButton />
                </motion.div>
            </motion.header>
        );
    }

    return (
        <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
            <div className="flex flex-col items-center space-y-2">
                <div className="flex space-x-2 items-center">
                    <Image
                        alt="Logo"
                        src=""
                        height={10}
                        width={50}
                        className=""
                    />

                    <p className="text-blue-400">Welcome to Messenger</p>
                </div>
                <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    href="/auth/signin"
                >
                    Sign In
                </Link>
            </div>
        </header>
    );
};

export default Header;
