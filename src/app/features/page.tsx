import type { Metadata } from "next";
import Link from "next/link";
import { PageHead, TextLink } from "@/components/ui";
import { featureGroups } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Fuzzy search, the Everything SDK, Quick Launch, actions, file creation, the query DSL, chat, the glass panel, and the engineering underneath.",
};

const navLinkClass =
  "mono whitespace-nowrap text-[10.5px] uppercase tracking-[0.1em] text-faint transition-colors duration-200 hover:text-paper";

export default function FeaturesPage() {
  return (
    <>
      <section className="shell pt-14 pb-10 md:pt-20 md:pb-12">
        <PageHead
          eyebrow="Features"
          title="One field, and everything it reaches."
          lede="Nex is a launcher, so search is the point. What sits behind the search is the rest of the machine: apps, files, actions, arithmetic, links, clipboard, media, and a chat that reads the files you hand it."
        />
      </section>

      <nav aria-label="Feature groups" className="feature-navigation" data-testid="feature-navigation">
        <div className="shell">
          {featureGroups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              data-testid={`feature-nav-${group.id}`}
              className={navLinkClass}
            >
              {group.title}
            </Link>
          ))}
        </div>
      </nav>

      <div className="shell pb-20">
        {featureGroups.map((group, groupIndex) => (
          <section
            key={group.id}
            id={group.id}
            className="feature-group"
            data-testid={`feature-group-${group.id}`}
          >
            <div className="feature-group-heading">
              <span>
                0{groupIndex + 1} / CAPABILITIES
              </span>
              <h2 className="text-[15px] font-medium tracking-[-0.01em] text-paper">
                {group.title}
              </h2>
              <p className="mt-2 max-w-[26ch] text-[12.5px] leading-[1.6] text-faint">
                {group.lede}
              </p>
            </div>

            <div className="feature-items">
              {group.items.map((item) => (
                <div key={item.title} className="border-t border-line py-4">
                  <h3 className="text-[13.5px] text-paper">{item.title}</h3>
                  <p className="mt-1.5 max-w-[44ch] text-[13px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                  {item.detail && (
                    <p className="mono mt-2.5 break-words text-[10.5px] leading-[1.6] text-faint">
                      {item.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-10">
          <TextLink href="/download" testId="features-download">
            Download for Windows
          </TextLink>
          <TextLink href="/plugin-sdk" testId="features-plugin-sdk">
            Build a plugin
          </TextLink>
          <Link
            href="/docs/configuration"
            data-testid="features-configuration-link"
            className="text-[13px] text-muted underline decoration-white/20 underline-offset-[3px] transition-colors hover:text-paper"
          >
            Read every setting
          </Link>
        </div>
      </div>
    </>
  );
}
