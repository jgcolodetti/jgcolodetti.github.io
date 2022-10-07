import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <Flex flexDir={'column'} gap={'10px'} align={'center'} justify={'center'} bottom={'1'} position={'static'} h={'15vh'} background={'linear-gradient(90deg,#1495a7 0,#003687 182%)'}>
            {/* <Text fontSize={'1.3rem'} fontWeight={'700'} color={'white'}>Contato</Text> */}
            <Flex gap={{ base: '4vw', lg: '1vw' }} align={'center'}>
                <Link href={'https://github.com/jgcolodetti'} target={'_blank'}>
                    <a>
                        <Image src='../img/icons8-github.svg' w={{ base: '10vw', lg: '2vw' }} alt='' />
                    </a>
                </Link>
                <Link href={'https://www.linkedin.com/in/joao-gabriel-colodetti-do-carmo/'} target={'_blank'}>
                    <a>
                        <Image src='../img/linkedin-3-32.png' w={{ base: '8vw', lg: '1.5vw' }} alt='' />
                    </a>
                </Link>
            </Flex>
        </Flex>
    )
}