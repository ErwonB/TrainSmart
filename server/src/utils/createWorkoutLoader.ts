import DataLoader from "dataloader";
import {WorkoutDetail} from "../entities/WorkoutDetail";
import {In} from "typeorm";

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createWorkoutLoader = () =>
  new DataLoader<number, [ WorkoutDetail ]>(async (ids) => {
    const workoutDetails = await WorkoutDetail.find({"workoutId": In(ids as number[])}) as WorkoutDetail[]
    const workoutIdtoWorkoutDetail: Record<number, [WorkoutDetail]> = {};
    workoutDetails.forEach((u) => {
      if(workoutIdtoWorkoutDetail.hasOwnProperty(u.workoutId)) {
        workoutIdtoWorkoutDetail[u.workoutId].push(u)
        } else {
      workoutIdtoWorkoutDetail[u.workoutId] = [u];
      }
    });
    const sortedWorkoutDetails = ids.map((id) => workoutIdtoWorkoutDetail[id]);
    return sortedWorkoutDetails;
  });
