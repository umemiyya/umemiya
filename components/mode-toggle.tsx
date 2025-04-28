"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { Button } from '@/components/mdx/button';
import { RiMoonFoggyLine, RiSunFoggyLine } from '@remixicon/react';

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
          className='text-muted-foreground/70 grid items-center'
          onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
        >
          <RiSunFoggyLine size={20} className='inline-block dark:hidden' />
          <RiMoonFoggyLine size={20} className='dark:inline-block hidden' />
        </Button>
    )
}
