import { useProductStore } from "../store/product";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Input,
  ModalFooter,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const UpdateProductModal = ({ product, isOpen, onClose }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { updateProduct } = useProductStore();

  const toast = useToast();

  const handleUpdateProduct = async (id, updatedProduct) => {
    const { success, message } = await updateProduct(id, updatedProduct);
    onClose();

    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Update Product</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <VStack spacing={4}>
            <Input
              placeholder="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  price: e.target.value,
                })
              }
            />
            <Input
              placeholder="Image URL"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({
                  ...updatedProduct,
                  image: e.target.value,
                })
              }
            />
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            Update
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateProductModal;
