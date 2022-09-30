import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Github from '../img/icons8-github.svg'
import Linkedin from '../img/linkedin-3-32.png'

export default function Footer() {
    return (
        <Flex flexDir={'column'} gap={'10px'} align={'center'} justify={'center'} bottom={'1'} position={'static'} h={'15vh'} background={'linear-gradient(90deg,#1495a7 0,#003687 182%)'}>
            {/* <Text fontSize={'1.3rem'} fontWeight={'700'} color={'white'}>Contato</Text> */}
            <Flex gap={{base: '4vw', lg: '1vw'}} align={'center'}>
                <a href={'https://github.com/jgcolodetti'} target={'_blank'}>
                    <Image src={Github} w={{base: '10vw', lg: '2vw'} }/>
                </a>
                <a href={'https://www.linkedin.com/in/joao-gabriel-colodetti-do-carmo/'} target={'_blank'}>
                    <Image src={Linkedin} w={{base: '8vw', lg: '1.5vw'}} />
                </a>
            </Flex>
        </Flex>
    )
}
