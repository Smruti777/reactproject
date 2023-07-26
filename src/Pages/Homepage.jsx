import { Stack,Image } from '@chakra-ui/react';
import React from 'react';

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
            <Stack direction='row'>
                <Image
                boxSize='auto'
                objectFit='cover'
                src='https://ii1.pepperfry.com/assets/359d1cca-66e0-4a0a-98ac-b781a4bc61e5.jpg'
                alt='Dan Abramov'
                />
                <Image
                pos='relative'
                boxSize='auto'
                objectFit='cover'
                src='https://ii1.pepperfry.com/assets/359d1cca-66e0-4a0a-98ac-b781a4bc61e5.jpg'
                />
                <Image
                pos='relative'
                boxSize='auto'
                objectFit='cover'
                src='https://ii1.pepperfry.com/assets/359d1cca-66e0-4a0a-98ac-b781a4bc61e5.jpg'
                />
            </Stack>
            <Image
             boxSize='auto'
             objectFit='cover'
             src='https://ii1.pepperfry.com/assets/f205c1e4-933b-4448-8c5f-20bafd385525.jpg'
             alt='Dan Abramov'
            />

        </Stack>

    )

}
export default Homepage;