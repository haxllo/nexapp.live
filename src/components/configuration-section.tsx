import { CodeBlock } from "@/components/code-block";
import { Reveal } from "@/components/reveal";
import { SectionHead, TextLink } from "@/components/ui";

const config = `# %APPDATA%\\Nex\\config.toml
hotkey = "Win"
launch_at_startup = true
max_results = 20

panel_background = "glass"   # glass | black | white
grid_view = false
game_mode_enabled = false

[quick_launch]
enabled = true
max_items = 9
auto_fill = false

plugins_enabled = true
plugins_safe_mode = true`;

export function Configuration() {
  return (
    <section id="config" className="scroll-mt-20 border-t border-line">
      <div className="shell py-20 md:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <Reveal>
              <SectionHead title="It is a text file. Of course it is.">
                Every setting lives in a TOML file you can read, diff, and keep in
                your dotfiles. Save it and most changes apply about a second later.
                The hotkey and the index path need a restart.
              </SectionHead>
              <div className="mt-6">
                <TextLink href="/docs/configuration">Full configuration reference</TextLink>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={0.06}>
              <CodeBlock code={config} title="config.toml" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
