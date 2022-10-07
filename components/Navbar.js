import React, { useContext, useEffect } from 'react'
import {
    Flex,
    Image,
    Text,
} from '@chakra-ui/react'
import { GlobalContext } from './global/GlobalContext'
import Link from 'next/link'

export default function Navbar() {
    const { onHome, setOnHome, onProjects, setOnProjects } = useContext(GlobalContext)

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
        <Flex w={'100%'} h={{ base: '12vh', lg: '18vh' }} align={'center'} justifyContent={'space-between'}>
            <Flex gap={{ base: '6vw', lg: '3vw' }} w={{ md: '50vw', lg: '5vw' }}>
                <Flex flexDir={'column'} align={'center'} gap={'6px'}>
                    <Link href='/'>
                        <a>
                            <Text className='nav-item' fontSize={{ base: '0.8rem', lg: '1.2rem' }} w={{ md: '50vw', lg: '6.5vw' }} fontWeight={600} onClick={() => onClickHandle('home')} _hover={{ cursor: 'pointer' }}>Página Inicial</Text>
                        </a>
                    </Link>
                    {onHome && <Image src='../img/circle-solid.svg' w={'6px'} alt=''/>}
                </Flex>
                <Flex flexDir={'column'} align={'center'} gap={'6px'}>
                    <Link href='/projects'>
                        <a>
                            <Text className='nav-item' fontSize={{ base: '0.8rem', lg: '1.2rem' }} fontWeight={600} onClick={() => onClickHandle('projects')} _hover={{ cursor: 'pointer' }}>Projetos</Text>
                        </a>
                    </Link>
                    {onProjects && <Image src='../img/circle-solid.svg' w={'6px'} alt=''/>}
                </Flex>
            </Flex>
            <Flex gap={{ base: '5vw', lg: '1vw' }}>
                <Link href={'https://github.com/jgcolodetti'} target={'_blank'}>
                    <a>
                        <Image src='../img/github-brands.svg' w={{ base: '6vw', lg: '1.2vw' }} alt=''/>
                    </a>
                </Link>
                <Link href={'https://www.linkedin.com/in/joao-gabriel-colodetti-do-carmo/'} target={'_blank'}>
                    <a>
                        <Image src='../img/linkedin-brands.svg' w={{ base: '6vw', lg: '1.2vw' }} alt=''/>
                    </a>
                </Link>
            </Flex>
        </Flex>
    )
}
