import type { MultiToBVecOpV, ToBVecOpV } from "./api";
import { defFnOp } from "./internal/codegen";

export const [isInf, isInf2, isInf3, isInf4] = defFnOp<
    MultiToBVecOpV,
    ToBVecOpV
>("!isFinite");
