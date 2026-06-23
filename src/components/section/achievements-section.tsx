import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AchievementsSection() {
  return (
    <section id="achievements" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Achievements
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Impact at Scale
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              From national competitions to community leadership — building
              products and programs that create measurable outcomes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DATA.achievements.map((achievement, id) => (
            <BlurFade
              key={achievement.title}
              delay={BLUR_FADE_DELAY * 15 + id * 0.05}
            >
              <div className="border border-border rounded-xl p-6 h-full hover:ring-2 hover:ring-muted transition-all duration-200 flex flex-col gap-3">
                <div className="text-3xl font-bold tracking-tighter text-primary">
                  {achievement.metric}
                </div>
                <h3 className="font-semibold leading-tight">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {achievement.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
