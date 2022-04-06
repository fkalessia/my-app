import {
  Box,
  Text,
  VStack,
  Link,
  useColorModeValue,
  HStack
} from '@chakra-ui/react'

const AuthorCard = () => {
  const textMode = useColorModeValue('black', 'white')
  return (
    <Box
      borderRadius="md"
      padding="8px 12px"
      alignItems="center"
      border="1px solid #805AD5"
    >
      <HStack justifyContent="flex-start">
        <VStack alignItems="stretch" as="section" pt={2}>
          <HStack justifyContent="space-between">
            <Text fontSize="md" fontWeight="600" color={textMode}>
              Fatih{' '}
              <Text fontSize="sm" color="purple.500" as="i">
                author
              </Text>
            </Text>
            <HStack justifyContent="flex-end">
              <Box
                borderRadius="md"
                padding="2px 2px"
                alignItems="center"
                border="1px solid #805AD5"
              >
                <Link isExternal href="https://github.com/ffatihkaradag">
                  <Text fontSize="13px" color="purple.500">
                    Github
                  </Text>
                </Link>
              </Box>
            </HStack>
          </HStack>
          <Text fontSize="md" color={textMode}>
            Sr. Full-Stack Developer.
          </Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default AuthorCard
