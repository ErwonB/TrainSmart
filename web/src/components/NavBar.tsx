import React, { useState } from "react";
import { Box, Link, Flex, Button, Heading, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";

interface NavBarProps {}
interface MenuItemsProps {
  nextLink: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({ children, nextLink }) => (
  <NextLink href={nextLink}>
    <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
      {children}
    </Text>
  </NextLink>
);

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const router = useRouter();
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });

  let body = null;
  let log = null;

  // data is loading
  if (loading) {
    // user not logged in
  } else if (!data?.me) {
    log = (
      <>
        <Box
          mr={{ base: 4, md: 0 }}
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/login">
            <Button bg="transparent" border="1px">
              login
            </Button>
          </NextLink>
        </Box>
        <Box
          display={{ sm: show ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <NextLink href="/register">
            <Button bg="transparent" border="1px">
              register
            </Button>
          </NextLink>
        </Box>
      </>
    );
    // user is logged in
  } else {
    body = (
      <>
        <MenuItems nextLink="/create-workout">Create Workout</MenuItems>
        <MenuItems nextLink="/template">Template</MenuItems>
        <MenuItems nextLink="/profile">Profile</MenuItems>
      </>
    );
    log = (
      <>
        <Text mb={{ base: 4, md: 0 }} mr={{ base: 4, md: 4 }}>
          {data.me.username}
        </Text>
        <Button
          bg="transparent"
          border="1px"
          onClick={async () => {
            await logout();
            router.reload();
          }}
          isLoading={logoutFetching}
        >
          logout
        </Button>
      </>
    );
  }

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <NextLink href="/">
          <Link>
            <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
              TrainV2
            </Heading>
          </Link>
        </NextLink>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        {body}
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        mt={{ base: 4, md: 0 }}
        alignItems="center"
      >
        {log}
      </Box>
    </Flex>
  );
};
