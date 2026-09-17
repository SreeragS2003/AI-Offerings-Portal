import { Offering } from "@/types";

export default function searchFunction(o : Offering, q : string) {
    return !q ||
      o.name.toLowerCase().includes(q) ||
      o.tagline.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.category.toLowerCase().includes(q);
}