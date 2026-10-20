import type { Metadata } from "next";
import { CodeBlock } from "@/components/code-block";
import { Kbd, PageHead, TextLink } from "@/components/ui";
import { CONFIG_PATH, GITHUB_LATEST, GITHUB_REPO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Getting started",
  description:
    "Prerequisites, installation, the first search, the search syntax, and troubleshooting for Nex on Windows 10 and 11.",
};

const sourceBuild = `git clone https://github.com/haxllo/nex.git
cd nex
cargo build --release --bin Nex --bin NexHelper
.\\target\\release\\Nex.exe`;

const cli = `nex --status              # is it running
nex --quit                # stop the instance
nex --restart             # restart the instance
nex --diagnostics-bundle  # write a diagnostics zip`;

export default function GettingStartedPage() {
  return (
    <>
      <PageHead
        title="Getting started"
        lede="From nothing to the first search, plus the syntax worth memorising and the two failures that actually happen."
      />

      <div className="prose-nex mt-10">
        <h2>What you need</h2>
        <ul>
          <li>Windows 10 or 11, 64-bit.</li>
          <li>
            WebView2. It ships with Windows 11 and the installer adds it on Windows 10
            if it is missing.
          </li>
          <li>Rust 1.85 or newer, only if you are building from source.</li>
        </ul>

        <h2>Install</h2>
        <p>
          Download the latest installer from{" "}
          <a href={GITHUB_LATEST} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>{" "}
          and run it. Nex is a per-user install and starts in the background when it
          finishes. There is no window until you ask for one.
        </p>
        <p>If you prefer a portable copy, the zip on the same release page unpacks and runs in place.</p>

        <h3>Build from source</h3>
        <p>
          The repository builds two binaries: the app and the helper that owns activation
          and allowlisted key simulation.
        </p>
        <CodeBlock code={sourceBuild} title="PowerShell" />

        <h2>First run</h2>
        <p>On first launch Nex does five things:</p>
        <ol>
          <li>
            Creates <code>{CONFIG_PATH}</code> with the defaults.
          </li>
          <li>Scans the Start menu and installed applications.</li>
          <li>Creates the Tantivy index and SQLite state in the same folder.</li>
          <li>Registers the global hotkey, the Win key unless you change it.</li>
          <li>Adds a tray icon, where quit, restart, and startup controls live.</li>
        </ol>
        <p>
          Confirm it is running with <code>nex --status</code>. The first index pass on a
          large drive takes a moment; the panel shows progress while it finishes.
        </p>

        <h2>The first search</h2>
        <ul>
          <li>
            <Kbd>Win</Kbd> opens the panel on the monitor under the cursor.
          </li>
          <li>Type an app name. Fuzzy matching handles a missing or swapped letter.</li>
          <li>
            <Kbd>Enter</Kbd> opens the selected result, <Kbd>Esc</Kbd> closes the panel.
          </li>
          <li>Right-click a result for run as admin, copy path, open folder, pin, or uninstall.</li>
        </ul>

        <h2>Search syntax</h2>
        <p>
          There is one field and no modes to learn. The first characters of a query decide
          the scope, and everything after them is still a fuzzy search.
        </p>
        <ul>
          <li>
            <code>&gt; restart</code> searches actions and commands only.
          </li>
          <li>
            <code>@apps</code>, <code>@files</code>, <code>@folders</code> narrow the
            pool before the fuzzy match runs.
          </li>
          <li>
            <code>kind:file</code> and <code>ext:md</code> filter by type.{" "}
            <code>modified:week</code> and <code>created:month</code> filter by date.
          </li>
          <li>
            <code>AND</code>, <code>OR</code>, <code>NOT</code> combine terms. A leading{" "}
            <code>-</code> excludes them, which is how you drop <code>-node_modules</code>.
          </li>
          <li>
            <code>4*(18+7)</code> evaluates inline. A bare domain such as{" "}
            <code>youtube.com</code> opens in the browser.
          </li>
        </ul>

        <h2>Command line</h2>
        <p>The app is a background process. These flags are for the rare cases.</p>
        <CodeBlock code={cli} title="PowerShell" />

        <h2>When something is wrong</h2>
        <h3>The hotkey does nothing</h3>
        <p>
          Another app may own the combination. Change <code>hotkey</code> in the config
          file to <code>&quot;Ctrl+Space&quot;</code> or{" "}
          <code>&quot;Ctrl+Shift+Space&quot;</code>, save, and run{" "}
          <code>nex --restart</code>. The Win key alone is safe because Nex registers it
          through a helper instead of the shell.
        </p>
        <h3>The panel is blank</h3>
        <p>
          That is almost always a missing WebView2 runtime on Windows 10. Install it from
          Microsoft, then restart Nex. If the panel stays opaque, the glass renderer could
          not start and Nex fell back on purpose.
        </p>
        <h3>Files are missing</h3>
        <p>
          Check <code>discovery_roots</code>. Nex scans the user folder by default and skips
          system, temp, and build directories such as <code>node_modules</code> and{" "}
          <code>.git</code>.
        </p>

        <h2>Next</h2>
        <p>
          The configuration reference documents every key, its type, and its range. The
          full source lives at{" "}
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
            github.com/haxllo/nex
          </a>
          .
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
        <TextLink href="/docs/configuration">Configuration reference</TextLink>
        <TextLink href="/plugin-sdk">Plugin SDK</TextLink>
      </div>
    </>
  );
}
