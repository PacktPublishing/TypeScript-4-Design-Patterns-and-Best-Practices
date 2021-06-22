import { of, from } from "rxjs";
import { filter, map, pluck, mapTo } from "rxjs/operators";
// map
of(1, 2, 3, 4, 5)
  .pipe(map((v: number) => v * 2))
  .subscribe((v: number) => console.log(`Value transformed: ${v}`));
// filter
of(1, 2, 3, 4, 5)
  .pipe(filter((v: number) => v % 2 == 0))
  .subscribe((v: number) => console.log(`Value transformed: ${v}`));
// pluck
from([
  {
    id: 1,
    name: "Theo",
  },
  {
    id: 2,
    name: "Alex",
  },
])
  .pipe(pluck("name"))
  .subscribe((v: string) => console.log(`Value plucked: ${v}`));

from([
  {
    id: 1,
    name: "Theo",
  },
  {
    id: 2,
    name: "Alex",
  },
])
  .pipe(map((v) => v.name))
  .subscribe((v: string) => console.log(`Value plucked: ${v}`));
