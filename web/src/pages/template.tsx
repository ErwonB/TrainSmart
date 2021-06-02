import { Button, Flex, Select, FormLabel, FormControl } from "@chakra-ui/core";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import {
  TemplateInput,
  useCreateTemplateMutation,
  useEditTemplateMutation,
  useExoQuery,
  useTemplatesQuery,
} from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";
import * as yup from "yup";
import { useApolloClient } from "@apollo/client";
import { BodyFormik } from "../components/BodyFormik";

const validationSchema = yup.object({
  templateDetails: yup.array().of(
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

const CreateTemplate: React.FC<{}> = ({}) => {
  const router = useRouter();
  const apolloClient = useApolloClient();
  useIsAuth();
  const [createTemplate] = useCreateTemplateMutation();
  const [editTemplate] = useEditTemplateMutation();
  const { data: templates } = useTemplatesQuery();
  const { data: exo } = useExoQuery();
  const [templateFct, setTemplateFct] = useState<"create" | "update">("create");
  const [templateId, setTemplateId] = useState<number>(0);
  const [tpInput, setTpInput] = useState<TemplateInput>({
    templateType: "",
    name: "",
    templateDetails: [],
  });
  const exoItems = exo?.exo?.map((e) => {
    return (
      <option value={e.exoId} key={e.exoId}>
        {e.exoDesc}
      </option>
    );
  });
  const initValueForm: Record<number, TemplateInput> = {};
  const templatesName = templates?.templates?.map((t) => {
    initValueForm[t.id] = {
      templateType: t.templateType,
      name: t.name,
      templateDetails: t.templateDetails.map((td) => {
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

  return (
    <Layout>
      <Formik
        enableReinitialize={true}
        initialValues={tpInput}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          if (templateFct === "create") {
            await createTemplate({
              variables: { options: values },
              update: (cache) => {
                cache.evict({ fieldName: "templates:{}" });
              },
            });
          } else {
            await editTemplate({
              variables: { id: templateId, options: values },
              update: (cache) => {
                cache.evict({ fieldName: "templates:{}" });
              },
            });
          }
          await apolloClient.resetStore();
          router.push("/");
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Flex>
              <InputField
                name="templateType"
                placeholder="Template Type"
                label="Template Type"
              />
              <InputField
                name="name"
                placeholder="Template name"
                label="Template name"
              />
              {templates?.templates?.length !== 0 ? (
                <FormControl>
                  <FormLabel htmlFor="templatesName">Template List</FormLabel>
                  <Field
                    as={Select}
                    name="templatesName"
                    label="Template List"
                    type="select"
                    onChange={(t) => {
                      if (parseInt(t.target.value, 10) === 0) {
                        setTemplateId(0);
                        setTemplateFct("create");
                        setTpInput({
                          templateType: "",
                          name: "",
                          templateDetails: [],
                        });
                      } else {
                        setTemplateId(parseInt(t.target.value, 10));
                        setTemplateFct("update");
                        // values = initValueForm[t.target.value];
                        setTpInput(initValueForm[t.target.value]);
                      }
                    }}
                  >
                    <option value="0" key="0"></option>
                    {templatesName}
                  </Field>
                </FormControl>
              ) : null}
            </Flex>
            <BodyFormik
              valuesArray={values.templateDetails}
              nameFieldArray="templateDetails"
            />
            {templateFct === "create" ? (
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                create template
              </Button>
            ) : (
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                variantColor="teal"
              >
                update template
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withApollo({ ssr: false })(CreateTemplate);
