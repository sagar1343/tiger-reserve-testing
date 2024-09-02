import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TimelineComponent from "./TimelineComponent";

function AccordionSection() {
  return (
    <Accordion type="single" collapsible className="font-sans">
      <AccordionItem value="item-1" className="border-[#B7B7B7] border-t">
        <AccordionTrigger className="font-normal text-lg hover:no-underline">
          What to Expect ?
        </AccordionTrigger>
        <AccordionContent className="pl-6 text-[#383838] text-sm">
          <h4 className="font-medium text-black my-3 md:my-8">Itinerary</h4>
          <TimelineComponent />
          <h4 className="font-medium text-black pl-6">
            Duration: <span className="font-normal">3 Day</span>
          </h4>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-[#B7B7B7]">
        <AccordionTrigger className="font-normal text-lg hover:no-underline">
          Additional Information
        </AccordionTrigger>
        <AccordionContent className="text-[#383838] text-sm">
          <ul className="list-disc pl-6">
            <li>Infants and small children can ride in a pram or stroller </li>
            <li>Public transportation options are available nearby </li>
            <li>Specialized infant seats are available</li>
            <li>Suitable for all physical fitness levels</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionSection;
