import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Listado de estudiantes" },
    { name: "description", content: "Nulla minim do ullamco sint enim ex aute." },
  ];
};

export default function Index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<typeof Button>();

  return (
    <Box p={10}>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ad deserunt id error illo officiis quos eos. Eum voluptatum voluptatem iure velit sapiente voluptatibus distinctio totam vitae, laborum nisi beatae!</Text>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>

        </DrawerContent>
      </Drawer>
      <Outlet />
    </Box>
  );
}
