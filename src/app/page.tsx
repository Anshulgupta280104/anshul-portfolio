/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import AchievementsSection from "@/components/section/achievements-section";
import CareerTimelineSection from "@/components/section/career-timeline-section";
import ContactSection from "@/components/section/contact-section";
import ProductThinkingSection from "@/components/section/product-thinking-section";
import ProjectsSection from "@/components/section/projects-section";
import WhyHireMeSection from "@/components/section/why-hire-me-section";
import WorkSection from "@/components/section/work-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <p className="text-lg sm:text-xl font-medium tracking-tight text-foreground">
                  {DATA.hero.headline}
                </p>
              </BlurFade>
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-base"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.hero.subheadline}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-sm"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.hero.intro}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 shrink-0">
              <Avatar className="w-28 md:w-32 h-64 md:h-80 border rounded-2xl shadow-lg ring-4 ring-muted">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                  className="h-full w-full object-cover object-top aspect-auto"
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DATA.hero.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border border-border rounded-xl p-4 text-center hover:ring-2 hover:ring-muted transition-all duration-200"
                >
                  <div className="text-2xl font-bold tracking-tighter text-primary">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-wrap gap-3">
              {DATA.hero.ctas.map((cta) => (
                <Button key={cta.label} variant={cta.variant} asChild>
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 11 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target={education.href !== "#" ? "_blank" : undefined}
                  rel={
                    education.href !== "#" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
                      />
                    ) : (
                      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {DATA.initials}
                        </span>
                      </div>
                    )}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        {education.href !== "#" && (
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" aria-hidden />
                        )}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  {education.start && (
                    <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                      <span>
                        {education.start} - {education.end}
                      </span>
                    </div>
                  )}
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <ProductThinkingSection />
      </BlurFade>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          {DATA.skillCategories.map((group, groupId) => (
            <BlurFade
              key={group.category}
              delay={BLUR_FADE_DELAY * 14 + groupId * 0.05}
            >
              <div className="flex flex-col gap-y-3">
                <h3 className="text-sm font-semibold text-muted-foreground">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2"
                    >
                      <span className="text-foreground text-sm font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <BlurFade delay={BLUR_FADE_DELAY * 16}>
        <AchievementsSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 17}>
        <CareerTimelineSection />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 18}>
        <WhyHireMeSection />
      </BlurFade>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 19}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
