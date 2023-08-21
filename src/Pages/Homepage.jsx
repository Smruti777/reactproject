import { Stack,Image,Text,Card,CardBody,Heading,Grid,Flex,Container} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const Homepage= () =>
{
    return (
        <Stack direction='column'>
            <Image
             boxSize='auto'
             objectFit='cover'
             src='https://ii1.pepperfry.com/assets/2e36357a-2805-48ed-ae6b-eed4e4cef460.jpg'
             alt='Dan Abramov'
            />
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/9c01fff8-95e8-4625-8e34-aa6f888bcb1f.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/317eb9a1-7660-4649-8e5b-5ebe5efa60c9.jpg'
                        alt='Box Storage Queen Size Beds'
                        borderRadius=''
                        />
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/58b23241-c008-4d17-a062-2520652d7469.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/9c01fff8-95e8-4625-8e34-aa6f888bcb1f.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                    </CardBody>
                </Card>
            </Grid>
            <Image
             boxSize='auto'
             objectFit='cover'
             src='https://ii1.pepperfry.com/assets/f205c1e4-933b-4448-8c5f-20bafd385525.jpg'
             alt='Dan Abramov'
            />
            <Text textAlign='center' as='b' color='#9C4221' fontSize='2xl' >Shop By Category</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='md' bg='white' align='center'>
                    <CardBody>
                        <Link to='/products'>
                            <Image
                            src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_1.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius=''
                            />
                        </Link>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>SOFAS</Heading>
                            <Text  color='#2D3748'>
                                Plush, Comfortable & Relaxing
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white' align='center'>
                    <CardBody>
                        <Link to='/products'>
                            <Image
                            src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_6.jpg'
                            alt='Box Storage Queen Size Beds'
                            borderRadius=''
                            />
                        </Link>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>BEAN BAGS</Heading>
                            <Text  color='#2D3748'>
                                Spacious,Versatile & Comfortable
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white' align='center'>
                    <CardBody>
                        <Link to='/products'>
                            <Image
                            src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_22.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius=''
                            />
                        </Link>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>DINING TABLE</Heading>
                            <Text  color='#2D3748'>
                                Stylish, Functional & Sociable 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white' align='center'>
                    <CardBody>
                        <Link to='/products'>
                            <Image
                            src='https://ii1.pepperfry.com/media/wysiwyg/banners/Furniture_clp_category_360_26.jpg'
                            alt='Green double couch with wooden legs'
                            borderRadius=''
                            />
                        </Link>
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>BEDS</Heading>
                            <Text  color='#2D3748'>
                                Sleek, Space Saving & Practical
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Grid>
            <Text textAlign='center' as='b' color='#9C4221' fontSize='2xl' >Explore Most Wanted</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/f50c25cf-b562-43e0-b571-f83107e5b900.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>3 Seater Lawson Sofas</Heading>
                            <Text  color='#2D3748'>
                                Plush, Comfortable & Relaxing
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/1664d2b1-3f15-40d5-a026-4033167943c8.jpg'
                        alt='Box Storage Queen Size Beds'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Box Storage Queen Size Beds</Heading>
                            <Text  color='#2D3748'>
                                Spacious,Versatile & Comfortable
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii1.pepperfry.com/assets/5e103a1f-f54f-43a8-bc31-a96e699d78f8.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>6 Seater Dining Sets</Heading>
                            <Text  color='#2D3748'>
                                Stylish, Functional & Sociable 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/eb18ca82-fcd4-42c3-a3a6-96d1e73af035.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Modern TV Units</Heading>
                            <Text  color='#2D3748'>
                                Sleek, Space Saving & Practical
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>    
            </Grid>
            <Text textAlign='center' as='b' color='#9C4221' fontSize='2xl' >Discover Our Newest Arrivals</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/481e7b81-48f1-47f4-82f3-bac477bafc05.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>The Aakrit Collection</Heading>
                            <Text  color='#2D3748'>
                              Explore Starting ₹13,999 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/fcdd855a-75f8-4c09-8115-30ae340f43c5.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Aromatic Diffusers</Heading>
                            <Text  color='#2D3748'>
                              Explore Starting ₹119 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii1.pepperfry.com/assets/f9bac024-11a3-446e-9366-5b0e08b019c2.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Feng Shui Decor</Heading>
                            <Text  color='#2D3748'>
                              Explore Starting ₹83 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii1.pepperfry.com/assets/3e9249a3-4ce6-4197-a010-bc00fad39b54.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>The Teakwood Collection</Heading>
                            <Text  color='#2D3748'>
                              Explore Starting ₹12,199 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>   
            </Grid>



            <Text textAlign='center' as='b' color='#9C4221' fontSize='2xl' >Follow Home Interior Trends</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(3,1Fr)",md:"repeat(3,1Fr)",lg:"repeat(3,1Fr)"}}>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/112556c8-43e9-4d06-adfc-58bcaa724070.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Jewel Tones Sofas</Heading>
                            <Text  color='#2D3748'>
                                Plush, Comfortable & Relaxing
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/60474e2e-795a-4ce2-9b56-888131d1e5fa.jpg'
                        alt='Box Storage Queen Size Beds'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Easy Biophilic Indoor Plants</Heading>
                            <Text  color='#2D3748'>
                                150+ Options, Explore Starting ₹184
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/ca8ff8af-8bcb-4654-b98c-beb1ee431e34.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>Dramatic Cluster Hanging Lights</Heading>
                            <Text  color='#2D3748'>
                                Stylish, Functional & Sociable 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>    
            </Grid>






            <Text textAlign='center' as='b' color='#9C4221' fontSize='2xl' >Check Out These Collections</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(3,1Fr)",md:"repeat(3,1Fr)",lg:"repeat(3,1Fr)"}}>
                <Card maxW='md' bg='white' align='center'>
                    <CardBody>
                        <Image
                        src='https://ii3.pepperfry.com/assets/8ab4bfb6-31e5-45c8-a3df-2ca44e4bd249.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>The Dona Collection</Heading>
                            <Text  color='#2D3748'>
                                Plush, Comfortable & Relaxing
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii2.pepperfry.com/assets/0b654f17-dc81-410a-9a06-12fde23ce0af.jpg'
                        alt='Box Storage Queen Size Beds'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>The Kosmo Artisan by Spacewood</Heading>
                            <Text  color='#2D3748'>
                                150+ Options, Explore 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' bg='white'>
                    <CardBody>
                        <Image
                        src='https://ii1.pepperfry.com/assets/930b33a6-5a7e-46c7-9821-344d8a4534b2.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius=''
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' color='#2D3748'>The Consuel Collection</Heading>
                            <Text  color='#2D3748'>
                                Stylish, Functional & Sociable 
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>    
            </Grid>
            <Container maxW='xl' bg='white' centerContent   w={[325, 425, 1024]}>
                <Text fontSize='3xl' as='i' color='#C05621'>CasaLiving:Happy furniture to you</Text>
                <br/>
                <Flex color='black' gap='5'>
                    <Flex direction='column'>
                        <Text fontSize='lg' as='b'>Corporate</Text>
                        <Link as='href'>About Us</Link>
                        <Link as='href'>Careers</Link>
                        <Link>In The News</Link>
                        <Link>Governance</Link>
                    </Flex>
                    <Flex direction='column'>
                        <Text fontSize='lg' as='b'>Useful Links</Text>
                        <Link as='href'>Gift Cards</Link>
                        <Link as='href'>Buy in Bulk</Link>
                        <Link>Find a Studio</Link>
                        <Link>Brands</Link>
                    </Flex>
                    <Flex direction='column'>
                        <Text fontSize='lg' as='b'>Partner With Us</Text>
                        <Link as='href'>Sell on Pepperfry</Link>
                        <Link as='href'>Become a Franchisee</Link>
                        <Link>Become Our Pep Homie</Link>
                    </Flex>
                    <Flex direction='column'>
                        <Text fontSize='lg' as='b'>Need Help?</Text>
                        <Link as='href'>FAQs</Link>
                        <Link as='href'>Policies</Link>
                        <Link>Contact Us</Link>
                    </Flex> 
                </Flex>
            </Container>
        </Stack>
    )

}
export default Homepage;