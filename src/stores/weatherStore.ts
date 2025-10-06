import { API, URL } from "@/module/constants";
import { Data, ForecastData } from "@/types/weather";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface WeatherState {
  loading: boolean;
  error: string | null;
  city: string;
  favoriteCities: string[];
  data: Data | null;
  forecastData: ForecastData | null;
  updateCity: (value: string) => void;
  fetchWeather: (city: string) => Promise<void>;
  fetchForecastData: (city: string) => Promise<void>;
  addFavoriteCity: (city: string) => void;
  removeFavoriteCity: (city: string) => void;
  getFirstPart: (string: string) => string;
  clearFavoriteCities: () => void;
  clearWeather: () => void;
  clearCity: () => void;
};

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set, get) => ({
      loading: false,
      error: null,
      city: "",
      favoriteCities: [],
      data: null,
      forecastData: null,
      updateCity: (value) => set({ city: value }),
      fetchWeather: async (city) => {
        const url = `${URL.serverUrl}?q=${city}&appid=${API.apiKey}&units=metric&lang=ru`;

        set({ loading: true, error: null });

        try {
          const response = await fetch(url);

          const data: Data = await response.json();

          set({ data: data, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
          throw new Error(error);
        }
      },
      fetchForecastData: async (city) => {
        const url = `${URL.forecastServerUrl}?q=${city}&appid=${API.apiKey}&units=metric&lang=ru&cnt=5`;

        set({ loading: true, error: null });
        try {
          const response = await fetch(url);
          const data = await response.json();

          set({ forecastData: data, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
          throw new Error(error);
        }
      },
      addFavoriteCity: (city) => {
        const { favoriteCities } = get();
        if (!favoriteCities.includes(city)) {
          set({ favoriteCities: [...favoriteCities, city] });
        }
      },
      removeFavoriteCity: (city: string) => {
        const { favoriteCities } = get();
        set({ favoriteCities: favoriteCities.filter((c) => c !== city) });
      },
      getFirstPart: (string) => {
        return string.slice(0, string.lastIndexOf("."));
      },
      clearFavoriteCities: () => {
        localStorage.clear();
        set({ favoriteCities: [] });
      },
      clearCity: () => ({ city: "" }),
      clearWeather: () => ({ data: null, error: null }),
    }),
    {
      name: "weather-storage",

      partialize: (state) => ({
        data: state.data,
        forecastData: state.forecastData,
        favoriteCities: state.favoriteCities,
      }),

      storage: createJSONStorage(() => localStorage),
    }
  )
);
