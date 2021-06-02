import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/core";
import { RegularWorkoutFragment, useExoQuery } from "../generated/graphql";

interface DaySectionProps {
  workout: RegularWorkoutFragment;
}

export const DaySection: React.FC<DaySectionProps> = ({ workout }) => {
  const { data: exo } = useExoQuery();

  const exoIdtoExoDesc: Record<number, string> = {};
  exo?.exo?.forEach((e) => {
    exoIdtoExoDesc[e.exoId] = e.exoDesc;
  });

  return (
    <>
      {workout ? (
        <Box
          p={5}
          minH={{ sm: "auto", md: "300px" }}
          minW={{ sm: "auto", md: "300px" }}
          shadow="md"
          borderWidth="1px"
        >
          <Flex flexDirection={"column"} align="center">
            <Box mb={"auto"}>
              <Flex ml="auto" align="center">
                <Box ml={"auto"}>
                  <Text>{workout.workoutType}</Text>
                </Box>
              </Flex>
              {workout?.workoutDetails?.map((d) =>
                !d ? null : (
                  <>
                    <Heading as="h3" size="md" letterSpacing={"-.1rem"}>
                      {exoIdtoExoDesc[d.exoId]}{" "}
                    </Heading>
                    {d.exoDetail.map((e) =>
                      !e ? null : (
                        <Text>
                          {e.sets} Sets: {e.reps} Reps @ {e.weight}kg
                        </Text>
                      )
                    )}
                  </>
                )
              )}
            </Box>
          </Flex>
        </Box>
      ) : null}
    </>
  );
};
