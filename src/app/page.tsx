"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Script from "next/script";
import Square from "@/app/components/Square";
import SquareTest from "@/app/components/SquareTest";
import Logo from "@/app/components/Logo";
// import Glutter from "@/app/components/Gluter";
import Boty from "@/app/components/Boty";
import arrow from "/public/assets/png/arrow.png";

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
    <div className="min-h-screen bg-white overflow-hidden">
      <main className="relative z-20 ">
        <nav className="pt-5 z-20 mx-0 sm:ml-10 w-full sm:w-40 items-center sm:items-start">
          <div className="-top-2 left-1/3 min-[636px]:left-0 absolute">
            <Square width="150" height="140" fill="#FFE819" rx="20" />
          </div>
          <div className="-top-5 min-[636px]:left-24 right-1/2 absolute">
            <Square width="150" height="120" fill="#00E1EE" rx="30" />
          </div>
          <Logo />
        </nav>
        <div className="mx-5 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-10 2xl:mx-60 ">
          <div className="flex flex-col justify-normal sm:justify-center pt-10 sm:pt-0 h-1/2vh sm:h-screen w-full">
            <div className="-top-10 right-40 absolute hidden sm:block">
              <SquareTest width="200" height="200" fill="#8770FF" rx="50" />
            </div>
            <div className="top-24 right-32 absolute -z-10 hidden sm:block">
              <Square width="200" height="140" fill="#FF0077" rx="30" />
            </div>
            <div className="top-40 right-24 absolute hidden sm:block">
              <Square width="150" height="160" fill="#FF5F33" rx="20" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl font-extrabold text-violet z-50 pt-10 sm:pt-0">
              ¡Descubre la revolución del Business Intelligence con Boty!
            </h1>
            <p className="z-50 text-black mt-5 text-left text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl w-3/4">
              Maximiza tu <strong>rentabilidad</strong>,{" "}
              <strong>automatiza</strong> tus procesos y libera tu mente para
              enfocarte en lo que realmente importa:
              <strong> tu estrategia</strong>.
            </p>
            <br></br>
            <div className="flex justify-center pt-0 sm:pt-8">
              <a
                href="https://app.boty.cloud/login"
                target="_blank"
                className="border-2 justify-center items-center rounded-2xl px-2 border-violet sm:w-64 w-32 h-10 sm:h-14 flex flex-row space-x-5"
              >
                <span className="text-violet font-bold text-xs sm:text-2xl">
                  EMPECEMOS
                </span>
              </a>
            </div>
          </div>
          <Boty />
        </div>
      </main>
      <footer className="py-5 w-full text-center ">
        <p className="text-xs sm:text-base text-gray-500">
          © {new Date().getFullYear()} Boty. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
