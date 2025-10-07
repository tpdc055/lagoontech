// src/app/layout.tsx
import type { ReactNode } from "react";

export const metadata = {
  title: "LagoonTech",
  description: "LagoonTech website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
