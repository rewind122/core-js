import { isString } from "../utils";
import { getNode } from "./getNode";

export function endScroll(node){
  if(isString(node)) node = getNode(node);
  return node.scrollTop = node.scrollHeight;
}