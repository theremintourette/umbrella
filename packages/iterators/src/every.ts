import { Predicate } from "@thi.ng/api/api";

import { iterator } from "./iterator";

export function every<T>(pred: Predicate<T>, input: Iterable<T>) {
    let iter = iterator(input);
    let v: IteratorResult<T>;
    let empty = true;
    while (((v = iter.next()), !v.done)) {
        if (pred(v.value) !== true) {
            return false;
        }
        empty = false;
    }
    return !empty;
}
