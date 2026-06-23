/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { TimelineMediaDialog } from "@/components/section/timeline-media-dialog";
import { useRef } from "react";

type CareerItem = (typeof DATA.careerTimeline)[number];

function TimelineMedia({
  title,
  galleryImage,
  galleryImages,
  dialogImage,
  onDialogOpen,
}: {
  title: string;
  galleryImage?: string;
  galleryImages?: readonly string[];
  dialogImage?: string;
  onDialogOpen?: () => void;
}) {
  if (galleryImages && galleryImages.length > 0) {
    return (
      <div className="flex gap-2 shrink-0 w-full sm:w-40 md:w-48">
        {galleryImages.map((src) => (
          <img
            key={src}
            src={src}
            alt={title}
            className="flex-1 min-w-0 rounded-lg border border-border object-contain bg-muted/30 aspect-[3/4]"
          />
        ))}
      </div>
    );
  }

  const imageSrc = galleryImage || dialogImage;
  if (!imageSrc) return null;

  if (onDialogOpen) {
    return (
      <button
        type="button"
        onClick={onDialogOpen}
        className="shrink-0 w-full sm:w-44 md:w-52 rounded-lg border border-border bg-muted/30 overflow-hidden cursor-zoom-in hover:ring-2 hover:ring-muted transition-all"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-contain min-h-48 sm:min-h-56"
        />
      </button>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={title}
      className="shrink-0 w-full sm:w-44 md:w-52 rounded-lg border border-border object-contain bg-muted/30 min-h-48 sm:min-h-56"
    />
  );
}

function CareerTimelineRow({ item }: { item: CareerItem }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const galleryImage = "galleryImage" in item ? item.galleryImage : undefined;
  const galleryImages = "galleryImages" in item ? item.galleryImages : undefined;
  const dialogImage = "dialogImage" in item ? item.dialogImage : undefined;
  const mediaHeading = "mediaHeading" in item ? item.mediaHeading : undefined;
  const hasInlineMedia = !!(
    galleryImage ||
    galleryImages?.length ||
    dialogImage
  );

  return (
    <TimelineItem className="w-full flex items-start justify-between gap-6 sm:gap-10">
      <TimelineConnectItem className="flex items-start justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
          />
        ) : (
          <div className="size-10 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex items-center justify-center flex-none">
            <span className="text-xs font-bold text-primary">
              {DATA.initials}
            </span>
          </div>
        )}
      </TimelineConnectItem>
      <div className="flex flex-1 min-w-0 flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
          {item.dates && (
            <time className="text-xs text-muted-foreground">{item.dates}</time>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {item.title && (
              <h3 className="font-semibold leading-none">{item.title}</h3>
            )}
            {"win" in item && item.win && (
              <Badge className="text-xs bg-primary text-primary-foreground">
                {item.win}
              </Badge>
            )}
          </div>
          {item.location && (
            <p className="text-sm text-muted-foreground">{item.location}</p>
          )}
          {item.description && (
            <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
              {item.description}
            </p>
          )}
          {dialogImage && mediaHeading && (
            <>
              <TimelineMediaDialog
                heading={mediaHeading}
                image={dialogImage}
                dialogRef={dialogRef}
                hidden
              />
              <button
                type="button"
                onClick={() => dialogRef.current?.showModal()}
                className="text-xs text-primary hover:underline w-fit mt-1"
              >
                View full highlights
              </button>
            </>
          )}
          {item.links && item.links.length > 0 && (
            <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
              {item.links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                    {link.icon}
                    {link.title}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
        {hasInlineMedia && (
          <TimelineMedia
            title={item.title}
            galleryImage={galleryImage}
            galleryImages={galleryImages}
            dialogImage={dialogImage}
            onDialogOpen={
              dialogImage && mediaHeading
                ? () => dialogRef.current?.showModal()
                : undefined
            }
          />
        )}
      </div>
    </TimelineItem>
  );
}

export default function CareerTimelineSection() {
  return (
    <section id="timeline" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">
                Career Timeline
              </span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              My Journey So Far
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              Education, leadership, internships, and achievements — every step
              building toward product management.
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.careerTimeline.map((item) => (
            <CareerTimelineRow key={item.title + item.dates} item={item} />
          ))}
        </Timeline>
      </div>
    </section>
  );
}
