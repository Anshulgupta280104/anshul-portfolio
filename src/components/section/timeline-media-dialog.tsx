/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { RefObject } from "react";

interface TimelineMediaDialogProps {
  heading: string;
  image: string;
  label?: string;
  dialogRef?: RefObject<HTMLDialogElement | null>;
  hidden?: boolean;
}

export function TimelineMediaDialog({
  heading,
  image,
  label = "View Highlights",
  dialogRef,
  hidden = false,
}: TimelineMediaDialogProps) {
  return (
    <>
      {!hidden && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-fit mt-1"
          onClick={() => dialogRef?.current?.showModal()}
        >
          {label}
        </Button>
      )}
      <dialog
        ref={dialogRef}
        className="fixed left-1/2 top-1/2 z-50 w-[min(92vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background p-0 shadow-2xl backdrop:bg-black/60 open:flex open:flex-col"
        onClick={(e) => {
          if (e.target === dialogRef?.current) dialogRef?.current?.close();
        }}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h4 className="font-semibold text-sm sm:text-base pr-4">{heading}</h4>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => dialogRef?.current?.close()}
          >
            Close
          </Button>
        </div>
        <div className="p-4">
          <img
            src={image}
            alt={heading}
            className="w-full rounded-lg border border-border object-contain max-h-[70vh]"
          />
        </div>
      </dialog>
    </>
  );
}
