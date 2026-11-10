"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  eventData?: Record<string, string>;
};

/**
 * An outbound link that records a Vercel Analytics event on click.
 * Keeps pages as server components so they can export metadata.
 */
export default function TrackedLink({ event, eventData, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, eventData);
        onClick?.(e);
      }}
    />
  );
}
