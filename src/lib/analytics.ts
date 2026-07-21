/**
 * Meta Pixel (Facebook) analytics helpers.
 *
 * The base pixel snippet + `fbq('init', ...)` + initial `PageView` live in the
 * static HTML entry points (index.html, mlo.html, homeservices.html,
 * professionals.html). This module provides a typed, safe wrapper around the
 * global `fbq` so the React app can fire conversion events and per-route
 * PageViews without every call site repeating the `window.fbq && ...` guard.
 */

type FbqFn = (
  command: "track" | "trackCustom" | "init",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    fbq?: FbqFn;
  }
}

/** Fire a standard Meta Pixel event, no-op if the pixel failed to load / is blocked. */
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>,
): void => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  try {
    window.fbq("track", eventName, params);
  } catch {
    /* pixel blocked or not ready — swallow */
  }
};

/** A lead was captured (contact form / landing-page modal submit). */
export const trackLead = (params?: Record<string, unknown>): void =>
  trackEvent("Lead", params);

/** A visitor initiated contact (e.g. clicked to email/call). */
export const trackContact = (params?: Record<string, unknown>): void =>
  trackEvent("Contact", params);

/** A visitor moved to book a call (Calendly / demo request). */
export const trackSchedule = (params?: Record<string, unknown>): void =>
  trackEvent("Schedule", params);

/**
 * Fire a PageView. Needed for SPA route changes: the pixel snippet only fires
 * PageView once on the initial HTML load, so client-side navigations are
 * invisible to Meta without this.
 */
export const trackPageView = (): void => trackEvent("PageView");
