"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

import { ChatDemo } from "@/components/chat-demo";
import { LauncherDemo } from "@/components/launcher-demo";
import { MediaDemo } from "@/components/media-demo";

type Mode = "launcher" | "chat" | "media";

const modeOrder: Mode[] = ["launcher", "chat", "media"];

const modeAliases: Record<string, Mode> = {
  launcher: "launcher",
  search: "launcher",
  chat: "chat",
  media: "media",
};

const modeShortcuts: Record<string, Mode> = {
  "1": "launcher",
  "2": "chat",
  "3": "media",
};

export function DemoShowcase() {
  const [mode, setMode] = useState<Mode>("launcher");
  const [version, setVersion] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const onMode = (event: Event) => {
      const next = modeAliases[(event as CustomEvent<string>).detail];
      if (!next) return;
      setMode(next);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey) {
        const next = modeShortcuts[event.key];
        if (next) {
          event.preventDefault();
          setMode(next);
          return;
        }
      }

      if (event.key === "Escape") {
        setMode((current) => (current === "launcher" ? current : "launcher"));
      }
    };

    window.addEventListener("nex-mode", onMode);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("nex-mode", onMode);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function onTabKeyDown(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = -1;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % modeOrder.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + modeOrder.length) % modeOrder.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = modeOrder.length - 1;
    } else if (event.key === "Escape") {
      nextIndex = 0;
    } else {
      return;
    }

    event.preventDefault();
    setMode(modeOrder[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="ln-showcase" id="experience" data-testid="demo-showcase">
      <div className="ln-showcase-bar">
        <div className="ln-tabs" role="tablist" aria-label="Preview modes">
          <button
            type="button"
            role="tab"
            className="ln-tab"
            aria-selected={mode === "launcher"}
            data-testid="demo-tab-launcher"
            ref={(node) => {
              tabRefs.current[0] = node;
            }}
            onClick={() => setMode("launcher")}
            onKeyDown={(event) => onTabKeyDown(event, 0)}
          >
            {mode === "launcher" && <span className="ln-tab-bg" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
            <span>Launcher</span>
            <kbd>Alt 1</kbd>
          </button>
          <button
            type="button"
            role="tab"
            className="ln-tab"
            aria-selected={mode === "chat"}
            data-testid="demo-tab-chat"
            ref={(node) => {
              tabRefs.current[1] = node;
            }}
            onClick={() => setMode("chat")}
            onKeyDown={(event) => onTabKeyDown(event, 1)}
          >
            {mode === "chat" && <span className="ln-tab-bg" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
            </svg>
            <span>Chat</span>
            <kbd>Alt 2</kbd>
          </button>
          <button
            type="button"
            role="tab"
            className="ln-tab"
            aria-selected={mode === "media"}
            data-testid="demo-tab-media"
            ref={(node) => {
              tabRefs.current[2] = node;
            }}
            onClick={() => setMode("media")}
            onKeyDown={(event) => onTabKeyDown(event, 2)}
          >
            {mode === "media" && <span className="ln-tab-bg" />}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z" />
            </svg>
            <span>Media</span>
            <kbd>Alt 3</kbd>
          </button>
        </div>
        <span className="ln-showcase-note" data-testid="demo-live-indicator">
          Interactive preview · built in the browser, not a screenshot
        </span>
      </div>
      <div className="ln-frame">
        <div className="ln-desk">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="ln-desk-bg"
            src="/nex-coast.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="ln-desk-shade" aria-hidden="true" />
          <span className="ln-desk-key" aria-hidden="true">
            <kbd>Win</kbd> opens Nex
          </span>
          <div
            key={`${mode}-${version}`}
            className="ln-materialize"
            style={{ width: "100%", display: "grid", justifyItems: "center" }}
            data-testid={`demo-panel-${mode}`}
          >
            {mode === "launcher" ? (
              <LauncherDemo />
            ) : mode === "chat" ? (
              <ChatDemo onBack={() => setMode("launcher")} />
            ) : (
              <MediaDemo active={mode === "media"} />
            )}
          </div>
          <div className="ln-desk-taskbar" aria-hidden="true">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M104,144v51.64a8,8,0,0,1-8,8,8.54,8.54,0,0,1-1.43-.13l-64-11.64A8,8,0,0,1,24,184V144a8,8,0,0,1,8-8H96A8,8,0,0,1,104,144Zm-2.87-89.78a8,8,0,0,0-6.56-1.73l-64,11.64A8,8,0,0,0,24,72v40a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V60.36A8,8,0,0,0,101.13,54.22ZM208,136H128a8,8,0,0,0-8,8v57.45a8,8,0,0,0,6.57,7.88l80,14.54A7.61,7.61,0,0,0,208,224a8,8,0,0,0,8-8V144A8,8,0,0,0,208,136Zm5.13-102.14a8,8,0,0,0-6.56-1.73l-80,14.55A8,8,0,0,0,120,54.55V112a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40A8,8,0,0,0,213.13,33.86Z" />
              </svg>
            </span>
            <span className="is-on">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" />
              </svg>
            </span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M212.92,17.69a8,8,0,0,0-6.86-1.45l-128,32A8,8,0,0,0,72,56V166.08A36,36,0,1,0,88,196V110.25l112-28v51.83A36,36,0,1,0,216,164V24A8,8,0,0,0,212.92,17.69ZM52,216a20,20,0,1,1,20-20A20,20,0,0,1,52,216ZM88,93.75V62.25l112-28v31.5ZM180,184a20,20,0,1,1,20-20A20,20,0,0,1,180,184Z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
        <button
          type="button"
          className="ln-btn ln-btn-ghost ln-btn-sm"
          data-testid="demo-reset"
          onClick={() => {
            setVersion((value) => value + 1);
            setMode("launcher");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a96,96,0,0,1-94.71,96H128A95.38,95.38,0,0,1,62.1,197.8a8,8,0,0,1,11-11.63A80,80,0,1,0,71.43,71.39a3.07,3.07,0,0,1-.26.25L44.59,96H72a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0V85.8L60.25,60A96,96,0,0,1,224,128Z" />
          </svg>
          Start fresh
        </button>
      </div>
    </div>
  );
}
