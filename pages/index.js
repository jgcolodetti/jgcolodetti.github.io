import React, { useContext, useEffect } from 'react'
import {
  Flex,
  Heading,
  Text,
  Button,
  Image
} from '@chakra-ui/react'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GlobalContext } from '../components/global/GlobalContext'
import Link from 'next/link'

export default function Home() {
  const { onHome, setOnHome, onProjects, setOnProjects } = useContext(GlobalContext)
  useEffect(() => {
    setOnHome(true)
  }, [])


  const onClickHandle = (state) => {
    if (state === 'home') {
      setOnHome(true)
      setOnProjects(false)
    }
    if (state === 'projects') {
      setOnProjects(true)
      setOnHome(false)
    }
  }

  return (
    <>
      <Flex flexDir={"column"} paddingX={{ base: '3.5vw', lg: '20vw' }} minH={'101vh'} background={'#f2f6ff'} paddingBottom={'10vh'}>
        <Navbar />
        <Flex justify={'space-between'} marginTop={{ base: '6vh', lg: '12vh' }} align={'center'}>
          <Flex flexDir={"column"} paddingY={'2vh'} gap={{ base: '3vh', lg: '5vh' }} maxW={{ base: '65%', lg: '48%' }}>
            <Heading fontSize={{ base: '1.5rem', lg: '3.6rem' }} color={'#110e38'} fontWeight={'800'}>João Gabriel Colodetti</Heading>
            <Text fontSize={{ base: '0.8rem', lg: '1.1rem' }} fontWeight={'500'}>
              Desenvolvedor Full-Stack,
              proficiente em tecnologias Front-End,
              principalmente ReactJS, com diversos
              projetos desenvolvidos utilizando Hooks,
              integração com APIs e outras bibliotecas.
            </Text>
            <Flex gap={'1vw'}>
              <Link href='#recent-projects'>
                <a>
                  <Button fontSize={{ base: '0.8rem', lg: '1rem' }} _hover={{ background: 'linear-gradient(90deg,#1495a7 0,#003687 87%)' }} borderRadius={'16px'} padding={{ base: '8px 8px', lg: '24px 32px' }} background={'linear-gradient(90deg,#1495a7 0,#003687 167%)'} color={'white'} leftIcon={<ArrowDownIcon />}>Meus Projetos</Button>
                </a>
              </Link>
            </Flex>
          </Flex>
          <Image src='../img/me2.jpg' w={{ base: 175, lg: 450 }} h={{ base: 200, lg: 'auto' }} borderRadius={{ base: '50%', lg: 60 }} alt='' />
        </Flex>
        <Flex marginTop={{ base: '20vh', lg: '28vh' }} align={'center'} justify={'space-between'}>
          <Heading id='recent-projects' fontSize={{ base: '1.5rem', lg: '1.8rem' }}>Projetos Recentes</Heading>
          <Link href='/projects'>
            <Flex align={'center'} justify={'space-between'} _hover={{ background: '#f2f6ff', cursor: 'pointer' }} onClick={() => onClickHandle('projects')}>
              <a>
                <Text fontWeight={'500'} background={'#f2f6ff'} fontSize={{ base: '0.8rem', lg: '1rem' }}>Ver todos</Text>
                <ArrowForwardIcon />
              </a>
            </Flex>
          </Link>
        </Flex>
        <Flex marginTop={'5vh'} gap={'40px'} justify={'center'} flexDir={{ base: 'column', lg: 'row' }} align={'center'}>
          <Link href='https://github.com/jgcolodetti/ifuture'>
            <a className='project-card-ifuture' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'30%'} alt='' />
              <Text className='project-card-title'>iFUTURE</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
          <Link href='https://github.com/jgcolodetti/labex'>
            <a className='project-card-labex' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'15%'} alt='' />
              <Text className='project-card-title'>LabeX</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
        </Flex>
        <Flex marginY={'5vh'} gap={'40px'} justify={'center'} flexDir={{ base: 'column', lg: 'row' }} align={'center'}>
          <Link href='https://github.com/jgcolodetti/pokedex'>
            <a className='project-card-pokedex' target="_blank" >
              <Image className='project-card-github' src='../img/github.svg' w={'15%'} alt='' />
              <Text className='project-card-title'>Pokedex</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
          <Link href='https://github.com/jgcolodetti/labeddit'>
            <a className='project-card-labeddit' target="_blank">
              <Image className='project-card-github' src='../img/github.svg' w={'30%'} alt='' />
              <Text className='project-card-title'>Labeddit</Text>
              <Text className='project-card-description'>React</Text>
            </a>
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </>

  )
}
