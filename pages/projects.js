import React, { useEffect, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import Footer from '../components/Footer'
import { GlobalContext } from '../components/global/GlobalContext'
import Link from 'next/link'

export default function Projects() {
  const { setOnProjects } = useContext(GlobalContext)

  useEffect(() => {
    setOnProjects(true)
  }, [])

  return (
    <>
      <Flex flexDir={"column"} paddingX={{ base: '3.5vw', lg: '20vw' }} minH={'101vh'} background={'#f2f6ff'} paddingBottom={'10vh'}>
        <Navbar />
        <Flex flexDir={'column'} w={'100%'} align={'center'} marginTop={'6vh'} gap={'40px'}>
          <Heading
            fontSize={{ base: '1.8rem', lg: '3.6rem' }}
            color={'#110e38'}
            fontWeight={'800'}>
            Meus projetos
          </Heading>
          <Text
            textAlign={'center'}
            fontSize={{ base: '0.8rem', lg: '1.1rem' }}
            fontWeight={'500'}>
            Todos os trabalhos que fizeram parte do meu aprendizado e crescimento profissional.
          </Text>
        </Flex>
        <Flex marginTop={'6vh'} gap={'40px'} justify={'center'} flexDir={{ base: 'column', lg: 'row' }} align={'center'}>
          <Link href='https://github.com/jgcolodetti/ifuture' >
            <a className='project-card-ifuture' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'30%'} alt=''/>
              <Text className='project-card-title'>iFUTURE</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
          <Link href='https://github.com/jgcolodetti/labex'>
            <a className='project-card-labex' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'15%'} alt=''/>
              <Text className='project-card-title'>LabeX</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
        </Flex>
        <Flex marginTop={'5vh'} gap={'40px'} justify={'center'} flexDir={{ base: 'column', lg: 'row' }} align={'center'}>
          <Link href='https://github.com/jgcolodetti/pokedex'>
            <a className='project-card-pokedex' target="_blank" >
              <Image className='project-card-github' src='../img/github.svg' w={'15%'} alt=''/>
              <Text className='project-card-title'>Pokedex</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
          <Link href='https://github.com/jgcolodetti/labeddit'>
            <a className='project-card-labeddit' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'30%'} alt=''/>
              <Text className='project-card-title'>Labeddit</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
        </Flex>
        <Flex marginY={'5vh'} gap={'40px'} justify={'flex-start'} flexDir={{ base: 'column', lg: 'row' }} align={'center'}>
          <Link href='https://github.com/jgcolodetti/astromatch'>
            <a className='project-card-astromatch' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'30%'} alt=''/>
              <Text className='project-card-title'>Astromatch</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
          <Link href='https://github.com/jgcolodetti/landing-page-4cars'>
            <a className='project-card-landingpage' target="_blank" >
              <Image className='project-card-github' src='../img/github.svg' w={'15%'} alt=''/>
              <Text className='project-card-title'>Landing Page</Text>
              <Text className='project-card-description'>HTML / CSS</Text>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
