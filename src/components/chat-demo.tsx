"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "@phosphor-icons/react";

type Message = { id: number; text: string };

const suggestions = ["Think through an idea", "Explain something clearly"];

type ChatPrefix = "chat" | "story-chat";

export function ChatDemo({
  onBack,
  prefix = "chat",
}: {
  onBack?: () => void;
  prefix?: ChatPrefix;
}) {
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
    <div className="nx-panel nx-chat" data-testid={`${prefix}-demo-panel`}>
      <div className="nx-chat-head">
        <button
          type="button"
          className="nx-icon-btn"
          aria-label="Back to launcher"
          data-testid={`${prefix}-demo-back`}
          onClick={onBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
          </svg>
        </button>
        <div className="nx-chat-title">
          <b>Chat</b>
          <button type="button" className="nx-model" data-testid={`${prefix}-model-toggle`}>
            ChatGPT · gpt-6-luna
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
            </svg>
          </button>
        </div>
        <div className="nx-chat-actions">
          <button
            type="button"
            className="nx-icon-btn"
            aria-label="Conversation history"
            data-testid={`${prefix}-history-toggle`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M136,80v43.47l36.12,21.67a8,8,0,0,1-8.24,13.72l-40-24A8,8,0,0,1,120,128V80a8,8,0,0,1,16,0Zm-8-48A95.44,95.44,0,0,0,60.08,60.15C52.81,67.51,46.35,74.59,40,82V64a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16H49c7.15-8.42,14.27-16.35,22.39-24.57a80,80,0,1,1,1.66,114.75,8,8,0,1,0-11,11.64A96,96,0,1,0,128,32Z" />
            </svg>
          </button>
          <button
            type="button"
            className="nx-icon-btn"
            aria-label="New conversation"
            disabled={messages.length === 0}
            data-testid={`${prefix}-reset`}
            onClick={() => {
              setMessages([]);
              setInput("");
              setAttached(false);
              setIncludePc(false);
              setCopied(false);
              setCopyError(false);
              field.current?.focus();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
            </svg>
          </button>
          <button
            type="button"
            className="nx-icon-btn"
            aria-label="Copy transcript"
            disabled={messages.length === 0}
            data-testid={`${prefix}-copy`}
            onClick={copyTranscript}
          >
            {copied ? (
              <Check size={17} />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="nx-feed" ref={feed}>
        {messages.length === 0 ? (
          <div className="nx-welcome">
            <span className="nx-bars  " aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <h3>What’s on your mind?</h3>
            <p>
              Ask a question, work through an idea, or paste something you want to understand.
            </p>
            <div className="nx-suggest">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  type="button"
                  data-testid={`chat-prompt-${index}`}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="nx-thread" data-testid={`${prefix}-messages`}>
            {messages.map((message, index) => (
              <div
                key={message.id}
                className="nx-msg-user"
                data-testid={`chat-message-${index}`}
              >
                {message.text}
              </div>
            ))}
            <p className="nx-preview-note" data-testid={`${prefix}-preview-notice`}>
              Preview only. Connect a provider in Nex to get an answer.
            </p>
            {(copied || copyError) && (
              <span role="status" className="nx-preview-note" data-testid={`${prefix}-copy-status`}>
                {copied
                  ? "Transcript copied"
                  : "Clipboard unavailable. Select the messages to copy them."}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="nx-composer">
        {(attached || includePc) && (
          <div className="nx-composer-tags">
            {attached && (
              <span className="nx-tag">
                notes.md
                <button
                  type="button"
                  onClick={() => setAttached(false)}
                  data-testid={`${prefix}-remove-attachment`}
                  aria-label="Remove notes.md from context"
                >
                  <X size={11} />
                </button>
              </span>
            )}
            {includePc && (
              <span className="nx-tag">
                This PC
                <button
                  type="button"
                  onClick={() => setIncludePc(false)}
                  data-testid={`${prefix}-remove-pc`}
                  aria-label="Stop including PC facts"
                >
                  <X size={11} />
                </button>
              </span>
            )}
          </div>
        )}
        <div className="nx-composer-row">
          <button
            type="button"
            className="nx-icon-btn"
            aria-pressed={attached}
            aria-label="Attach notes.md"
            data-testid={`${prefix}-attach`}
            onClick={() => setAttached((value) => !value)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z" />
            </svg>
          </button>
          <button
            type="button"
            className="nx-icon-btn"
            aria-pressed={includePc}
            aria-label="Include PC context"
            data-testid={`${prefix}-include-pc`}
            onClick={() => setIncludePc((value) => !value)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z" />
            </svg>
          </button>
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
            placeholder="Message Nex..."
            aria-label="Message the chat preview"
            data-testid={`${prefix}-demo-input`}
          />
          <button
            type="button"
            className="nx-send"
            onClick={send}
            disabled={!input.trim()}
            aria-label="Send message"
            data-testid={`${prefix}-demo-send`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
