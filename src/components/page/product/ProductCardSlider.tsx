'use client'
import React from "react";
import Image from "next/image";
import { CardProduct, CardContent } from "@/components/micro/CardPorduct";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/micro/carousel";
import PrimaryButton from "@/components/micro/PrimaryButton";

const ProductCardSlider = () => {
    return (
        <div className="flex justify-center items-center py-10 px-4">
            <Carousel className="w-full mx-auto p-4 rounded-xl shadow-[0px_10px_50px_0px_rgba(0,_0,_0,_0.1)]">
                <CarouselContent className="w-full flex items-center">
                    <CarouselItem className="w-full flex justify-center">
                        <CardProduct className="w-full h-auto p-10">
                            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
                                {/* Gambar */}
                                <Image
                                    src="/img/anis-carousel.png"
                                    draggable={false}
                                    alt="A.N.I Solution"
                                    width={500}
                                    height={400}
                                    className="w-full max-w-[500px] h-auto object-cover"
                                />

                                {/* Deskripsi */}
                                <div className="max-w-prose text-center md:text-left">
                                    <h3 className="text-2xl font-semibold text-primary_ani">A.N.I Solution</h3>
                                    <p className="text-gray-600 mt-2 font-medium text-lg text-justify">
                                        A.N.I Solution adalah penyedia layanan teknologi terintegrasi yang menghadirkan solusi IT cerdas untuk mendukung transformasi digital bisnis Anda. Kami menawarkan layanan seperti pengembangan aplikasi custom, konsultasi teknologi, integrasi sistem, pengelolaan infrastruktur IT, serta solusi cloud dan keamanan siber. Dengan pendekatan yang berpusat pada kebutuhan klien dan didukung oleh tim profesional berpengalaman, kami memastikan setiap solusi dirancang optimal, andal, serta mendukung efisiensi, produktivitas, dan pertumbuhan berkelanjutan.
                                    </p>
                                    <PrimaryButton
                                        title="Cek Selengkapnya"
                                        onClick={() => alert("Alert Triggered")}
                                        className="mt-5"
                                    />
                                </div>
                            </CardContent>
                        </CardProduct>
                    </CarouselItem>
                    <CarouselItem className="w-full flex justify-center">
                        <CardProduct className="w-full h-auto p-10">
                            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
                                {/* Gambar */}
                                <Image
                                    src="/img/anis-carousel.png"
                                    draggable={false}
                                    alt="A.N.I Solution"
                                    width={500}
                                    height={400}
                                    className="w-full max-w-[500px] h-auto object-cover"
                                />

                                {/* Deskripsi */}
                                <div className="max-w-prose text-center md:text-left">
                                    <h3 className="text-2xl font-semibold text-primary_ani">A.N.I Solution</h3>
                                    <p className="text-gray-600 mt-2 font-medium text-lg text-justify">
                                        A.N.I Solution adalah penyedia layanan teknologi terintegrasi yang menghadirkan solusi IT cerdas untuk mendukung transformasi digital bisnis Anda. Kami menawarkan layanan seperti pengembangan aplikasi custom, konsultasi teknologi, integrasi sistem, pengelolaan infrastruktur IT, serta solusi cloud dan keamanan siber. Dengan pendekatan yang berpusat pada kebutuhan klien dan didukung oleh tim profesional berpengalaman, kami memastikan setiap solusi dirancang optimal, andal, serta mendukung efisiensi, produktivitas, dan pertumbuhan berkelanjutan.
                                    </p>
                                    <PrimaryButton
                                        title="Cek Selengkapnya"
                                        onClick={() => alert("Alert Triggered")}
                                        className="mt-5"
                                    />
                                </div>
                            </CardContent>
                        </CardProduct>
                    </CarouselItem>
                </CarouselContent>

                {/* Tombol Navigasi */}
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </Carousel>
        </div>
    );
};

export default ProductCardSlider;
