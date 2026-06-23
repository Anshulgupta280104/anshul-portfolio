import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Build Something Together
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Open to Product Management internships, associate roles, and
          cross-functional product opportunities. Based in {DATA.location}.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button asChild>
            <Link href={`mailto:${DATA.contact.email}`}>
              <Icons.email className="size-4 mr-2" />
              {DATA.contact.email}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`tel:${DATA.contact.tel.replace(/\s/g, "")}`}>
              {DATA.contact.tel}
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-4 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={DATA.contact.social.GitHub.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="size-4 mr-2" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
