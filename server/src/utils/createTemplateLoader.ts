import DataLoader from "dataloader";
import { TemplateDetail } from "../entities/TemplateDetail";
import { In } from "typeorm";

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createTemplateLoader = () =>
  new DataLoader<number, [TemplateDetail]>(async (ids) => {
    const templateDetails = (await TemplateDetail.find({
      templateId: In(ids as number[]),
    })) as TemplateDetail[];
    const templateIdtoTemplateDetail: Record<number, [TemplateDetail]> = {};
    templateDetails.forEach((u) => {
      if (templateIdtoTemplateDetail.hasOwnProperty(u.templateId)) {
        templateIdtoTemplateDetail[u.templateId].push(u);
      } else {
        templateIdtoTemplateDetail[u.templateId] = [u];
      }
    });
    const sortedTemplateDetails = ids.map(
      (id) => templateIdtoTemplateDetail[id]
    );
    return sortedTemplateDetails;
  });
