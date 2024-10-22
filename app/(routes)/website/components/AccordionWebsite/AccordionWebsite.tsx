import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { dataAccordionWebsite } from "./AccordionWebsite.data";

export function AccordionWebsite() {
  const data = dataAccordionWebsite;
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((item, index) => (
        <AccordionItem key={index} value={"index-" + index}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
