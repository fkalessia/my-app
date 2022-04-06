import {
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  AspectRatio,
  Flex
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

import ExternalLink from './ExternalLink'

const Hero = () => {
  return (
    <Box pt={28}>
      <Stack
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: 'column-reverse', md: 'row' }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Stack
            spacing={3}
            w="full"
            direction={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
            alignItems="center"
          >
            <Heading size="lg" as="h1">
              Hey, I&apos;m Fatih
            </Heading>
          </Stack>

          <Text lineHeight="175%" as="h2" fontSize="lg">
            Experienced in building web applications in the Cloud
            <strong>(AWS)</strong> with a total of over <strong>5+</strong>{' '}
            years.
          </Text>
          <Text as="h2" fontSize="lg">
            I am quite compatible with teamwork with my positivity and
            energy.And i have a solution-oriented and practical mindset.
          </Text>
          <Text as="h2" fontSize="lg">
            I am currently learning <strong>DevOps (CI/CD)</strong>.
          </Text>
          <Text as="h2" fontSize="lg">
            I have experience building Mobile Apps with <strong>Flutter</strong>{' '}
            and Play Store distribution.
          </Text>
          <Text as="h2" fontSize="lg">
            I also experience in creating real-time <strong>MERN</strong>{' '}
            applications.
          </Text>
        </VStack>
        <Flex position="relative" pb={4} justifyContent="center">
          <AspectRatio flexShrink={0} ratio={1} w={300} h={300} as="figure">
            <Box rounded="full" overflow="hidden" borderRadius={200}>
              <Image
                src="/avatar.jpg"
                width={300}
                height={300}
                alt="Avatar Image"
              />
            </Box>
          </AspectRatio>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Hero
