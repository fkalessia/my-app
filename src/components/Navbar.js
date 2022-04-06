import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  useMediaQuery
} from '@chakra-ui/react'

import ThemeToggleButton from './ThemeToggleButton'

const LinkItem = ({ href, _target, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        _hover={{
          textDecoration: 'none',
          backgroundColor: 'undefined',
          borderRadius: 8
        }}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={4}>
          <Text
            fontSize={{ base: '0px', md: '32px' }}
            fontWeight={{ base: '0', md: '600' }}
          >
            <LinkItem href="/">Fatih</LinkItem>
          </Text>
        </Flex>

        {isMobile ? (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/">Home</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
            <LinkItem href="/about">About</LinkItem>
          </Stack>
        ) : (
          <Stack
            direction={{ base: 'row', md: 'row' }}
            display={{ base: 'row', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem href="/about">About</LinkItem>
            <LinkItem href="/blog">Blog</LinkItem>
          </Stack>
        )}
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
