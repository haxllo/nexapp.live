"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  CaretDown,
  Check,
  Copy,
  Monitor,
  Paperclip,
  Plus,
  X,
} from "@/components/icons";

type Message = { id: number; text: string };

const chips = [
  { label: "Think through an idea", prompt: "Help me think through an idea for " },
  { label: "Explain something clearly", prompt: "Explain clearly how " },
];

export function ChatDemo() {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [copied, setCopied] = useState(false);
  const [attached, setAttached] = useState(false);
  const [withPc, setWithPc] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function send() {
    const text = draft.trim();
    if (!text) return;
    setMessages((current) => [...current, { id: Date.now(), text }]);
    setDraft("");
    setAttached(false);
    setWithPc(false);
  }

  function reset() {
    setMessages([]);
    setDraft("");
    setCopied(false);
    inputRef.current?.focus();
  }

  async function copyTranscript() {
    const text = messages.length
      ? messages.map((message) => `You: ${message.text}`).join("\n")
      : "Chat with Nex";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="glass-panel flex h-[420px] w-full max-w-[500px] flex-col overflow-hidden rounded-[12px] transition-[border-color,box-shadow] duration-200">
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-white/[0.09] px-2.5">
        <a
          href="#top"
          aria-label="Back to the search preview"
          className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] text-white/65 transition-colors hover:bg-white/[0.08] hover:text-white"
        >
          <ArrowLeft size={14} aria-hidden />
        </a>
        <span className="text-[12.5px] font-medium text-white">Chat</span>
        <span className="ml-0.5 inline-flex h-6 items-center gap-1 rounded-[6px] border border-white/15 bg-white/[0.06] px-2 text-[10px] text-white/75">
          ChatGPT
          <span aria-hidden className="text-white/35">
            ·
          </span>
          gpt-6-luna
          <CaretDown size={9} aria-hidden className="text-white/50" />
        </span>
        <span className="ml-auto flex items-center gap-0.5">
          <button
            type="button"
            onClick={copyTranscript}
            aria-label={copied ? "Copied transcript" : "Copy transcript"}
            className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            {copied ? <Check size={13} aria-hidden /> : <Copy size={13} aria-hidden />}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="New conversation"
            className="inline-flex h-7 w-7 items-center justify-center rounded-[6px] text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <Plus size={14} aria-hidden />
          </button>
        </span>
      </div>

      {messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div aria-hidden className="flex items-end gap-[3px]">
            <span className="h-2 w-[3px] rounded-full bg-[#4c8dff]" />
            <span className="h-4 w-[3px] rounded-full bg-[#4c8dff]" />
            <span className="h-3 w-[3px] rounded-full bg-[#4c8dff]" />
            <span className="h-[22px] w-[3px] rounded-full bg-[#4c8dff]" />
            <span className="h-3 w-[3px] rounded-full bg-[#4c8dff]" />
          </div>
          <h3 className="mt-4 text-[20px] font-medium tracking-[-0.02em] text-white">
            What&apos;s on your mind?
          </h3>
          <p className="mt-2 max-w-[300px] text-[12px] leading-[1.6] text-white/65">
            Ask a question, work through an idea, or paste something you want to
            understand.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {chips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                onClick={() => {
                  setDraft(chip.prompt);
                  inputRef.current?.focus();
                }}
                className="inline-flex h-7 items-center gap-1.5 rounded-[7px] border border-white/15 bg-white/[0.05] px-2.5 text-[10.5px] text-white/75 transition-colors hover:bg-white/[0.1] hover:text-white"
              >
                {chip.label}
                <ArrowUpRight size={10} aria-hidden className="text-white/45" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="ml-auto max-w-[82%] rounded-[10px] border border-[#5b9bff]/25 bg-[#5b9bff]/15 px-3 py-2 text-[12px] leading-[1.55] text-white"
            >
              {message.text}
            </div>
          ))}
          <p className="mono pt-1 text-[10px] leading-relaxed text-white/60">
            Preview only. Connect a provider in Nex to get an answer.
          </p>
        </div>
      )}

      <div className="shrink-0 border-t border-white/[0.09] px-2.5 py-2">
        {(attached || withPc) && (
          <div className="flex flex-wrap gap-1.5 px-1 pb-2">
            {attached && (
              <button
                type="button"
                onClick={() => setAttached(false)}
                aria-label="Remove notes.md from context"
                className="mono inline-flex h-5 items-center gap-1 rounded-[4px] border border-white/15 bg-white/[0.07] px-1.5 text-[9px] text-white/75 transition-colors hover:text-white"
              >
                notes.md
                <X size={8} aria-hidden className="text-white/45" />
              </button>
            )}
            {withPc && (
              <button
                type="button"
                onClick={() => setWithPc(false)}
                aria-label="Stop including PC facts"
                className="mono inline-flex h-5 items-center gap-1 rounded-[4px] border border-white/15 bg-white/[0.07] px-1.5 text-[9px] text-white/75 transition-colors hover:text-white"
              >
                This PC
                <X size={8} aria-hidden className="text-white/45" />
              </button>
            )}
          </div>
        )}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setAttached((value) => !value)}
            aria-pressed={attached}
            aria-label="Attach notes.md to the next message"
            className={`inline-flex h-7 w-7 items-center justify-center rounded-[6px] transition-colors hover:bg-white/[0.08] hover:text-white ${
              attached ? "bg-white/[0.1] text-[#8fb6ff]" : "text-white/55"
            }`}
          >
            <Paperclip size={14} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setWithPc((value) => !value)}
            aria-pressed={withPc}
            aria-label="Include basic PC facts with the next message"
            className={`inline-flex h-7 w-7 items-center justify-center rounded-[6px] transition-colors hover:bg-white/[0.08] hover:text-white ${
              withPc ? "bg-white/[0.1] text-[#8fb6ff]" : "text-white/55"
            }`}
          >
            <Monitor size={14} aria-hidden />
          </button>
          <input
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                send();
              }
            }}
            placeholder="Message Nex..."
            aria-label="Message the chat preview"
            className="h-8 min-w-0 flex-1 bg-transparent px-1.5 text-[12.5px] text-white caret-[#8fb6ff] outline-none placeholder:text-white/55 focus-visible:outline-none"
          />
          <button
            type="button"
            onClick={() => {
              if (draft.trim()) send();
              else inputRef.current?.focus();
            }}
            aria-label={draft.trim() ? "Send message" : "Focus the message field"}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2f6bff] text-white shadow-[0_2px_8px_rgba(47,107,255,0.35)] transition-colors duration-200 hover:bg-[#4a82ff]"
          >
            <ArrowUp size={13} weight="bold" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
