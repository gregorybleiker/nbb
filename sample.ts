import * as jsr_nbb_tryout from "jsr:@gregb/jsr-nbb-tryout";
import * as reagent from "jsr:@gregb/jsr-nbb-tryout/reagent.core";

let r = await jsr_nbb_tryout.loadString("(+ 1 5)");

console.log(JSON.stringify(reagent));

console.log(r);
