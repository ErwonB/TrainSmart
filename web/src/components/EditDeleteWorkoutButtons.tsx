import React from "react";
import { Text, Box, IconButton, Link, Flex, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { useApolloClient } from "@apollo/client";
import { useDeleteWorkoutMutation } from "../generated/graphql";

interface EditDeleteWorkoutButtonsProps {
  id: number;
  workoutDt: string;
}

export const EditDeleteWorkoutButtons: React.FC<EditDeleteWorkoutButtonsProps> = ({
  id,
  workoutDt,
}) => {
  const apolloClient = useApolloClient();
  const [deleteWorkout] = useDeleteWorkoutMutation();
  return (
    <Box mt={"auto"}>
      <Flex m="auto" align="center">
        <Box mr={"auto"}>
          <IconButton
            as={Button}
            icon="delete"
            aria-label="Delete Workout"
            onClick={async () => {
              const { errors } = await deleteWorkout({
                variables: { id: id },
              });
              if (!errors) {
                await apolloClient.resetStore();
              }
            }}
          />
        </Box>
        <Text ml={4} mr={4} fontSize="xs">
          {workoutDt.slice(0, 10)}
        </Text>
        <Box ml={"auto"}>
          <NextLink href="/workout/edit/[id]" as={`/workout/edit/${id}`}>
            <IconButton as={Link} icon="edit" aria-label="Edit workout" />
          </NextLink>
        </Box>
      </Flex>
    </Box>
  );
};
