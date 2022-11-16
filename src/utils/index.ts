import { STYLING_CONFIGS } from "../constants/styling";

export function pxToRem(size: number) {
  if (typeof size === "number") {
    return `${Number(size / STYLING_CONFIGS.ROOT_SIZE)}rem`;
  }
  throw new Error("size is not a number. Type numbers only");
}
