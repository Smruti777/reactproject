import { Stack,Image,Text,Grid,Card,CardBody,Heading } from '@chakra-ui/react';
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
        <br/>
        <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(3,1Fr)"}}>
            <Card maxW='md' bg='white' >
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320329.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                            <Heading  size='md' color='#2D3748'>OWN, DON’T RENT</Heading>
                            <Text  color='#2D3748'>
                                Revolutions are won by true believers. Be inspiring.
                            </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='md' bg='white'>
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320330.jpg'
                    alt='Box Storage Queen Size Beds'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color='#2D3748'>MAKE MAGIC</Heading>
                        <Text  color='#2D3748'>
                        Find the gap between perception and reality. Seek breakthroughs that will stand the test of time. Treat the world as a puzzle to be solved with enthusiasm.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='md' bg='white'>
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320383.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading  size='md' color='#2D3748'>BE GRITTY</Heading>
                        <Text  color='#2D3748'>
                            When faced with challenges, put everything you have on the line to overcome them.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='md' bg='white'>
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320382.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading  size='md' color='#2D3748'>HUSTLE</Heading>
                        <Text  color='#2D3748'>
                            Get more done with less. Work longer, harder and smarter, not just two out of three.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='lg' bg='white'>
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320331.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading  size='md' color='#2D3748'>STEP ON TOES</Heading>
                        <Text  color='#2D3748'>
                            The best idea must always win. Don’t sacrifice the truth to ‘be friends’ and don’t hesitate to challenge the boss. Confront. Sometimes the world and its institutions need to change for the future to get a chance.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
            <Card maxW='lg' bg='white'>
                <CardBody>
                    <Image
                    src='https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4319.jpg'
                    alt='Green double couch with wooden legs'
                    borderRadius=''
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading  size='md' color='#2D3748'>BE YOURSELF</Heading>
                        <Text  color='#2D3748'>
                            Each of us should be authentic. Celebrate being different.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Grid>
        <br/>
        <Text textAlign='center' as='b' fontSize='3xl'>OUR STORY</Text>
        <br/>
        <Image
        boxSize='auto'
        objectFit='cover'
        src='https://www.pepperfry.ltd/wp-content/uploads/2023/02/story_1-1.jpg'
        />
        
    </Stack>
}
export default About;


