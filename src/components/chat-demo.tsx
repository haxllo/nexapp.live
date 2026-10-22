"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Monitor,
  Paperclip,
  Plus,
  X,
} from "@phosphor-icons/react";

type Message = { id: number; text: string };

const suggestions = ["Think through an idea", "Explain something clearly"];

export function ChatDemo({ onBack }: { onBack: () => void }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [attached, setAttached] = useState(false);
  const [includePc, setIncludePc] = useState(false);
  const field = useRef<HTMLInputElement>(null);
  const feed = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function send() {
    if (!input.trim()) return;
    setMessages((current) => [...current, { id: Date.now(), text: input.trim() }]);
    setInput("");
    setAttached(false);
    setIncludePc(false);
    field.current?.focus();
  }

  async function copyTranscript() {
    try {
      await navigator.clipboard.writeText(
        messages.length
          ? messages.map((message) => `You: ${message.text}`).join("\n")
          : "Chat with Nex",
      );
      setCopied(true);
      setCopyError(false);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError(true);
    }
  }

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  useEffect(() => {
    feed.current?.scrollTo({ top: feed.current.scrollHeight });
  }, [messages]);

  return (
    <div className="glass-panel chat-window" data-testid="chat-demo-panel">
      <div className="chat-toolbar">
        <button
          className="glass-icon-button"
          type="button"
          onClick={onBack}
          aria-label="Back to launcher"
          title="Back to launcher"
          data-testid="chat-demo-back"
        >
          <ArrowLeft size={17} />
        </button>
        <span>Chat with Nex</span>
        <span className="chat-provider" data-testid="chat-provider-label">
          ChatGPT · gpt-6-luna
        </span>
        <div className="chat-toolbar-actions">
          <button
            className="glass-icon-button"
            type="button"
            onClick={copyTranscript}
            aria-label={copied ? "Copied transcript" : "Copy transcript"}
            title="Copy transcript"
            data-testid="chat-copy"
          >
            {copied ? <Check size={17} /> : <Copy size={17} />}
          </button>
          <button
            className="glass-icon-button"
            type="button"
            onClick={() => {
              setMessages([]);
              setInput("");
              setAttached(false);
              setIncludePc(false);
              setCopied(false);
              setCopyError(false);
              field.current?.focus();
            }}
            aria-label="New conversation"
            title="New conversation"
            data-testid="chat-reset"
          >
            <Plus size={19} />
          </button>
        </div>
      </div>

      <div className="chat-feed" ref={feed}>
        {messages.length === 0 ? (
          <div className="chat-welcome">
            <Image src="/nex-logo.png" alt="Nex" width={42} height={42} />
            <h3>What’s on your mind?</h3>
            <p>
              Ask a question, work through an idea, or paste something you want to
              understand.
            </p>
            <div className="chat-suggestions">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  data-testid={`chat-prompt-${index}`}
                  type="button"
                  onClick={() => {
                    setInput(
                      index === 0
                        ? "Help me think through an idea for "
                        : "Explain clearly how ",
                    );
                    field.current?.focus();
                  }}
                >
                  {suggestion}
                  <ArrowUpRight size={12} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="chat-messages" data-testid="chat-messages">
            {messages.map((message, index) => (
              <p
                key={message.id}
                className="chat-bubble"
                data-testid={`chat-message-${index}`}
              >
                {message.text}
              </p>
            ))}
            <p className="chat-preview-note" data-testid="chat-preview-notice">
              Preview only. Connect a provider in Nex to get an answer.
            </p>
          </div>
        )}
      </div>

      {(copied || copyError) && (
        <span role="status" className="chat-copy-status" data-testid="chat-copy-status">
          {copied
            ? "Transcript copied"
            : "Clipboard unavailable. Select the messages to copy them."}
        </span>
      )}

      <div className="chat-composer">
        {(attached || includePc) && (
          <div className="chat-context">
            {attached && (
              <button
                type="button"
                onClick={() => setAttached(false)}
                data-testid="chat-remove-attachment"
                aria-label="Remove notes.md from context"
              >
                notes.md
                <X size={11} />
              </button>
            )}
            {includePc && (
              <button
                type="button"
                onClick={() => setIncludePc(false)}
                data-testid="chat-remove-pc"
                aria-label="Stop including PC facts"
              >
                This PC
                <X size={11} />
              </button>
            )}
          </div>
        )}

        <div className="chat-composer-row">
          <input
            ref={field}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                send();
              }
            }}
            placeholder="Message Nex…"
            aria-label="Message the chat preview"
            data-testid="chat-demo-input"
          />
          <button
            className="chat-send liquid-control"
            type="button"
            onClick={send}
            disabled={!input.trim()}
            aria-label="Send message"
            data-testid="chat-demo-send"
          >
            <ArrowUp size={18} weight="bold" />
          </button>
        </div>

        <div className="chat-context-tools">
          <button
            className="glass-icon-button"
            type="button"
            onClick={() => setAttached((value) => !value)}
            aria-pressed={attached}
            aria-label="Attach notes.md to the next message"
            title="Attach notes.md"
            data-testid="chat-attach"
          >
            <Paperclip size={17} />
          </button>
          <button
            className="glass-icon-button"
            type="button"
            onClick={() => setIncludePc((value) => !value)}
            aria-pressed={includePc}
            aria-label="Include basic PC facts with the next message"
            title="Include PC context"
            data-testid="chat-include-pc"
          >
            <Monitor size={17} />
          </button>
          <span data-testid="chat-demo-disclaimer">
            Preview · Your endpoint. Your keys.
          </span>
        </div>
      </div>
    </div>
  );
}
