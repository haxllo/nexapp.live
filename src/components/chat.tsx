"use client";

import Link from "next/link";

import { ChatDemo } from "@/components/chat-demo";
import type { ReactNode } from "react";

type Fact = {
  title: string;
  body: string;
  icon: ReactNode;
};

const facts: Fact[] = [
  {
    title: "Attach the files",
    body: "Up to three small text files travel with the message you send. Nothing else is read.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z" />
      </svg>
    ),
  },
  {
    title: "Include the machine",
    body: "Basic Windows facts, on request, toggled from the composer.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z" />
      </svg>
    ),
  },
  {
    title: "Keep the keys",
    body: "Point it at any OpenAI-compatible endpoint. The key is stored with DPAPI on this PC.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
      </svg>
    ),
  },
];

export function ChatStory() {
  return (
    <section className="ln-section" id="chat" data-testid="chat-section">
      <div className="ln-shell">
        <div className="ln-split ">
          <div>
            <span className="ln-section-label">
              <span className="ln-dot" style={{ background: "var(--ln-blue)" }} />
              <span className="ln-num">3.0</span>
              Chat
            </span>
            <h2 className="ln-h2">Ask your PC a question.</h2>
            <p className="ln-lede">
              <strong>The same panel, a different surface.</strong>{" "}
              Bring your own endpoint, attach up to three text files, and keep the
              conversation in a local workspace.
            </p>
            <div className="ln-points">
              {facts.map((fact) => (
                <div key={fact.title} className="ln-point">
                  <span className="ln-point-icon">{fact.icon}</span>
                  <div>
                    <h3>{fact.title}</h3>
                    <p>{fact.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ln-links">
              <Link
                className="ln-btn ln-btn-secondary ln-btn-sm"
                data-testid="chat-features-link"
                href="/features"
              >
                See the full feature list
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="ln-frame">
            <div className="ln-desk ln-desk-dark ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="ln-desk-bg" src="/nex-coast.jpg" alt="" aria-hidden="true" />
              <div className="ln-desk-shade" aria-hidden="true" />
              <ChatDemo prefix="story-chat" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
