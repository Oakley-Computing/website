// Copyright Rob Gage 2025

import "./global.css"
import type { Metadata } from "next";
import {primary_font} from "@/app/fonts";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Unleash your potential by teaming up with your own intelligent digital assistant!",
};

export default function Layout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="h-dvh w-dvw">
      <head>
          <title>AI Assistant</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={`h-dvh w-dvw ${primary_font.className}`}>
        {children}
      </body>
      </html>
  );
}
