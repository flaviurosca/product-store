import {
  Center,
  Container,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { getProducts, products, loading } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const productsList = products.map((product) => (
    <ProductCard key={product._id} product={product} />
  ));

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Products
        </Text>

        {loading ? (
          <VStack>
            <Spinner size="xl" thickness="4px" color="blue.500" />
            <Text fontSize={20} ml={4}>
              Waking up the server...
            </Text>
          </VStack>
        ) : products.length > 0 ? (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w="full"
          >
            {productsList}
          </SimpleGrid>
        ) : (
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="bold"
            color="gray.500"
          >
            No products found.{" "}
            <Link to="/create">
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
