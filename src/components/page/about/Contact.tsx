"use client";

import Link from 'next/link';
import Description from "@/components/micro/Description";
import PrimaryButton from "@/components/micro/PrimaryButton";
import SectionTitle from "@/components/micro/SectionTitle";

function Contact() {
  return (
    <section
      data-aos="fade-up"
      className="mt-24 lg:mt-32 mb-20 px-6 lg:px-20"
    >
      <div className="text-center flex flex-col items-center bg-[#4C9DAE]/5 border border-[#4C9DAE]/20 rounded-3xl py-16 px-8">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-12 bg-primary"></div>
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Kolaborasi</span>
          <div className="h-px w-12 bg-primary"></div>
        </div>
        <SectionTitle title="Membangun atau <br/> meningkatkan? Kami bantu!" />
        <Description
          className="my-7 max-w-2xl"
          text="Kami bersemangat untuk memahami bisnis Anda lebih dalam dan mendukung pencapaian tujuan digital Anda."
        />
        <Link href="/contact">
          <PrimaryButton onClick={() => {}} title="Hubungi Kami" />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
