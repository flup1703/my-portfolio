'use client'

import Button from "../Button/Button";
import Image from "next/image";
import Snowfall from 'react-snowfall'

export default function Hero() {
  return (
    <section id="home" className="flex h-[100vh] w-[100vw] text-center items-center justify-center max-[450px]:justify-center max-[770px]:flex-col max-[450px]:w-fit min-[768px]:mt-20 max-[770px]:mt-0">
      <Snowfall snowflakeCount={300}/>
      <div className="flex flex-col max-w-[800px] gap-4 p-10">
        <h1 className="scroll-m-20 text-center text-7xl font-extrabold tracking-tight text-balance text-(--main-title) whitespace-nowrap animate-fadeInUp max-[450px]:text-4xl max-[1030px]:text-5xl">Frontend Developer</h1>
        <div>
          <p className="text-2xl pb-3 text-(--main-foreground text-center) animate-fadeInUp max-[450px]:text-lg">Создаю современные, интуитивные и отзывчивые веб-приложения</p>
        </div>
        <div className="flex gap-3 items-center justify-center animate-fadeInUp">
          <Button href="#projects" text="Мои работы" type="btn-primary" />
          <Button href="#contact" text="Связаться" type="btn-outline" />
        </div>
      </div>
      <div className="container hero-image">
        <div className="container main-image">
          {process.env.NODE_ENV === 'production' ? (
              <Image className="w-full h-full" src={'picture.svg'} priority={true} width={300} height={300} alt="hero image" />
          ) : (
              <Image className="w-full h-full" src={'/picture.svg'} priority={true} width={300} height={300} alt="hero image" />
          )}
        </div>
      </div>
    </section>
  );
}
