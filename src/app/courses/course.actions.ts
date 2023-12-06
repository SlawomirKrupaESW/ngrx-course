import { createAction, props } from "@ngrx/store";

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
  );

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded',
  props<{courses: any[]}>()
);