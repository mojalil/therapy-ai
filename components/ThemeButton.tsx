"use client";

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme()
//   fix hydration errors 
const [mounted, setMounted] = useState(false)

useEffect(() => setMounted(true), [])

if (!mounted) return null

return (
    <select value={theme} onChange={e => setTheme(e.target.value)}>
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeChanger;