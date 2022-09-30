import React, { useContext } from 'react'
import {
    Flex,
    Image,
    Text
} from '@chakra-ui/react'
import Github from '../img/github-brands.svg'
import Linkedin from '../img/linkedin-brands.svg'
import Circle from '../img/circle-solid.svg'
import { goToHome, goToProjects } from '../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from './global/GlobalContext'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
        <Flex w={'100%'} h={{base: '12vh', lg: '18vh'}} align={'center'} fontFamily={'Montserrat'} justifyContent={'space-between'}>
            <Flex gap={{base: '6vw',lg: '3vw'}} w={{md: '50vw', lg: '5vw'}}>
                <Flex flexDir={'column'} align={'center'} gap={'6px'}>
                    <Text className='nav-item' fontSize={{ base: '0.8rem', lg: '1.2rem' }} w={{md: '50vw', lg: '7vw'}} fontWeight={600} onClick={() => onClickHandle('home')} _hover={{ cursor: 'pointer' }}>Página Inicial</Text>
                    {onHome && <Image src={Circle} w={'6px'} />}
                </Flex>
                <Flex flexDir={'column'} align={'center'} gap={'6px'}>
                    <Text className='nav-item' fontSize={{ base: '0.8rem', lg: '1.2rem' }} fontWeight={600} onClick={() => onClickHandle('projects')} _hover={{ cursor: 'pointer' }}>Projetos</Text>
                    {onProjects && <Image src={Circle} w={'6px'} />}
                </Flex>
            </Flex>
            <Flex gap={{base: '5vw',lg: '1vw'}}>
                <a href={'https://github.com/jgcolodetti'} target={'_blank'}>
                    <Image src={Github} w={{base: '6vw',lg: '1.2vw'}} />
                </a>
                <a href={'https://www.linkedin.com/in/joao-gabriel-colodetti-do-carmo/'} target={'_blank'}>
                    <Image src={Linkedin} w={{base: '6vw',lg: '1.2vw'}} />
                </a>
            </Flex>
        </Flex>
    )
}
