import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Questions() {
  return (
    <div className=" flex items-center justify-center mt-10 mb-10 ">
      <div className="grid  lg:grid-cols-2 grid-rows-1 gap-10  max-w-6xl w-full px-4">
        <h2 className="text-black dark:text-white text-4xl text-center lg:text-left sm:text-5xl md:text-6xl lg:text-7xl  font-bold font-raleway">
          Frequently <br /> Asked <br /> Questions
        </h2>
        <div>
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the Awesome UI Dark Template by FasterUI?
              </AccordionTrigger>
              <AccordionContent>
                It’s a premium Webflow template designed by FasterUI, featuring
                a sleek dark theme, modern layouts, and smooth interactions
                tailored for creative agencies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is the Awesome UI Dark Template responsive?
              </AccordionTrigger>
              <AccordionContent>
                Yes, FasterUI designed it to be fully responsive across desktop,
                tablet, and mobile devices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do I get support with this template?
              </AccordionTrigger>
              <AccordionContent>
                Yes, FasterUI provides documentation and free support to help
                you get started quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
