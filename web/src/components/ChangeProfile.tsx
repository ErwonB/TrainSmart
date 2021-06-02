import React from "react";
import { Box, Button, FormControl, FormLabel, Select } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import {
  RegularProfileFragment,
  useChangeProfileMutation,
} from "../generated/graphql";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { InputField } from "./InputField";

interface ChangeProfileProps {
  profile: RegularProfileFragment | null;
}

const validationSchema = yup.object({
  trainingFrequency: yup.number().positive(),
});

export const ChangeProfile: React.FC<ChangeProfileProps> = ({ profile }) => {
  const apolloClient = useApolloClient();
  const router = useRouter();
  const [changeProfile] = useChangeProfileMutation();

  return (
    <Box mr={{ sd: "none", md: "30%" }} ml={{ sd: "none", md: "30%" }}>
      <Formik
        initialValues={
          !profile
            ? {
                lang_cd: "FR",
                trainingFrequency: 0,
                trainingType: "",
                sex: "M",
              }
            : {
                lang_cd: profile.lang_cd,
                trainingType: profile.trainingType,
                trainingFrequency: profile.trainingFrequency,
                sex: profile.sex,
              }
        }
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await changeProfile({
            variables: {
              options: {
                lang_cd: values.lang_cd,
                trainingType: values.trainingType,
                trainingFrequency: values.trainingFrequency,
                sex: values.sex,
              },
            },
          });
          await apolloClient.resetStore();
          router.push("/");
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <FormControl>
              <FormLabel htmlFor="lang_cd">Language</FormLabel>
              <Field as={Select} name="lang_cd" label="Language" type="select">
                <option value="FR" key="FR">
                  FR
                </option>
                <option value="EN" key="EN">
                  EN
                </option>
              </Field>
            </FormControl>
            <InputField
              name="trainingFrequency"
              placeholder="Training Frequency"
              label="Training Frequency"
              type="number"
            />
            <InputField
              name="trainingType"
              placeholder="Training Type"
              label="Training Type"
            />
            <FormControl>
              <FormLabel htmlFor="sex">Sex</FormLabel>
              <Field as={Select} name="sex" label="Sex" type="select">
                <option value="M" key="M">
                  M
                </option>
                <option value="F" key="F">
                  F
                </option>
              </Field>
            </FormControl>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              change profile
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
