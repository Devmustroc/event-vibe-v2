import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header
            className="w-full border-b p-4 shadow-md"
        >
            <div
                className="wrapper flex items-center justify-between"
            >
                <Link
                    href="/"
                    className="w-36"
                >
                    <Image
                        src="/assets/images/logo-no-background.svg"
                        width={100}
                        height={38}
                        alt="EventVibe Logo"
                    />
                </Link>
                <div
                    className="flex w-32 justify-end"
                >

                </div>
            </div>
        </header>
    );
};

export default Header;