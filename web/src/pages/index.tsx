import { Flex, Box, IconButton, Button, SimpleGrid } from "@chakra-ui/core";
import { ChangeProfile } from "../components/ChangeProfile";
import { DaySection } from "../components/DaySection";
import { Layout } from "../components/Layout";
import { useMeQuery, useWorkoutsQuery } from "../generated/graphql";
import { withApollo } from "../utils/withApollo";
import { EditDeleteWorkoutButtons } from "../components/EditDeleteWorkoutButtons";

const Index = () => {
  const { data, error, loading, fetchMore} = useWorkoutsQuery({
    variables: {
      sens: null,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });
  const { data: meData, loading: meLoading } = useMeQuery();

  if (!loading && !data && error && error?.message !== "not authenticated") {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }
  if (!meLoading && meData?.me?.id && !meData?.me?.profile) {
    return (
      <Layout>
        <Box>Fill out you profile before starting using trainV2</Box>
        <ChangeProfile profile={null} />
      </Layout>
    );
  }
  return (
    <Layout>
      <Flex mt={{ base: 2, md: 4 }} mb={{ base: 2, md: 4 }} align="center">
        {data && data?.workouts?.hasMorePrev ? (
          <IconButton
            as={Button}
            icon="arrow-left"
            aria-label="Go Backward"
            onClick={() => {
              fetchMore({
                variables: {
                  sens: -1,
                  cursor: data.workouts?.nextCursorValue,
                },
              });
            }}
            ml={"auto"}
            isLoading={loading}
          />
        ) : (
          <Box ml={"auto"}></Box>
        )}
        {data ? (
          <Box ml={4} mr={4}>
            Week {data?.workouts?.weekNb}
          </Box>
        ) : null}
        {data && data?.workouts?.hasMoreNext ? (
          <IconButton
            as={Button}
            icon="arrow-right"
            aria-label="Go Forward"
            onClick={() => {
              fetchMore({
                variables: {
                  sens: 1,
                  cursor: data.workouts?.nextCursorValue,
                },
              });
            }}
            mr={"auto"}
            isLoading={loading}
          />
        ) : (
          <Box mr={"auto"}></Box>
        )}
      </Flex>
      {!data && loading ? (
        <div>loading...</div>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: data?.workouts?.workouts.length }}
          spacing="10px"
        >
          {data?.workouts?.workouts.map((p, _index) =>
            !p ? null : (
              <>
                <Box m={{ sm: "none", md: "auto" }}>
                  <DaySection key={p.id} workout={p} />
                  <EditDeleteWorkoutButtons id={p.id} workoutDt={p.workoutDt} />
                </Box>
              </>
            )
          )}
        </SimpleGrid>
      )}
    </Layout>
  );
};

export default withApollo({ ssr: true })(Index);
