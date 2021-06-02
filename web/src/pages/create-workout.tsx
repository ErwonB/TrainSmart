import {
  Box,
  Button,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/core";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import {
  useCreateWorkoutMutation,
  useTemplatesQuery,
  WorkoutInput,
  useGenericWorkoutsQuery,
} from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";
import * as yup from "yup";
import { BodyFormik } from "../components/BodyFormik";

const validationSchema = yup.object({
  workoutDt: yup
    .date()
    .required()
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

const CreateWorkout: React.FC<{}> = ({}) => {
  const router = useRouter();
  useIsAuth();
  const [createWorkout] = useCreateWorkoutMutation();
  const { data: templates } = useTemplatesQuery();
  const { data: genericWorkouts } = useGenericWorkoutsQuery();
  const [tpInput, setTpInput] = useState<WorkoutInput>({
    workoutType: "",
    workoutDt: "",
    workoutDesc: "",
    workoutDetails: [],
  });
  const initValueForm: Record<number, WorkoutInput> = {};
  const templatesName = templates?.templates?.map((t) => {
    initValueForm[t.id] = {
      workoutType: t.templateType,
      workoutDt: "",
      workoutDesc: "",
      workoutDetails: t.templateDetails.map((td) => {
        return {
          exoId: "" + td.exoId,
          exoDetail: td.exoDetail.map((e) => {
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
      }),
    };

    return (
      <option value={t.id} key={t.id}>
        {t.name}
      </option>
    );
  });
  const genericWorkoutNames = genericWorkouts?.genericWorkouts?.map((t) => {
    initValueForm[t.id] = {
      workoutType: t.trainingType,
      workoutDt: "",
      workoutDesc: "",
      workoutDetails: t.genericWorkoutDetails.map((td) => {
        return {
          exoId: "" + td.exoId,
          exoDetail: td.exoDetail.map((e) => {
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
      }),
    };

    return (
      <option value={t.id} key={t.id}>
        {t.trainingType + "_" + t.id }
      </option>
    );
  });
console.log("genericWorkouts", genericWorkouts)
  return (
    <Layout>
      <Box mr={{ sd: "none", md: "15%" }} ml={{ sd: "none", md: "15%" }}>
        <Formik
          enableReinitialize={true}
          initialValues={tpInput}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            const { errors } = await createWorkout({
              variables: { options: values },
              update: (cache) => {
                cache.evict({ fieldName: "workouts:{}" });
              },
            });
            if (!errors) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <Box mb={4} display={{ sm: "block", md: "flex" }}>
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
                {templates?.templates?.length !== 0 || genericWorkouts?.genericWorkouts?.length !== 0 ? (
                  <FormControl ml={{ sm: "none", md: "auto" }}>
                    <FormLabel htmlFor="templatesName">Template List</FormLabel>
                    <Field
                      as={Select}
                      name="templatesName"
                      label="Template List"
                      type="select"
                      onChange={(t: any) => {
                        if (parseInt(t.target.value, 10) === 0) {
                          setTpInput({
                            workoutType: "",
                            workoutDesc: "",
                            workoutDt: "",
                            workoutDetails: [],
                          });
                        } else {
                          setTpInput(initValueForm[t.target.value]);
                        }
                      }}
                    >
                      <option value="0" key="0"></option>
                      {templatesName}
                      {genericWorkoutNames}
                    </Field>
                  </FormControl>
                ) : null}
              </Box>
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
                create workout
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateWorkout);
