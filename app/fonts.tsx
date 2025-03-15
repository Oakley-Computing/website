// Copyright Rob Gage 2025

import { NextFont } from "next/dist/compiled/@next/font";
import { Livvic } from "next/font/google";

const primary_font: NextFont = Livvic({
    subsets: ["latin"],
    variable: "--font-primary",
    weight: "500"
})

export { primary_font };