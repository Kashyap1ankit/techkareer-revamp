import { Mona_Sans, Roboto } from "next/font/google";

export const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["greek"],
});

export const mona_sans = Mona_Sans({
  weight: "700",
  subsets: ["latin"],
});
