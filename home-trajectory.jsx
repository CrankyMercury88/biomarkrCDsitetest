/* Biomarkr — Home, Variation A: "The Trajectory Argument".
   Editorial, problem-led. Leads with the snapshot fallacy and walks the
   ARPA story (problem → trajectory platform → signatures → circadian →
   use cases) as a restrained, text-forward argument. Composes chrome.jsx
   + arpa-sections.jsx. */

const { Card, Badge } = window.BiomarkrDesignSystem_734cca;
/* globals from chrome.jsx: SiteHeader, SiteFooter, Lockup, Reveal, ArrowRight, BM_CTABand
   globals from arpa-sections.jsx: ARPA_*
   globals from tweaks-panel.jsx: useTweaks, TweaksPanel, Tweak* */

const TRAJ_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroFace": "sans",
  "rhythm": "regular",
  "chartFill": false,
  "showDevice": true
} /*EDITMODE-END*/;

const RHYTHM_PAD = { compact: '4.5rem', regular: '7rem', spacious: '9.5rem' };

/* Numbered section opener in brand style (rule + eyebrow + light title). */
function SectionOpen({ num, eyebrow, title, sub, align = 'left', style = {} }) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, ...style }}>
      <span className="rule" style={{ marginBottom: 20 }} />
      <span className="eyebrow" style={{ marginBottom: 14 }}><span style={{ color: 'var(--text-tertiary)' }}>{num} ·</span> {eyebrow}</span>
      <h2 style={{ margin: 0, fontSize: 'clamp(30px,4vw,46px)', fontWeight: 300, letterSpacing: '-0.025em', lineHeight: 1.1, maxWidth: 760 }}>{title}</h2>
      {sub && <p className="prose" style={{ maxWidth: 640, marginTop: 20, marginBottom: 0, textAlign: align }}>{sub}</p>}
    </header>);

}

function HeroTrajectory({ heroFace }) {
  return (
    <section style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', padding: '14vh 0 8vh' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(320px,1fr) minmax(380px,1.05fr)', gap: 'clamp(40px,6vw,88px)', alignItems: 'center' }}>
        <Reveal>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Immune trajectory monitoring</div>
          <h1 style={{ margin: 0, fontFamily: heroFace === 'serif' ? 'var(--font-serif)' : 'var(--font-sans)', fontSize: 'clamp(40px,5.4vw,72px)', fontWeight: 300, letterSpacing: heroFace === 'serif' ? '-0.02em' : '-0.035em', lineHeight: 1.02 }}>
            Medicine reads one snapshot at a time. <span style={{ color: 'var(--text-tertiary)', fontFamily: "Inter" }}>We read the trajectory.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 500, marginTop: 28, color: 'var(--text-secondary)' }}>A single measurement means nothing on its own, not unless you know whether it rose from 5 in six hours or has held steady for two weeks. Biomarkr measures five cytokines from a fingerstick, again and again, against your own baseline.

          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="cytokine.html">See the model <ArrowRight /></a>
            <a className="btn btn-ghost" href="technology.html">How Biomarkr works</a>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <Card padding="lg" elevation="float" style={{ background: 'var(--surface-page)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8, gap: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.04em' }}>One reading, two truths</div>
              <Badge tone="caution" dot>Same value</Badge>
            </div>
            <p style={{ margin: '0 0 8px', fontSize: 12.5, color: 'var(--text-tertiary)' }}>The snapshot is identical. The trajectory is the diagnosis.</p>
            <ARPA_SnapshotChart width={560} height={320} />
          </Card>
        </Reveal>
      </div>
    </section>);

}

