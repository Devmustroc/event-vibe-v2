'use client';

import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroBanner from "@/components/shared/hero/heroBanner";




export default function Home() {

      return (
        <>
            <HeroBanner />
            <section
                className="wrapper my-8 flex flex-col gap-8 md:gap-12"
            >
                  <h2
                        className="h2-bold text-amber-700"
                  >
                        Book Your Tickets Now
                  </h2>
                  <div
                        className="flex flex-col w-full gap-5 md:flex-row md:gap-8"
                  >
                        Search
                        Category
                  </div>
            </section>
        </>
      );
}
