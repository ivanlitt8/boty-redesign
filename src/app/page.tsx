"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
//import HeaderNav from "@/component/header/HeaderNav";
import logo from "@/public/Boty.gif";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
//import * as gtag from '@/gtag.js';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.title = "¡Hola, soy Boty!";
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Tu código que utiliza window aquí
  //     const url = new URL(window.location.href);
  //     const queryParams = new URLSearchParams(url.search);

  //     // Definir las variables de parámetros de campaña
  //     const utm_source = queryParams.get("utm_source");
  //     const utm_medium = queryParams.get("utm_medium");
  //     const utm_campaign = queryParams.get("utm_campaign");
  //     const utm_term = queryParams.get("utm_term");
  //     const utm_content = queryParams.get("utm_content");

  //     // Pasar los parámetros de la campaña a gtag.pageview
  //     gtag.pageview({
  //       pathname,
  //       campaign: {
  //         source: utm_source,
  //         medium: utm_medium,
  //         campaign: utm_campaign,
  //         term: utm_term,
  //         content: utm_content,
  //       },
  //     });
  //   }
  // }, [pathname, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-transparent to-white">
      <nav className="w-full py-6">
        <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <img src={"/Boty.gif"} alt="Boty" className="w-1/12" />
        </div>
      </nav>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      ></script>
      <main className="flex flex-col items-center justify-center flex-1 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
          <span style={{ color: "#3A00A5" }}>Bienvenido a Boty</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl text-center">
          El software de <strong>Business Intelligence</strong> que revoluciona
          la forma de hacer negocios, impulsando tu{" "}
          <strong>rentabilidad</strong> y <strong>automatizando</strong>{" "}
          procesos de comercio electrónico para que te enfoques en la{" "}
          <strong>estrategia</strong> y no en la <strong>operación</strong>.
        </p>
        <br></br>
        {/* <HeaderNav /> */}
      </main>
      <footer className="py-6 bg-gray-100 w-full text-center">
        <p className="text-base text-gray-500">
          © {new Date().getFullYear()} Boty. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
