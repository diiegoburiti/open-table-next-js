'use client'

import { Link } from '@chakra-ui/next-js'
import {
  Button,
  Flex,
  Container,
  Box,
  Heading,
  Input,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody
} from '@chakra-ui/react'

export default function Page() {
  return (
    <Container
      maxWidth="100%"
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex width="80%" justifyContent="space-between" mt="8px">
        <Heading as="h2" color="gray.800" fontWeight="bold">
          Open Table
        </Heading>
        <Flex gap="12px">
          <Button>Sing In</Button>
          <Button colorScheme="blue">Sing Up</Button>
        </Flex>
      </Flex>

      <Box width="80%" bg="blue.800" padding="60px">
        <Heading as="h3" textAlign="center" color="whiteAlpha.900" mb="24px">
          Find your table for any occasion
        </Heading>
        <Flex gap="6px" w="62%" margin="auto">
          <Input type="search" placeholder="State, city or town" />
          <Button colorScheme="red" w="30%">
            {"Let's go"}
          </Button>
        </Flex>
      </Box>

      <Flex w="80%">
        <Card padding="4px" borderRadius="0" w="200px">
          <Image
            src="gibbresh.png"
            fallbackSrc="https://via.placeholder.com/150"
          />
          <Heading as="h4" fontSize="18px" p="0" my="14px">
            Milestones Grill
          </Heading>
          <CardBody p="0" display="flex" flexDirection="column" gap="8px">
            <Flex gap="8px">
              <Text>*****</Text>
              <Text>77 reviews</Text>
            </Flex>
            <Flex gap="8px">
              <Text>Mexican</Text>
              <Text>$$$$</Text>
              <Text>Toronto</Text>
            </Flex>
            <Text fontWeight="bold">Booked 3 times today</Text>
          </CardBody>
        </Card>
      </Flex>
    </Container>
  )
}
