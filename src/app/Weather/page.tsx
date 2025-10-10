"use client"

import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import { useWeatherStore } from "@/stores/weatherStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { SearchIcon } from "@/components/ui/search";
import { HeartIcon } from "@/components/ui/heart";
import { XIcon } from "@/components/ui/x";

export default function WeatherPage() {
    const { city, favoriteCities, data, forecastData } = useWeatherStore();
    const { updateCity, fetchForecastData, fetchWeather, addFavoriteCity, removeFavoriteCity, getFirstPart } = useWeatherStore();
    const [sunrise, setSunrise] = useState<Date | null>();
    const [sunset, setSunset] = useState<Date | null>();

    const clickHandler = async (e: Event) => {
        e.preventDefault();

        if (city) {
            fetchWeather(city);
            fetchForecastData(city);
        };
    };

    const timeHandler = (dataDt: any) => {
        if (forecastData && data) {
            const timeZone = (new Date((dataDt) * 1000).getTimezoneOffset() * 60) + data?.timezone;
            const time = new Date((dataDt + timeZone) * 1000);

            return new Date(time).toLocaleTimeString().slice(0, 5);
        };
    };

    useEffect(() => {
        if (data) {
            const timeZone = (new Date((data?.dt) * 1000).getTimezoneOffset() * 60) + data?.timezone;
        
            setSunrise(new Date((data?.sys?.sunrise + timeZone) * 1000));
            setSunset(new Date((data?.sys?.sunset + timeZone) * 1000));
        };
    }, [data]);

    return (
        <div className="w-full h-full justify-center p-15 max-[480px]:p-1.5 max-[323px]:p-0 min-[768px]:p-5 max-[1024px]:p-5 bg-(--main-background)" suppressHydrationWarning>
            <div className="p-10 h-full bg-(--weather-card) rounded-2xl box-border max-[480px]:p-4 max-[480px]:min-h-dvh max-[323px]:p-3">
                <div className="flex flex-col rounded-2xl border border-solid border-(--weather-border) max-[480px]:min-h-dvh">
                    <form className="flex border-(--weather-border) border-b p-2.5 pl-4 pr-4 items-center gap-2 justify-around">
                        <Input placeholder="Город" className="text-(--weather-foreground) border-(--weather-border)" type="text" autoComplete="off" onChange={(e) => updateCity(e.target.value.trim())}/>
                        <Button className="w-fit bg-(--weather-button-background) border-(--weather-button-border) max-[323px]:w-1 hover:bg-input/50" type="submit" variant="outline" onClick={(e: any) => clickHandler(e)}>
                            <SearchIcon />
                        </Button>
                        <Button className="w-fit bg-(--weather-button-background) border-(--weather-button-border) max-[323px]:w-1 hover:bg-input/50" type="button" variant='outline' onClick={() => addFavoriteCity(city)}>
                            <HeartIcon/>
                        </Button>
                        <ModeToggle/>
                    </form>
                    <div className="flex justify-around max-[480px]:min-h-dvh max-[480px]:flex-col">
                        <div className="w-full border-r border-(--weather-border)  max-[480px]:border-r-0">
                            <h3 className="text-2xl font-semibold tracking-tight flex items-center justify-center m-3.5 max-[480px]:m-0">{data ? data?.name : 'Загрузка...'}</h3>
                            <div className="w-full flex items-center content-center">
                                <div className="w-full flex items-center content-center gap-1.5">
                                    <p className="m-3.5 font-medium text-4xl max-[480px]:text-3xl" id='temperature'>{data ? getFirstPart(String(data?.main?.temp)) : "0"}°</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                {process.env.NODE_ENV === 'production' ? (
                                    <Image src={`${data ? data?.weather?.[0]?.icon : '03d'}.svg`} priority={false} width={300} height={300} alt="weather-icon" />
                                ) : (
                                    <Image src={`/${data ? data?.weather?.[0]?.icon : '03d'}.svg`} priority={false} width={300} height={300} alt="weather-icon" />
                                )}
                            </div>
                            <div className="border border-(--weather-border) rounded-2xl m-5 mt-0 gap-1 p-2.5 bg-(--weather-card-background) max-[480px]:text-sm">
                                <p>{data ? data.weather?.[0].description : 'Загрузка...'}</p>
                                <p>Влажность: {data ? data?.main?.humidity : "0"}% </p>
                                <p>Ощущается как: {data ? getFirstPart(String(data?.main?.feels_like)) : "0"}° </p>
                                <p>Видимость: {data ? String(data?.visibility).slice(0, 2) : "0"}км.</p>
                                <p>Облачность: {data ? data?.clouds?.all : "0"} %</p>
                                <p>Восход: {sunrise ? sunrise.toLocaleTimeString().slice(0, 5) : 'Загрузка...'}</p>
                                <p>Закат: {sunset ? sunset.toLocaleTimeString().slice(0, 5) : 'Загрузка...'}</p>
                            </div>
                            {
                                forecastData ? <ol className="mt-16 border-t border-b border-(--weather-border) whitespace-nowrap max-[480px]:flex max-[480px]:border-b max-[480px]:w-full max-[480px]:overflow-auto max-[480px]:m-0 min-[768px]:overflow-auto max-[1024px]:overflow-auto min-[768px]:max-h-[500px] max-[1024px]:max-h-[500px] min-[768px]:border-b-0 max-[1024px]:border-b-0 min-[768px]:mt-2.5 max-[1024px]:mt-2.5">
                                    {(forecastData?.list?.map((data: any, index: any) => {
                                        return (
                                            <li key={index} className="flex justify-between border border-(--weather-border) rounded-2xl m-5 gap-1 p-2.5 bg-(--weather-card-background) max-[480px]:text-xs max-[480px]:m-3 max-[480px]:flex-col max-[480px]:items-center">
                                                <div className="flex flex-col gap-1.5">
                                                    <time className="max-[480px]:text-center" dateTime={timeHandler(data?.dt)}>{timeHandler(data?.dt)}</time>
                                                    <p className="forecast-temperature">Температура: {getFirstPart(String(data?.main?.temp))}°</p>
                                                    <p className="forecast-feels_like">Ощущается как: {getFirstPart(String(data?.main?.feels_like))}°</p>
                                                </div>
                                                {process.env.NODE_ENV === 'production' ? (
                                                    <Image src={`${data ? data?.weather?.[0]?.icon : '03d'}.svg`} priority={false} width={100} height={100} alt="weather-icon" />
                                                ) : (
                                                    <Image src={`/${data ? data?.weather?.[0]?.icon : '03d'}.svg`} priority={false} width={100} height={100} alt="weather-icon" />
                                                )}
                                            </li>
                                        );
                                    }))}
                                </ol> : null
                            }
                        </div>
                        <div className="w-full h-fil min-h-4 p-2.5 overflow-scroll max-[480px]:text-sm">
                            <h3 className="text-2xl font-semibold tracking-tight flex items-center justify-center m-3.5 max-[480px]:m-1.5">Избранное</h3>
                            <ol className="flex flex-col gap-2.5">
                                {favoriteCities?.map((favoriteCity: any,) => {
                                        return (
                                            <li key={favoriteCity} className="flex hover:cursor-pointer gap-1.5 p-2.5 border rounded-2xl place-content-between max-[480px]:pl-1.5 max-[480px]:p-0 max-[480px]:hover:none border-(--weather-border) transition-colors duration-300 hover:bg-(--weather-hover) " onClick={() => {
                                                    fetchWeather(favoriteCity);
                                                    fetchForecastData(favoriteCity);
                                                }}>
                                                <p className="flex items-center">{favoriteCity}</p>
                                                <Button className="w-fit max-[480px]:w-2 max-[480px]:rounded-xl bg-(--weather-button-background) border-(--weather-border) hover:bg-input/50" type="button" variant="outline" onClick={() => removeFavoriteCity(favoriteCity)}><XIcon /></Button>
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
