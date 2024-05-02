import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import NavItems from "@/components/shared/navbar/navItems";
import MobileNav from "@/components/shared/navbar/MobileNavigation/mobilenav";

const Header = () => {
    return (
        <header
            className="w-full border-b shadow-md"
        >
            <div
                className="wrapper flex items-center justify-between"
            >
                <Link
                    href="/public"
                    className="w-36"
                >
                    <Image
                        src="/assets/images/logo-no-background.svg"
                        width={100}
                        height={38}
                        alt="EventVibe Logo"
                    />
                </Link>
                <SignedIn>
                    <nav
                        className="md:flex-between hidden w-full max-w-xs"
                    >
                        <NavItems />
                    </nav>
                </SignedIn>

                <div
                    className="flex w-32 justify-end"
                >
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <MobileNav />
                    </SignedIn>
                    <SignedOut>
                        <Button asChild
                            className="rounded-full bg-black" size="lg"
                        >
                            <Link
                                href="/sign-in"
                            >
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    );
};

export default Header;