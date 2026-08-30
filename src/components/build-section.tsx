import { ProductSection } from "./section";

function BuildMock() {
  return (
    <div className="p-5 font-mono text-[12px] leading-relaxed text-text-muted">
      <div className="flex items-center gap-2 border-b border-border pb-2 mb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-text-dim">plugin.rs</span>
      </div>
      <pre className="overflow-x-auto">
        <code>
          <span className="text-text-dim">#[plugin]</span>
          {"\n"}
          <span className="text-text">pub fn</span> <span className="text-accent">search</span>(
          {"\n"}  query: &str,
          {"\n"}  ctx: &<span className="text-accent">Context</span>,
          {"\n"}) -&gt; Result&lt;<span className="text-accent">Vec</span>&lt;Item&gt;&gt; {"{"}
          {"\n"}  <span className="text-text-dim">// index with Tantivy</span>
          {"\n"}  <span className="text-text">let</span> hits = ctx.index.search(query)?;
          {"\n"}
          {"\n"}  <span className="text-text-dim">// rank &amp; project</span>
          {"\n"}  Ok(hits.into_iter()
          {"\n"}    .map(|h| h.into_item())
          {"\n"}    .collect())
          {"\n"}{"}"}
        </code>
      </pre>
    </div>
  );
}

export function BuildSection() {
  return (
    <ProductSection
      eyebrow="Build"
      title="A real platform, for plugin authors."
      description="Define a plugin with a single trait. Compile to WASM, hot-load into the running launcher, and ship in minutes. No glue code, no surprises."
      visual={<BuildMock />}
      reverse
    />
  );
}
