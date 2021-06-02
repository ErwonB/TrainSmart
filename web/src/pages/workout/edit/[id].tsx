import { Box, Button, Flex } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import {
  useEditWorkoutMutation,
  useExoQuery,
  useWorkoutQuery,
} from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { withApollo } from "../../../utils/withApollo";

import * as yup from "yup";
import { BodyFormik } from "../../../components/BodyFormik";

const validationSchema = yup.object({
  workoutDt: yup
    .date()
    .max(
      new Date(new Date().setDate(new Date().getDate())),
      "Can't create a workout in the future"
    ),
  workoutDetails: yup.array().of(
    yup.object({
      exoDetail: yup.array().of(
        yup.object({
          sets: yup
            .number()
            .integer()
            .positive()
            .required("Nb sets is required"),
          reps: yup
            .number()
            .integer()
            .positive()
            .required("Nb reps is required"),
          weight: yup.number().positive().required("Weight is required"),
          grade: yup.number().positive().max(10).required("Grade is required"),
        })
      ),
    })
  ),
});

const EditWorkout = ({}) => {
  const router = useRouter();
  const intId = useGetIntId();
  const { data, loading } = useWorkoutQuery({
    skip: intId === -1,
    variables: {
      workoutId: intId,
    },
  });
  const { data: exo } = useExoQuery();
  const exoItems = exo?.exo?.map((e) => {
    return (
      <option value={e.exoId} key={e.exoId}>
        {e.exoDesc}
      </option>
    );
  });
  const [editWorkout] = useEditWorkoutMutation();
  if (loading) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (!data?.workout) {
    return (
      <Layout>
        <Box>could not find workout</Box>
      </Layout>
    );
  }
  let workoutDetailsClean = data.workout.workoutDetails.map((w) => {
    return {
      exoId: "" + w.exoId,
      exoDetail: w.exoDetail.map((e) => {
        return {
          sets: e.sets,
          reps: e.reps,
          weight: e.weight,
          grade: e.grade,
          rest: e.rest,
          feedback: e.feedback,
        };
      }),
    };
  });

  return (
    <Layout>
      <Formik
        initialValues={{
          workoutType: data.workout.workoutType,
          workoutDesc: data.workout.workoutDesc,
          workoutDt: data.workout.workoutDt,
          workoutDetails: workoutDetailsClean,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await editWorkout({
            variables: {
              id: intId,
              options: {
                workoutDt: values.workoutDt,
                workoutType: values.workoutType,
                workoutDesc: values.workoutDesc,
                workoutDetails: values.workoutDetails,
              },
            },
          });
          router.back();
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Flex>
              <InputField
                name="workoutType"
                placeholder="Workout Type"
                label="Workout Type"
              />
              <InputField
                name="workoutDt"
                type="date"
                placeholder="Workout Date"
                label="Workout Date"
              />
            </Flex>
            <BodyFormik
              valuesArray={values.workoutDetails}
              nameFieldArray="workoutDetails"
            />
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              update workout
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(EditWorkout);
