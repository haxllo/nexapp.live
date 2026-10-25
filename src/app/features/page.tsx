import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import { FeaturesNav } from "@/components/features-nav";
import { PageIntro } from "@/components/page-intro";
import { featureGroups } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Fuzzy search, the Everything SDK, Quick Launch, actions, file creation, the query DSL, chat, the glass panel, and the engineering underneath.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageIntro
        label="Features"
        title="One field, and everything it reaches."
        lede="Nex is a launcher, so search is the point. What sits behind the search is the rest of the machine: apps, files, actions, arithmetic, links, clipboard, media, and a chat that reads the files you hand it."
      >
        <div className="pg-actions">
          <Link
            className="ln-btn ln-btn-primary"
            href="/download"
            data-testid="features-download"
          >
            Download for Windows
          </Link>
          <Link
            className="ln-btn ln-btn-ghost"
            href="/plugin-sdk"
            data-testid="features-plugin-sdk"
          >
            Build a plugin
            <ArrowRight size={13} aria-hidden />
          </Link>
        </div>
      </PageIntro>

      <FeaturesNav groups={featureGroups} />

      <div className="ln-shell pg-body">
        {featureGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            id={group.id}
            className="pg-group"
            data-testid={`feature-group-${group.id}`}
          >
            <div className="pg-group-head">
              <h2>
                <span className="pg-count">0{groupIndex + 1}</span>
                {group.title}
              </h2>
              <p>{group.lede}</p>
            </div>

            <div className="pg-items">
              {group.items.map((item) => (
                <div key={item.title} className="pg-item">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.detail && <code>{item.detail}</code>}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="pg-note">
          Every setting behind these features is a line in{" "}
          <code>config.toml</code>. The{" "}
          <Link href="/docs/configuration" data-testid="features-configuration-link">
            configuration reference
          </Link>{" "}
          lists each key with its type, default, and range.
        </div>
      </div>
    </>
  );
}
