import DataLoader from "dataloader";
import { GenericWorkoutDetail } from "../entities/GenericWorkoutDetail";
import { In } from "typeorm";

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createGenericWorkoutLoader = () =>
  new DataLoader<number, [GenericWorkoutDetail]>(async (ids) => {
    const genericWorkoutDetails = (await GenericWorkoutDetail.find({
      genericWorkoutId: In(ids as number[]),
    })) as GenericWorkoutDetail[];
    const genericWorkoutIdtoGenericWorkoutDetail: Record<
      number,
      [GenericWorkoutDetail]
    > = {};
    genericWorkoutDetails.forEach((u) => {
      if (
        genericWorkoutIdtoGenericWorkoutDetail.hasOwnProperty(
          u.genericWorkoutId
        )
      ) {
        genericWorkoutIdtoGenericWorkoutDetail[u.genericWorkoutId].push(u);
      } else {
        genericWorkoutIdtoGenericWorkoutDetail[u.genericWorkoutId] = [u];
      }
    });
    const sortedGenericWorkoutDetails = ids.map(
      (id) => genericWorkoutIdtoGenericWorkoutDetail[id]
    );
    return sortedGenericWorkoutDetails;
  });
