import React from 'react';
import Image from "next/image";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import NavItems from "@/components/shared/navbar/navItems";

const MobileNav = () => {
    return (
        <nav
            className="md:hidden"
        >
            <Sheet>
                <SheetTrigger
                    className="bg-amber-700 align-middle text-white rounded-full px-4 py-1 ml-2"
                >
                    <MenuIcon
                        className="w-6 h-6 cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent
                    className="bg-white flex flex-col gap-6 md:hidden"
                >
                    <SheetHeader>
                        <Image
                            src="/assets/images/logo-no-background.svg"
                            width={100}
                            height={38}
                            alt="EventVibe Logo"
                        />
                    </SheetHeader>
                    <Separator
                        className="w-full bg-amber-700"
                    />
                    <NavItems />
                </SheetContent>
            </Sheet>
        </nav>
    );
};

export default MobileNav;