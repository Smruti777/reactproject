import { Stack,Image,Text } from '@chakra-ui/react';
import React from 'react';

const About =()=>
{
    return <Stack direction='column'>
        <Text textAlign='center' as='b' fontSize='3xl'>ABOUT US</Text>
        <br/>
        <Image
        boxSize='auto'
        objectFit='cover'
        src='https://www.pepperfry.ltd/wp-content/uploads/2023/04/homepage_banner-min.jpg'
        />
        <br/>
        <Text textAlign='center' >
        In 2012, Ambareesh Murty and Ashish Shah pioneered omnichannel retail to launch Casa Living, India’s leading e-commerce marketplace for furniture and home goods.
In the last decade, Casa Living has disrupted the tenets of classical retail by combining an online virtual catalogue, an extensive in-house supply chain, and a large omnichannel footprint covering more than 100 cities in India.
        </Text>
        <br/>
        <Text as='b' textAlign='center' fontSize='3xl'>OUR BELIEFS</Text>
    </Stack>
}
export default About;