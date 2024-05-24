import { Container, Text, VStack, Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box mb={8}>
        <Heading as="h1" size="xl" mb={4}>Featured Article</Heading>
        <Text fontSize="lg">This is the featured article. It has a larger space and more prominence.</Text>
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 1</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 2</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 3</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 4</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 5</Text>
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          <Text>Article 6</Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Index;