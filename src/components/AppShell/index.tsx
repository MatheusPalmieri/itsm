"use client";

import { AppShell, Box, Burger, Button, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Logo } from "../../../public/icons/Logo";
import Link from "next/link";
import { Navbar } from "./Navbar";

interface ShellProps {
  children: React.ReactNode;
}

export const Shell = ({ children }: ShellProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex
          h="100%"
          justify={{ base: "space-between", md: "flex-start" }}
          align="center"
          p="md"
        >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link href="/">
            <Logo height="30px" />
          </Link>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
