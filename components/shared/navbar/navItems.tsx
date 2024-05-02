'use client';
'use client';

import React from 'react';
import {headerLinks} from "@/constants/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavItems = () => {
    const pathname = usePathname();
    return (
        <ul
            className="md:flex-between w-full flex flex-col items-start gap-5 md:flex-row"
        >
            {headerLinks.map((link) => {
                const isActive = pathname === link.route;
                return (
                    <li
                        key={link.route}
                        className={`text-black ${isActive ? 'font-bold text-amber-700 transition duration-300 ease-in-out' : ''}`}
                    >
                        <Link
                            href={link.route}
                            className="hover:text-amber-700 transition-all duration-300 ease-in-out"
                        >
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
};

export default NavItems;