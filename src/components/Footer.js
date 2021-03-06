import {
  Stack,
  VStack,
  Divider,
  Link,
  Text,
  useColorModeValue,
  HStack,
  useMediaQuery
} from '@chakra-ui/react'

import { GITHUB, LINKEDIN, EMAIL } from '../data/socialLinks'

const Footer = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)')
  const linkColor = useColorModeValue('gray.600', 'white')
  const textMode = useColorModeValue('gray.500', 'gray.500')

  return (
    <VStack pb={8} as="footer" alignItems="flex-start">
      <Divider />
      <Stack
        w="full"
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Text color={linkColor}>
          Copyright &copy;&nbsp;
          {`${new Date().getFullYear()} Fatih · All Rights Reserved.`}
        </Text>
      </Stack>
      <HStack
        justifyContent="space-between"
        divider={
          <Text color="gray.500" mx={2}>
            •
          </Text>
        }
      >
        {isMobile ? (
          <HStack
            justifyContent="space-between"
            divider={
              <Text color="gray.500" mx={2}>
                •
              </Text>
            }
          >
            <Link isExternal href={LINKEDIN}>
              <Text fontSize="sm" color={textMode}>
                LinkedIn
              </Text>
            </Link>
            <Link isExternal href={GITHUB}>
              <Text fontSize="sm" color={textMode}>
                Github
              </Text>
            </Link>
            <Link isExternal href={EMAIL}>
              <Text fontSize="sm" color={textMode}>
                Email
              </Text>
            </Link>
          </HStack>
        ) : (
          <HStack
            justifyContent="space-between"
            divider={
              <Text color="gray.500" mx={2}>
                •
              </Text>
            }
          >
            <Link isExternal href={LINKEDIN}>
              <Text fontSize="sm" color={textMode}>
                LinkedIn
              </Text>
            </Link>
            <Link isExternal href={GITHUB}>
              <Text fontSize="sm" color={textMode}>
                Github
              </Text>
            </Link>
            <Link isExternal href={EMAIL}>
              <Text fontSize="sm" color={textMode}>
                Email
              </Text>
            </Link>
          </HStack>
        )}
      </HStack>
    </VStack>
  )
}

export default Footer
