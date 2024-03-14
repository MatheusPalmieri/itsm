import type { Metadata } from "next";
import { quicksand } from "../../public/fonts/fonts";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@/globals/styles/global.css";
import "@/globals/styles/scroll.css";
import { Shell } from "@/components/AppShell";
import { theme } from "@/globals/styles/theme";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard interno equipe Btix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={quicksand.className}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
