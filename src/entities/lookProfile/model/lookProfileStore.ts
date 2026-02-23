import { UserData } from "@/types/lookProfile";
import { Octokit } from "octokit";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface LookProfileState {
  user: string;
  loading: boolean;
  error: string | null;
  userData: UserData | null;
  updateUser: (user: string) => void;
  findUser: (user: string) => void;
}

const useLookProfileStore = create<LookProfileState>()(
  persist(
    (set) => ({
      user: "",
      loading: false,
      error: null,
      userData: null,
      updateUser: (user) => set({ user: user }),
      findUser: async (user) => {
        const url = `GET /users/${user}`;
        const octokit = new Octokit();

        set({ loading: true, error: null });

        try {
          const response = await octokit.request(url, {
            username: "USERNAME",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
        });
        console.log(response);

          set({ userData: response.data, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
          throw new Error(error);
        }
      },
    }),
    {
      name: "lookProfile-storage",

      partialize: (state) => ({
        user: state.user,
        userData: state.userData,
      }),

      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useLookProfileStore };
