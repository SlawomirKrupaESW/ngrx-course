import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable()
export class CoursesResolver implements Resolve<any> {

  constructor(private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.store.pipe(
      select(selectAllCourses),
      tap(courses => {
        if (courses.length === 0) {
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter(courses => courses.length > 0),
      first()
    );
  }

}
