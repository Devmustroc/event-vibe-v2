import React, {useEffect, useRef} from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {gsap} from "gsap";
import Image from "next/image";

const HeroBanner = () => {
    const titleRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
        gsap.fromTo(titleRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            repeat: -1,
            repeatDelay: 3,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.from('#g_hero_image', { x: 0, opacity: 0, duration: 1, ease: "power2.out"})
        gsap.to("#g_hero_image",  { x: 100, opacity: 0,duration: 0.5, onComplete: () => { gsap.set("#g_hero_image", { x: -100 }) } })
        gsap.to("#g_hero_image",  { x: 0, duration: 1, delay: 0.5, opacity: 1 })
    }, []);
    const title = "Share your events with the world.";
    const titleArray = title.split("");
    return (
            <section
                className="bg-dotted-pattern bg-cover bg-center bg-no-repeat py-20 bg-amber-700"
            >
                <div
                    className="wrapper text-black grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0"
                >
                    <div
                        className="flex flex-col justify-center gap-8"
                    >
                        <h1
                            className="h1-bold"
                        >
                            {titleArray.map((letter, index) => (
                                <span
                                    ref={(el) => {
                                        if (el && !titleRef.current.includes(el)) {
                                            titleRef.current.push(el);
                                        }
                                    }}
                                    key={index}
                                    className="text-white"
                                >
                                {letter}
                              </span>
                            ))}
                        </h1>
                        <p
                            className="p-regular-20 md:p-regular-24 text-white"
                        >
                            Host your events with EventVibe and share them with the world. Create your event, share it
                            with your
                            audience, and watch your event grow.
                        </p>
                        <Button asChild
                                size="lg"
                                className="button w-full sm:w-fit bg-black text-white"
                        >
                            <Link
                                href="/events"
                            >
                                Explore Events
                            </Link>
                        </Button>
                    </div>
                    <div
                        id="g_hero_image"
                    >
                        <Image
                            src="/assets/images/hero.png"
                            width={1000}
                            height={1000}
                            alt="Dance Party, gaming event, art, and fitness."
                            className="object-contain object-center max-h-[70vh]
                        2xl:max-h-[50vh]"

                        />
                    </div>
                </div>
            </section>
    );
};

export default HeroBanner;