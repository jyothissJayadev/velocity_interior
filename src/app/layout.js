import CustomCursor from "@/components/layout/CustomCursor";
import "../styles/globals.css";

import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Velocity Interiors | Interior Design & Renovation Experts",
  description:
    "Transform your space with Velocity Interiors – expert interior design, home and office renovation, and space planning services in Bangalore and beyond.",
  keywords:
    "interior design, home renovation, office interiors, space planning, modular kitchen, Bangalore interiors, living room design, bedroom interiors, commercial interior design, modern interiors, Velocity Interiors, best interior designers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
