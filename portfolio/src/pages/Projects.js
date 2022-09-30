import React from 'react'
import Navbar from '../components/Navbar'
import { Flex, Heading, Text, Image } from '@chakra-ui/react'
import GithubIcon from '../img/github.svg'
import Footer from '../components/Footer'

export default function Projects() {
    return (
        <>
            <Flex flexDir={"column"} paddingX={{base: '3.5vw',lg: '20vw'}} minH={'101vh'} fontFamily={'Montserrat'} background={'#f2f6ff'} paddingBottom={'10vh'}>
                <Navbar />
                <Flex flexDir={'column'} w={'100%'} align={'center'} marginTop={'6vh'} gap={'40px'}>
                    <Heading
                        fontSize={{base: '1.8rem', lg: '3.6rem'}}
                        fontFamily={'Montserrat'}
                        color={'#110e38'}
                        fontWeight={'800'}>
                        Meus projetos
                    </Heading>
                    <Text
                        textAlign={'center'}
                        fontSize={{base: '0.8rem', lg: '1.1rem'}}
                        fontWeight={'500'}>
                        Todos os trabalhos que fizeram parte do meu aprendizado e crescimento profissional.
                    </Text>
                </Flex>
                <Flex marginTop={'6vh'} gap={'40px'} justify={'center'} flexDir={{base: 'column', lg: 'row'}} align={'center'}>
                    <a className='project-card-ifuture' href='https://github.com/jgcolodetti/ifuture' target="_blank">
                        <Image className='project-card-github' src={GithubIcon} w={'30%'} />
                        <Text className='project-card-title'>iFUTURE</Text>
                        <Text className='project-card-description'>React</Text>
                    </a>
                    <a className='project-card-labex' href='https://github.com/jgcolodetti/labex' target="_blank">
                        <Image className='project-card-github' src={GithubIcon} w={'15%'} />
                        <Text className='project-card-title'>LabeX</Text>
                        <Text className='project-card-description'>React</Text>
                    </a>
                </Flex>
                <Flex marginTop={'5vh'} gap={'40px'} justify={'center'} flexDir={{base: 'column', lg: 'row'}} align={'center'}>
                    <a className='project-card-pokedex' target="_blank" href='https://github.com/jgcolodetti/pokedex'>
                        <Image className='project-card-github' src={GithubIcon} w={'15%'} />
                        <Text className='project-card-title'>Pokedex</Text>
                        <Text className='project-card-description'>React</Text>
                    </a>
                    <a className='project-card-labeddit' target="_blank" href='https://github.com/jgcolodetti/labeddit'>
                        <Image className='project-card-github' src={GithubIcon} w={'30%'} />
                        <Text className='project-card-title'>Labeddit</Text>
                        <Text className='project-card-description'>React</Text>
                    </a>
                </Flex>
                <Flex marginY={'5vh'} gap={'40px'} justify={'flex-start'} flexDir={{base: 'column', lg: 'row'}} align={'center'}>
                    <a className='project-card-astromatch' href='https://github.com/jgcolodetti/astromatch' target="_blank">
                        <Image className='project-card-github' src={GithubIcon} w={'30%'} />
                        <Text className='project-card-title'>Astromatch</Text>
                        <Text className='project-card-description'>React</Text>
                    </a>
                    <a className='project-card-landingpage' target="_blank" href='https://github.com/jgcolodetti/landing-page-4cars'>
                        <Image className='project-card-github' src={GithubIcon} w={'15%'} />
                        <Text className='project-card-title'>Landing Page</Text>
                        <Text className='project-card-description'>HTML / CSS</Text>
                    </a>
                </Flex>
            </Flex>
            <Footer />
        </>
    )
}
