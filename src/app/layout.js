// app/layout.tsx
'use client'

import { useState } from 'react'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({children}) {

  const [searchText, setSearchText] = useState("");
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  function handleSearch(event) {
    setSearchText(event.target.value);
  }

  return (
    <html lang='en'>
      <head />
      <body>
        <input type="text" value={searchText} onChange={handleSearch} placeholder="Search...">
        <ul>
          {listItems.filter((item) => item.toUpperCase().includes(searchText.toUpperCase())).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CacheProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
