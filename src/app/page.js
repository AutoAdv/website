'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Container, Wrap, WrapItem, Center, Card, CardHeader, Heading, CardBody, CardFooter , Text, Box } from '@chakra-ui/react'
import itemList from './list.json'
import { Input, InputGroup, InputLeftElement, IconButton, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <Box bg={"#343541"}>
      <Container w={`100%`} maxW={'7xl'} h={`100%`} centerContent>
        <Heading justifyContent={'center'} textAlign={'center'} color={'#fff'} as={'h1'} size={'xl'} m={"20"}>The Best AI for that</Heading>
<Center>
  <InputGroup width={'50%'} maxW={'400px'}>
    <InputLeftElement pointerEvents="none">
      <SearchIcon color="gray.300" />
    </InputLeftElement>
    <Input
      type="search"
      placeholder="Search"
      variant="filled"
      background="white"
    />
  </InputGroup>
</Center>

<Stack direction={['column', 'row']} justifyContent="center" alignItems="center" spacing={2} my={4}>
  <IconButton onClick={() => handleFilterClick('filter1')} aria-label="Filter 1" variant={selectedFilter === 'filter1' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter1Icon />} />
  <IconButton onClick={() => handleFilterClick('filter2')} aria-label="Filter 2" variant={selectedFilter === 'filter2' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter2Icon />} />
  <IconButton onClick={() => handleFilterClick('filter3')} aria-label="Filter 3" variant={selectedFilter === 'filter3' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter3Icon />} />
  <IconButton onClick={() => handleFilterClick('filter4')} aria-label="Filter 4" variant={selectedFilter === 'filter4' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter4Icon />} />
  <IconButton onClick={() => handleFilterClick('filter5')} aria-label="Filter 5" variant={selectedFilter === 'filter5' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter5Icon />} />
  <IconButton onClick={() => handleFilterClick('filter6')} aria-label="Filter 6" variant={selectedFilter === 'filter6' ? 'solid' : 'outline'} colorScheme="teal" icon={<Filter6Icon />} />
</Stack>

<Wrap  justify={'center'} spacing='30px' w={'100%'} >

{
  itemList.items?.map((each,i) => {
    return(
      <WrapItem key={i} >
      <Card
      boxShadow={'0 0 4px 0 #0000003d'}
      color={'#8b8c98'} _hover={{
        background:'linear-gradient(90deg, transparent, #4243549e)'
      }} bgGradient={'linear-gradient(45deg, #353642, #363743)'} w='auto' minWidth={['350px','270px','300px','270px','270px']} h='fit-content' >
        <CardHeader color={'#c8c9d3'}>
          <Heading size='md'>{ each?.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{ each?.description}</Text>
        </CardBody>
        <CardFooter>
        { each?.footer}
        </CardFooter>
      </Card>
      </WrapItem>
    )
  })
}
</Wrap>
</Container>
</Box>
  )
}
