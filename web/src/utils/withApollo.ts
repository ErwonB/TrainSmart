import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PaginatedWorkout } from "../generated/graphql";
import { NextPageContext } from "next";

const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            workouts: {
              keyArgs: [],
              merge(
                existing: PaginatedWorkout | undefined,
                incoming: PaginatedWorkout
              ): PaginatedWorkout {
                return {
                  ...incoming,
                  // workouts: [...(existing?.workouts || []), ...incoming.workouts],
                  // workouts: [ ...incoming.workouts],
                };
              },
            },
          },
        },
      },
    }),
  });

export const withApollo = createWithApollo(createClient);
