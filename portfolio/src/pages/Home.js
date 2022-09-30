import React, { useEffect, useContext } from 'react'
import {
    Flex,
    Image,
    Heading,
    Text,
    Button,
    Grid,
    GridItem
} from '@chakra-ui/react'
import Avatar from '../img/me2.jpg'
import Navbar from '../components/Navbar'
import { ArrowDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { HashLink } from 'react-router-hash-link'
import { HashLink as Link2 } from 'react-router-hash-link'
// import { Gradient } from '../Gradient'
import GithubIcon from '../img/github.svg'
import { goToHome, goToProjects } from '../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../components/global/GlobalContext'
import Footer from '../components/Footer'

export default function Home() {
    // const gradient = new Gradient()
    useEffect(() => {
        // gradient.initGradient('#gradient-canvas')
        setOnHome(true)
    }, [])

    const navigate = useNavigate()
    const { onHome, setOnHome, onProjects, setOnProjects } = useContext(GlobalContext)

    const onClickHandle = (state) => {
        if (state === 'home') {
            setOnHome(true)
            setOnProjects(false)
            goToHome(navigate)
        }
        if (state === 'projects') {
            setOnProjects(true)
            setOnHome(false)
            goToProjects(navigate)
        }
    }

    return (
        <>
            <Flex flexDir={"column"} paddingX={{base: '3.5vw',lg: '20vw'}} minH={'101vh'} fontFamily={'Montserrat'} background={'#f2f6ff'} paddingBottom={'10vh'}>
                {/* <canvas id="gradient-canvas" data-transition-in /> */}
                <Navbar />
                <Flex justify={'space-between'} marginTop={{base: '6vh', lg: '12vh'}} align={'center'}>
                    <Flex flexDir={"column"} paddingY={'2vh'} gap={{base: '3vh', lg: '5vh'}} maxW={{base: '65%', lg: '48%'}}>
                        <Heading fontSize={{base: '1.5rem', lg: '3.6rem'}} fontFamily={'Montserrat'} color={'#110e38'} fontWeight={'800'}>João Gabriel Colodetti</Heading>
                        <Text fontSize={{base: '0.8rem', lg: '1.1rem'}} fontWeight={'500'}>
                            Desenvolvedor Full-Stack,
                            proficiente em tecnologias Front-End,
                            principalmente ReactJS, com diversos
                            projetos desenvolvidos utilizando Hooks,
                            integração com APIs e outras bibliotecas.
                        </Text>
                        <Flex gap={'1vw'}>
                            <HashLink to='#recent-projects' smooth>
                                <Button fontSize={{base: '0.8rem', lg: '1rem'}} _hover={{background: 'linear-gradient(90deg,#1495a7 0,#003687 87%)'}} borderRadius={'16px'} padding={{base:'8px 8px', lg:'24px 32px'}} background={'linear-gradient(90deg,#1495a7 0,#003687 167%)'} color={'white'} leftIcon={<ArrowDownIcon />}>Meus Projetos</Button>
                            </HashLink>
                        </Flex>
                    </Flex>
                    <Image src={Avatar} w={{base: '175px', lg: '450px'}} h={{base: '200px', lg: 'auto'}} borderRadius={{base: '50%', lg: "60px"}} />
                </Flex>
                <Flex marginTop={{base: '20vh', lg: '28vh'}} align={'center'} justify={'space-between'}>
                    <Heading id='recent-projects' fontSize={{base: '1.5rem', lg: '1.8rem'}}>Projetos Recentes</Heading>
                    <Flex align={'center'} justify={'space-between'} _hover={{ background: '#f2f6ff', cursor: 'pointer' }} onClick={() => onClickHandle('projects')}>
                        <Text fontWeight={'500'} background={'#f2f6ff'} fontSize={{base: '0.8rem', lg: '1rem'}}>Ver todos</Text>
                        <ArrowForwardIcon />
                    </Flex>
                </Flex>
                <Flex marginTop={'5vh'} gap={'40px'} justify={'center'} flexDir={{base: 'column', lg: 'row'}} align={'center'}>
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
                <Flex marginY={'5vh'} gap={'40px'} justify={'center'} flexDir={{base: 'column', lg: 'row'}} align={'center'}>
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
            </Flex>
            <Footer />
        </>
    )
}
