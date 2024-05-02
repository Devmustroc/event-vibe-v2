import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer
            className="border-t shadow-md w-full py-4"
        >
            <div
                className="wrapper flex-center flex-col flex items-center justify-between
                md:flex-row md:items-start md:justify-between md:py-8 md:px-8 md:space-x-4 md:space-y-0 gap-4"
            >
                <Link
                    href="/"
                >
                    <Image
                        src="/assets/images/logo-no-background.svg"
                        alt="EventVibe Logo"
                        width={100}
                        height={38}
                    />
                </Link>
                <p>
                    &copy; 2021 EventVibe. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;