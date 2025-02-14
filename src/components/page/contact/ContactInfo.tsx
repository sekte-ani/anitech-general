import React from 'react'
import { FaTiktok } from 'react-icons/fa';
import { MdEmail, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

const ContactInfo = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white text-gray-800">
      <h2 className="text-3xl md:text-5xl font-semibold text-title text-center md:text-left">
        Kontak Kami
      </h2>
      <p className="font-medium text-base md:text-lg text-justify mt-3 text-gray-700">
        A.N.I Tech hadir untuk mendukung transformasi digital bisnis Anda dengan teknologi 
        terintegrasi dan inovatif. Hubungi kami sekarang untuk konsultasi, penawaran, atau 
        pertanyaan lebih lanjut.
      </p>

      <div className="flex flex-wrap md:grid md:grid-cols-2 mt-5 text-title">
        <div className="flex flex-col gap-5 w-full">
          <div className="font-medium text-base md:text-lg flex items-center gap-3">
            <MdEmail className="w-5 h-5" />
            <span>aniteknologi@gmail.com</span>
          </div>
          <div className="font-medium text-base md:text-lg flex items-center gap-3">
            <MdCall className="w-5 h-5" />
            <span>085117202154</span>
          </div>
          <div className="font-medium text-base md:text-lg flex items-center gap-3">
            <FaLinkedin className="w-5 h-5" />
            <span>A.N.I TECH</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full ml-0 mt-5 md:mt-0 md:ml-10 ">
          <div className="font-medium text-base md:text-lg flex items-center gap-3">
            <FaTiktok className="w-5 h-5" />
            <span>a.n.i.tech</span>
          </div>
          <div className="font-medium text-base md:text-lg flex items-center gap-3">
            <BiLogoInstagramAlt className="w-5 h-5" />
            <span>anitech_id</span>
          </div>
        </div>
      </div>

      <p className="font-medium text-justify text-base md:text-lg mt-5 text-title">
        Atau isi formulir di samping dan tim kami akan segera menghubungi Anda.
      </p>
    </div>
  );
}

export default ContactInfo;
