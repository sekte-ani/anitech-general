'use client'
import React, { useState } from "react";
import Image from "next/image";
import { CardProduct, CardContent } from "@/components/micro/CardPorduct";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/micro/carousel";
import PrimaryButton from "@/components/micro/PrimaryButton";
import { Button } from "@/components/ui-shadcn/button";

const ProductCardSlider = () => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="flex flex-col justify-center items-center py-10 px-0 sm:px-4">
            <Carousel setApi={setApi} className="w-full mx-auto p-4 rounded-xl shadow-[0px_10px_50px_0px_rgba(0,_0,_0,_0.1)]">
                <CarouselContent className="w-full flex items-center">
                    {[0, 1].map((item) => (
                        <CarouselItem key={item} className="w-full flex justify-center">
                            <CardProduct className="w-full h-auto sm:p-6 md:p-8">
                                <CardContent className="flex flex-col xl:flex-row items-center justify-center gap-4 sm:gap-6">
                                    {/* Gambar Responsif */}
                                    <Image
                                        src="/img/anis-carousel.png"
                                        draggable={false}
                                        alt={`A.N.I Solution ${item}`}
                                        width={500}
                                        height={400}
                                        className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
                                    />

                                    {/* Deskripsi */}
                                    <DescriptionSection item={item} />
                                </CardContent>
                            </CardProduct>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Tombol Navigasi - Disembunyikan di HP jika kurang penting */}
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hidden sm:flex" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hidden sm:flex" />
            </Carousel>
            <div className="flex sm:hidden py-2 gap-2 mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === current - 1 ? "bg-primary_ani scale-110" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

        </div>
    );
};

/* Komponen untuk Deskripsi dengan Read More */
const DescriptionSection = ({ item }: { item: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="max-w-prose text-center xl:text-left">
            <h3 className="text-md sm:text-2xl font-semibold text-primary_ani">
                A.N.I Solution {item}
            </h3>
            <p
                className={`text-gray-600 mt-2 font-medium text-[14px] sm:text-base md:text-lg text-justify transition-all ${isExpanded ? "line-clamp-none" : "line-clamp-6 sm:line-clamp-none"
                    }`}
            >
                A.N.I Solution adalah penyedia layanan teknologi terintegrasi yang menghadirkan solusi IT cerdas untuk mendukung transformasi digital bisnis Anda. Kami menawarkan layanan seperti pengembangan aplikasi custom, konsultasi teknologi, integrasi sistem, pengelolaan infrastruktur IT, serta solusi cloud dan keamanan siber. Dengan pendekatan yang berpusat pada kebutuhan klien dan didukung oleh tim profesional berpengalaman, kami memastikan setiap solusi dirancang optimal, andal, serta mendukung efisiensi, produktivitas, dan pertumbuhan berkelanjutan.
            </p>
            {/* Tombol Read More - Hanya muncul di HP */}
            {!isExpanded && (
                <Button
                    className="text-primary_ani font-semibold mt-2 sm:hidden"
                    variant="link"
                    onClick={() => setIsExpanded(true)}
                >
                    Read More
                </Button>
            )}
            <PrimaryButton
                title="Cek Selengkapnya"
                onClick={() => alert(`Detail ${item}`)}
                className="mt-4 sm:mt-5"
            />
        </div>
    );
};

export default ProductCardSlider;
