import { Stack,Image,Text,Card,CardBody,Heading,Grid} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Components/Footer';

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
            <Text textAlign='center' as='b' color='#9C4221' fontSize='3xl' >Shop By Category</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(1,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='md' bg='white'>
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
                <Card maxW='md' bg='white'>
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
                <Card maxW='md' bg='white'>
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
                <Card maxW='md' bg='white'>
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
            <Text textAlign='center' as='b' color='#9C4221' fontSize='3xl' >Explore Most Wanted</Text>
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
            <Text textAlign='center' as='b' color='#9C4221' fontSize='3xl' >Discover Our Newest Arrivals</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(2,1Fr)",lg:"repeat(4,1Fr)"}}>
                <Card maxW='sm' bg='white'>
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
                <Card maxW='sm' bg='white'>
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
                <Card maxW='sm' bg='white'>
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
                <Card maxW='sm' bg='white'>
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



            <Text textAlign='center' as='b' color='#9C4221' fontSize='3xl' >Follow Home Interior Trends</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(3,1Fr)",lg:"repeat(3,1Fr)"}}>
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






            <Text textAlign='center' as='b' color='#9C4221' fontSize='3xl' >Check Out These Collections</Text>
            <Grid spacing={4} templateColumns= {{sm:"repeat(2,1Fr)",md:"repeat(3,1Fr)",lg:"repeat(3,1Fr)"}}>
                <Card maxW='md' bg='white'>
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
            <Text as='b' fontSize='xl'>INFO:</Text>
            <Text>
           Casa Living: Your One-Stop Online Furniture Store
Whether you’ve fulfilled your lifelong dream of buying your own home or are a renter excited to decorate your personal space, home décor and furniture can help you create a residence that reflects your tastes and sensibilities.

The right pieces of furniture can not only personalize a space, but they also make everyday life much more pleasant. Imagine, waking up in a bed that provides the most restful night’s sleep. Or experiencing the joy that comes from cooking meals for loved ones in a kitchen designed to your liking.

Casa Living understands the value home décor and furniture can impart to your space. We recognize that apart from being functional and utilitarian, furniture can hold sentimental value that enriches your life. To make living in your home a dream come true, we offer a wide variety of furniture and home décor items that can meet all your requirements and much more.

As a furniture store that prioritizes quality, we are constantly pushing the envelope to enable you to find pieces that catch your eye and pull at your heartstrings.

Find Furniture Shop That Helps Turn a House into Your Home
Gone are the days when you had to spend copious amounts of time wandering through furniture store after furniture store, looking for unique and useful pieces. Shopping with us can help you find premium-quality furnishings to set up every area of your home.

For the living room: Looking for comfortable sofa sets that make lounging in your living room a delight? We have you covered! From plush multiple seater sofas to cosy futon couches, we have it all. To create a complete look, we also offer a range of accompanying sofa chairs. If relaxation is a priority, look at our collection of aesthetically pleasing and restful recliner chairs and sofas. Pick from our collection of centre tables and side tables to maximize convenience for anyone who visits your home. Add in a couple of our pouffes, stools, and footstools, and you’ve got a seating arrangement that is comfort personified.

For your dining room: Getting ready to host parties and entertain guests? Choose from our line of dining tables that’ll add a touch of finesse to your events. Or pick a dining set and create a cosy nook for you and your loved ones to share an intimate meal together.

For your bedroom: If your heart is set on creating a bedroom that is your private sanctuary, we have just what you need. From beds of all sizes and across design styles to mattresses designed to help you sleep peacefully, we enable you to pick and choose to create a bedroom that is yours to the tee. Whether you like to dress efficiently or in a leisurely manner, we have closets and wardrobes that cater to your diverse needs.

If you’re setting up a bedroom for your children, we have furniture that will please their hearts and put a smile on their faces. Functional, fun, and child-safe, atCasa Living you can find kids’ furniture like bunk beds, bean bags, and everything in between, that could send your little one over the moon.

For your study or office: On the hunt for sophisticated and formal pieces for your study or office? Find study desks, computer tables, office chairs, and much more at our offline and online furniture store. And if you’re looking for pieces that will elevate your outdoor space,Casa Living is just the furniture store for you. Whether you want table and chair sets for your lawn or a hammock to lay in, our outdoor collection is at your disposal.

Trendy Home Interior Trends Right at Your Fingertips
Elevate your living space: While choosing the right furniture is a step in the right direction, embellishing your home with tasteful décor is the final touch that makes all the difference. To help you with this, we offer a wide range of home décor items that will elevate the look of your home with elements that reflect your personality.

While the adage goes ‘home is where the heart is’ for some ‘home is where the art is.’ If you’re a patron of the arts, we are a furniture store that encourages your passion and offers myriad solutions to help you display and grow your collection. From photo frames and panels that will dutifully hold your valuable art to ethnic prints, to prints, paintings, figurines, and sculptures that will add to your existing collection, we have it all.

            </Text>
            <br/>
            <br />
            <br />
            <br/>
            <br/>
            <br/>
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>
            <br />
            <br />
            <br/>
            <br />
        
              
            <Footer/>
        </Stack>
    )

}
export default Homepage;