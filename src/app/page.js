'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Container, Wrap, WrapItem, Center, Card, CardHeader, Heading, CardBody, CardFooter , Text, Box } from '@chakra-ui/react'
import itemList from './list.json'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  return (
<Box bg={"#343541"} >
<Container w={`100%`} maxW={'7xl'} h={`100%`}  centerContent>
  <Heading justifyContent={'center'} textAlign={'center'} color={'#fff'}  as={'h1'} size={'xl'} m={"20"}>The Best AI for that</Heading>
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
