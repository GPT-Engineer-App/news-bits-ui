import { Box, Container, Heading, Link, List, ListItem, Text, VStack } from "@chakra-ui/react";
import { FaHackerNews } from "react-icons/fa";

const newsItems = [
  {
    id: 1,
    title: "Y Combinator Introduces New AI Safety Measures",
    url: "https://news.ycombinator.com/item?id=1",
  },
  {
    id: 2,
    title: "OpenAI Releases GPT-4",
    url: "https://news.ycombinator.com/item?id=2",
  },
  {
    id: 3,
    title: "Tesla's Full Self-Driving Beta Now Available",
    url: "https://news.ycombinator.com/item?id=3",
  },
  {
    id: 4,
    title: "Exploring the Depths of Mariana Web",
    url: "https://news.ycombinator.com/item?id=4",
  },
  {
    id: 5,
    title: "Quantum Computing Breakthrough Achieved",
    url: "https://news.ycombinator.com/item?id=5",
  },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <FaHackerNews size="3rem" color="orange" />
          <Heading as="h1" size="xl" mt={2}>
            Hacker News
          </Heading>
        </Box>
        <List spacing={3}>
          {newsItems.map((item) => (
            <ListItem key={item.id} p={2} _hover={{ bg: "orange.100", cursor: "pointer" }}>
              <Link href={item.url} isExternal color="orange.800">
                <Text fontSize="lg">{item.title}</Text>
              </Link>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
