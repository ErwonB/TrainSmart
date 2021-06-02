import {
  Resolver,
  Query,
  UseMiddleware,
  Ctx,
  FieldResolver,
  Root,
  ObjectType,
  Field,
  Mutation,
  Arg,
  Int,
} from "type-graphql";
import { Template } from "../entities/Template";
import { isAuth } from "../middleware/isAuth";
import { MyContext } from "../types";
import { TemplateDetail } from "../entities/TemplateDetail";
import { FieldError } from "./FieldError";
import { TemplateInput } from "./TemplateInput";

@ObjectType()
export class TemplateResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Template, { nullable: true })
  template?: Template;
}

@Resolver(Template)
export class TemplateResolver {
  @FieldResolver(() => [TemplateDetail], { nullable: true })
  templateDetails(
    @Root() template: Template,
    @Ctx() { templateLoader }: MyContext
  ) {
    return templateLoader.load(template.id);
  }

  @Query(() => Template, { nullable: true })
  @UseMiddleware(isAuth)
  async template(@Arg("templateId", () => Int) templateId: number) {
    const template = await Template.findOne(templateId);
    return template;
  }

  @Query(() => [Template], { nullable: true })
  @UseMiddleware(isAuth)
  async templates(@Ctx() { req }: MyContext) {
    const templates = await Template.find({
      where: { userId: req.session.userId },
    });
    return templates;
  }

  @Mutation(() => TemplateResponse)
  @UseMiddleware(isAuth)
  async createTemplate(
    @Arg("options") options: TemplateInput,
    @Ctx() { req }: MyContext
  ): Promise<TemplateResponse> {
    const template = new Template();
    template.userId = req.session.userId;
    template.templateType = options.templateType;
    template.name = options.name;
    await template.save();
    options.templateDetails.forEach(async (item) => {
      const templateDetail = new TemplateDetail();
      templateDetail.exoId = parseInt(item.exoId, 10);
      templateDetail.exoDetail = item.exoDetail;
      templateDetail.template = template;

      await templateDetail.save();
    });
    return { template };
  }

  @Mutation(() => TemplateResponse)
  @UseMiddleware(isAuth)
  async editTemplate(
    @Arg("id", () => Int) id: number,
    @Arg("options") options: TemplateInput,
    @Ctx() { req }: MyContext
  ): Promise<TemplateResponse> {
    const template = await Template.findOne(id);
    if (!template) {
      return {
        errors: [
          { field: "templateType", message: "Could not retrieve template" },
        ],
      };
    }
    if (template.userId !== req.session.userId) {
      throw new Error("not authorized");
    }

    template.templateType = options.templateType;
    template.name = options.name;
    await template.save();
    await TemplateDetail.delete({ templateId: id });
    options.templateDetails.forEach(async (item) => {
      const templateDetail = new TemplateDetail();
      templateDetail.exoId = parseInt(item.exoId, 10);
      templateDetail.exoDetail = item.exoDetail;
      templateDetail.template = template;

      await templateDetail.save();
    });
    return { template };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async deleteTemplate(@Arg("id", () => Int) id: number): Promise<boolean> {
    // not cascade way
    const template = await Template.findOne(id);
    if (!template) {
      return false;
    }

    await TemplateDetail.delete({ templateId: id });
    await Template.delete({ id });

    return true;
  }
}
