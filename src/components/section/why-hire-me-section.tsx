import BlurFade from "@/components/magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function WhyHireMeSection() {
  return (
    <section id="why-hire-me" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Why Hire Me
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Built for Product Teams
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              A technical product builder who understands users, ships fast, and
              collaborates across every function.
            </p>
          </div>
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <Accordion type="single" collapsible className="w-full grid gap-2">
            {DATA.whyHireMe.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`why-${index}`}
                className="w-full border border-border rounded-xl px-4 data-[state=open]:ring-2 data-[state=open]:ring-muted"
              >
                <AccordionTrigger className="hover:no-underline py-4 text-left font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