function HomeTrajectory() {
  const CTABand = window.BM_CTABand;
  const [t, setTweak] = useTweaks(TRAJ_TWEAK_DEFAULTS);
  const secPad = RHYTHM_PAD[t.rhythm] || RHYTHM_PAD.regular;
  const sec = { padding: 'var(--sec-pad) 0' };
  return (
    <div style={{ '--sec-pad': secPad }}>
      <SiteHeader active="home" />
      <HeroTrajectory heroFace={t.heroFace} />

      {/* 01 — The problem */}
      <section className="hairline-top" style={sec}>
        <div className="wrap">
          <Reveal><SectionOpen num="01" eyebrow="The problem" title="Medicine is blind to immune trajectories." /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,88px)', alignItems: 'start', marginTop: 48 }}>
            <Reveal>
              <p className="lead" style={{ marginTop: 0 }}>Chronic inflammatory disease touches <strong>100 million Americans</strong> and costs more than <strong>$800 billion</strong> a year, yet it's managed with tools structurally mismatched to the biology.</p>
              <div className="prose" style={{ marginTop: 22 }}>
                <p>Immune states are dynamic, personal, and trajectory-dependent. Every existing diagnostic returns a single snapshot. So flares go undetected until they're severe, treatments continue past the point of efficacy, and dose changes follow symptom reports instead of biological evidence.</p>
                <p>This is an engineering problem, not a scientific one. The biology is understood. The measurement infrastructure does not exist.</p>
              </div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border-subtle)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md, 12px)', overflow: 'hidden' }}>
              {ARPA_PROBLEMS.map((p, i) =>
              <Reveal key={p.label} delay={i * 80} style={{ background: 'var(--surface-page)', padding: '22px 22px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--signal-critical)', marginBottom: 10 }}>{p.label}</div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{p.body}</p>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — From snapshot to trajectory */}
      <section className="hairline-top" style={sec}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: t.showDevice ? 'minmax(320px,1fr) minmax(280px,0.8fr)' : '1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <Reveal><SectionOpen num="02" eyebrow="The platform" title="Biomarkr turns a snapshot into a trajectory." sub="A handheld silicon photonic biosensor — 22 issued patents, no moving parts — that runs a quantitative five-cytokine immunoassay from a 10 µL fingerstick in under ten minutes. The cytokine equivalent of continuous glucose monitoring." /></Reveal>
            {t.showDevice &&
            <Reveal delay={120}>
              <img src="assets/device-reader.png" alt="The Biomarkr reader" style={{ width: '100%', maxWidth: 380, margin: '0 auto', display: 'block', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.14))' }} />
            </Reveal>
            }
          </div>
          <Reveal delay={80} style={{ marginTop: 56 }}><ARPA_SpecRow /></Reveal>
          <div className="hairline-top" style={{ marginTop: 64, paddingTop: 56 }}>
            <Reveal><p className="lead" style={{ maxWidth: 720, marginTop: 0, marginBottom: 48 }}>Frequent, low-cost, multiplexed measurement at home unlocks three capabilities no single-timepoint test can offer.</p></Reveal>
            <ARPA_CapabilityRow />
          </div>
        </div>
      </section>

      {/* 03 — Signatures */}
      <section className="hairline-top" style={sec}>
        <div className="wrap">
          <Reveal><SectionOpen num="03" eyebrow="The signal" title="Disease lives in the pattern, not the number." sub="The five cytokines span four immune axes — innate initiation, systemic amplification, adaptive effector function, and counter-regulation. Each condition writes a characteristic signature in how those markers move together over time." /></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 24, marginTop: 52 }}>
            {['sepsis', 'ra', 'longcovid'].map((k, i) =>
            <Reveal key={k} delay={i * 110}><ARPA_SignatureCard sig={ARPA_SIGNATURES[k]} prefix={'sigA-' + k} fill={t.chartFill} /></Reveal>
            )}
          </div>
          <Reveal delay={120}>
            <p className="prose" style={{ maxWidth: 760, marginTop: 40, fontSize: 17, lineHeight: 1.7 }}>The same absolute IL-6 carries opposite clinical meaning depending on whether it's rising, stable, or falling — and whether it's a 2-fold or 10-fold move from that individual's baseline. <strong>No single-timepoint test, however sensitive, can extract this.</strong></p>
          </Reveal>
        </div>
      </section>

      {/* 04 — Circadian */}
      <section className="hairline-top" style={sec}>
        <div className="wrap">
          <Reveal><SectionOpen num="04" eyebrow="The confound" title="The circadian problem — and its solution." /></Reveal>
          <Reveal delay={80} style={{ marginTop: 52 }}><ARPA_CircadianBlock /></Reveal>
        </div>
      </section>

      {/* 05 — Use cases */}
      <section className="hairline-top" style={sec}>
        <div className="wrap">
          <Reveal><SectionOpen num="05" eyebrow="Where it changes outcomes" title="One platform, many trajectories." sub="Biomarkr is horizontal. These are the highest-priority applications — each with an established unmet need and a clear cytokine rationale." /></Reveal>
          <div style={{ marginTop: 52 }}><ARPA_UseCaseGrid /></div>
          <Reveal delay={120} style={{ marginTop: 48 }}>
            <a className="btn btn-primary" href="practice.html">See it in practice <ArrowRight /></a>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="The CGM transformed diabetes by turning a snapshot into a trajectory. Biomarkr does the same for the immune system."
        body="We're partnering with pharma and biotech for research programs, and meeting investors for our seed round. If immune trajectory is the missing layer, let's talk."
        primary="Request a conversation" primaryHref="mailto:dylan@biomarkr.health"
        secondary="See it in practice" secondaryHref="practice.html" />
      <SiteFooter />
      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio label="Headline face" value={t.heroFace} options={['sans', 'serif']} onChange={(v) => setTweak('heroFace', v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Section rhythm" value={t.rhythm} options={['compact', 'regular', 'spacious']} onChange={(v) => setTweak('rhythm', v)} />
        <TweakToggle label="Show device photo" value={t.showDevice} onChange={(v) => setTweak('showDevice', v)} />
        <TweakSection label="Charts" />
        <TweakToggle label="Signature area fill" value={t.chartFill} onChange={(v) => setTweak('chartFill', v)} />
      </TweaksPanel>
    </div>);

}

window.HomeTrajectory = HomeTrajectory;