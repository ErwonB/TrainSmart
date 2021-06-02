import React from "react";
import { Box, Button, Flex, IconButton, Select } from "@chakra-ui/core";
import {
  TemplateDetailInput,
  useExoQuery,
  WorkoutDetailInput,
} from "../generated/graphql";
import { FieldArray, Field } from "formik";
import { InputField } from "./InputField";

interface BodyFormikProps {
  valuesArray: WorkoutDetailInput[] | TemplateDetailInput[];
  nameFieldArray: string;
}

export const BodyFormik: React.FC<BodyFormikProps> = ({
  valuesArray,
  nameFieldArray,
}) => {
  const { data: exo } = useExoQuery();

  const exoItems = exo?.exo?.map((e) => {
    return (
      <option value={e.exoId} key={e.exoId}>
        {e.exoDesc}
      </option>
    );
  });

  return (
    <FieldArray name={nameFieldArray}>
      {(arrayHelpers) => (
        <div>
          <Button
            onClick={() =>
              arrayHelpers.push({
                exoId: "",
                exoDetail: [
                  {
                    sets: "",
                    reps: "",
                    weight: "",
                    grade: "",
                    rest: 0,
                    feedback: "",
                  },
                ],
              })
            }
          >
            add exercise
          </Button>
          {valuesArray.map((unitExo, index) => {
            return (
              <Box>
                <Flex>
                  <Field
                    as={Select}
                    name={`${nameFieldArray}.${index}.exoId`}
                    type="select"
                    width={{ sm: "100%", md: "50%" }}
                  >
                    {exoItems}
                  </Field>
                  <IconButton
                    as={Button}
                    icon="delete"
                    aria-label="Delete exercise"
                    onClick={() => arrayHelpers.remove(index)}
                  />
                </Flex>
                <Box>
                  <FieldArray name="exoDetail">
                    <>
                      {unitExo.exoDetail.map((_unitExoDetail, exoIndex) => {
                        return (
                          <Flex>
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.sets`}
                              placeholder="sets"
                              label={exoIndex === 0 ? "Sets" : null}
                              type="number"
                            />
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.reps`}
                              placeholder="reps"
                              label={exoIndex === 0 ? "Reps" : null}
                              type="number"
                            />
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.weight`}
                              placeholder="weight"
                              label={exoIndex === 0 ? "Kg" : null}
                              type="number"
                            />
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.grade`}
                              placeholder="grade"
                              label={exoIndex === 0 ? "Grade" : null}
                              type="number"
                            />
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.rest`}
                              placeholder="rest"
                              label={exoIndex === 0 ? "Rest" : null}
                              type="number"
                            />
                            <InputField
                              name={`${nameFieldArray}.${index}.exoDetail.${exoIndex}.feedback`}
                              placeholder="feedback"
                              textarea
                            />
                            <IconButton
                              as={Button}
                              icon="delete"
                              aria-label="Delete Exo Detail"
                              onClick={() => {
                                unitExo.exoDetail.splice(exoIndex, 1);
                                arrayHelpers.replace(index, unitExo);
                              }}
                            />
                            <IconButton
                              as={Button}
                              icon="add"
                              aria-label="Add Exo Detail"
                              onClick={() => {
                                unitExo.exoDetail.splice(exoIndex + 1, 0, {
                                  sets: "",
                                  reps: "",
                                  weight: "",
                                  grade: "",
                                  rest: 0,
                                  feedback: "",
                                });
                                arrayHelpers.replace(index, unitExo);
                              }}
                            />
                          </Flex>
                        );
                      })}
                    </>
                  </FieldArray>
                </Box>
              </Box>
            );
          })}
        </div>
      )}
    </FieldArray>
  );
};
