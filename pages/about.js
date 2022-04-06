import {
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md'

import TagsCloud from '../src/components/BlogIndexPage/TagsCloud'
import { DocumentHead, ExternalLink } from '../src/components'

const AboutPage = () => {
  return (
    <>
      <DocumentHead pageTitle="Fatih - About" postPath="/about" />
      <VStack spacing={3} alignItems="flex-start" w="full" as="section" pt={28}>
        <Heading size="lg" as="h1">
          About Me
        </Heading>
        <small>Last Update: July 1, 2022</small>
        <Text lineHeight="175%" as="h2" fontSize="lg">
          Experienced in building web applications in the Cloud
          <strong>(AWS)</strong> with a total of over <strong>5+</strong> years.
        </Text>
        <Text as="h2" fontSize="lg">
          I am quite compatible with teamwork with my positivity and energy.And
          i have a solution-oriented and practical mindset.
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
        <Heading size="lg" as="h1" pt={8}>
          Skills
        </Heading>

        <TagsCloud />

        <Heading size="lg" as="h1" pt={8}>
          Development Projects
        </Heading>

        <List spacing={4}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            New York Times - News Application
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Bershka E-Commerce Application
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Latest Earthquakes Application
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Generate Secure Password
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Woman Safety Application
          </ListItem>
        </List>
      </VStack>
    </>
  )
}

export default AboutPage
