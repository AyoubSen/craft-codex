import { useState } from 'react';
import data from '../data/mods.json';
import { href } from '../router';

const { mods, stats, pack } = data;
const addedFiles = mods.filter((m) => m.source === 'added').map((m) => m.file).sort();

function CopyList({ title, note, files, tone }) {
  const [copied, setCopied] = useState(false);
  const text = files.join('\n');
  return (
    <div className="panel box">
      <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span className={'badge ' + tone}>{files.length}</span> {title}
      </h3>
      <p className="muted" style={{ marginTop: 0, fontSize: 13.5 }}>{note}</p>
      <button
        className="btn"
        style={{ marginBottom: 10 }}
        onClick={() => {
          navigator.clipboard?.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
      >
        {copied ? '✓ copied' : 'Copy file list'}
      </button>
      <div className="copybox">{text}</div>
    </div>
  );
}

export default function Setup() {
  return (
    <div className="page">
      <h1>Install</h1>
      <p className="lede">
        You install <b>{pack.name} {pack.version}</b> from CurseForge like any normal modpack, then
        drop {stats.added} extra jars into <code>mods</code>. That’s the whole setup — there is no
        custom launcher, no separate download, and nothing to remove from the pack.
      </p>

      <div className="callout">
        <b>⚠ Everyone must be on the exact same list</b>
        Same pack version <em>and</em> the same {stats.added} extra jars, same versions. One person
        missing Ad Astra is a failed handshake and a “missing mods” kick at join.
      </div>

      <h2>1 · Get Craftoria {pack.version}</h2>
      <ol className="guide-body">
        <li>
          In <b>Prism Launcher</b>: Add Instance → <b>CurseForge</b> → search <b>Craftoria</b> →
          pick version <b>{pack.version}</b>. (Or import the <code>.zip</code> from the{' '}
          <a className="link" href={pack.curseforge} target="_blank" rel="noreferrer">CurseForge page ↗</a>.)
        </li>
        <li>Do <b>not</b> take a newer Craftoria version than {pack.version} unless we all update together.</li>
        <li>
          It resolves to Minecraft <b>{pack.minecraft}</b> on <b>{pack.loader} {pack.loaderVersion}</b>{' '}
          and needs <b>Java 21</b>. Prism downloads that itself.
        </li>
        <li>Give the instance <b>8–10 GB</b> of RAM (Edit → Settings → Memory). More than 12 makes GC pauses worse, not better.</li>
        <li>Launch it once to the main menu before adding anything, so the pack generates its configs.</li>
      </ol>

      <h2>2 · Add our {stats.added} jars</h2>
      <ol className="guide-body">
        <li>Close the game. Right-click the instance → <b>Folder</b> → open <code>minecraft/mods</code>.</li>
        <li>Copy in the {stats.added} jars listed below. Don’t rename them; the version in the file name is the version we’re all on.</li>
        <li>Launch. First start after adding mods is slow — a few minutes is normal, it’s rebuilding the recipe and registry caches.</li>
        <li>Check the mod count in the title screen’s Mods list reads <b>{stats.total}</b>.</li>
      </ol>

      <p className="muted">
        Three of those are dependencies, not content: <code>owo-lib</code> and{' '}
        <code>common-storage-lib</code> are required by Ad Astra, and Ad Astra’s Giselle addon is
        what makes Mekanism and Modern Industrialization work off-world.
      </p>

      <div className="split-cols">
        <CopyList
          tone="added"
          title="Our extra jars"
          note="Drop these into minecraft/mods on top of a clean Craftoria install."
          files={addedFiles}
        />
      </div>

      <h2>3 · Settings worth changing straight away</h2>
      <table className="data">
        <thead><tr><th>Setting</th><th>Why</th></tr></thead>
        <tbody>
          <tr><td>Render distance 12, simulation distance 8</td><td>Craftoria’s worldgen is heavy. This is the single biggest FPS lever.</td></tr>
          <tr><td>Shaders off until you’re settled</td><td>Iris is included and Euphoria Patcher will build a shader on first run — it’s fine, just slow.</td></tr>
          <tr><td>Turn on the FTB Quests book</td><td>It is the actual progression guide. See the <a className="link" href={href('guides/quests')}>quests guide</a>.</td></tr>
          <tr><td>Claim your base chunks with FTB Chunks</td><td>Stops other people and mob farms interfering with your build.</td></tr>
        </tbody>
      </table>

      <h2>Troubleshooting</h2>
      <table className="data">
        <thead><tr><th>Symptom</th><th>Usual cause</th></tr></thead>
        <tbody>
          <tr><td>Kicked at join: “missing mods”</td><td>You’re missing one of our {stats.added} jars, or you’re on a different Craftoria version.</td></tr>
          <tr><td>Crash on startup mentioning <code>owo</code> or <code>ad_astra</code></td><td>You copied Ad Astra without its two dependency jars.</td></tr>
          <tr><td>Crash on world load</td><td>A worldgen mod was added or removed after the world existed. Check <code>logs/latest.log</code> and put the jar back.</td></tr>
          <tr><td>“Registry remapping failed” / missing items</td><td>Same cause — restore the jar, or accept the item loss and let it remap.</td></tr>
          <tr><td>Stutter every few seconds</td><td>GC. Lower the RAM allocation, then simulation distance. See the <a className="link" href={href('guides/performance')}>performance guide</a>.</td></tr>
          <tr><td>Very long first launch</td><td>Normal. {stats.total} mods, plus shader compilation. It’s only slow once.</td></tr>
          <tr><td>Missing textures / invisible blocks</td><td>Shader pack mismatch. Disable shaders in Iris, relaunch, re-enable.</td></tr>
        </tbody>
      </table>
    </div>
  );
}
