"use client";

import { Button } from "@/components/ui/button";
import { FloatingNav } from "@/components/ui/floating-nav";
import { GridPattern } from "@/components/ui/grid-pattern";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  Database, 
  Users, 
  Smartphone, 
  Download,
  Server,
  Cloud,
  Zap,
  Search,
  ShoppingCart,
  BookMarked,
  Library,
  Star,
  Heart,
  TrendingUp,
  ArrowRight,
  Terminal,
  Check,
  Cpu,
  Github,
  Twitter,
  Mail
} from "lucide-react";

import { GridPin } from "@/components/ui/grid-pin";
import dynamic from "next/dynamic";

const GitHubGlobeCard = dynamic(
  () => import("@/components/ui/github-globe-card").then((mod) => mod.GitHubGlobeCard),
  { ssr: false }
);

export default function Home() {
  const navItems = [
    { name: "Features", link: "#features", icon: <Star className="h-4 w-4" /> },
    { name: "Deployment", link: "#deployment", icon: <Server className="h-4 w-4" /> },
    { name: "Docs", link: "#docs", icon: <BookOpen className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 overflow-hidden border-b border-white/5 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-20 stroke-white/10"
          )}
        />
        
        {/* Floating Grid Pins */}
        <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none hidden lg:block">
          <GridPin x={15} y={25} delay={0.2} content={<div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"><Users className="w-4 h-4 text-blue-400" /></div>} />
          <GridPin x={85} y={30} delay={0.4} content={<div className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)]"><Heart className="w-4 h-4 text-pink-400" /></div>} />
          <GridPin x={20} y={70} delay={0.6} content={<div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]"><Zap className="w-4 h-4 text-emerald-400" /></div>} />
          <GridPin x={80} y={65} delay={0.8} content={<div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.5)]"><Star className="w-4 h-4 text-orange-400" /></div>} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          {/* Refined Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-xs font-medium text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v1.0 is now available
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white glow-text">
            Lenny: <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">The Library-in-a-Box</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Lenny is an plug-and-play, open-source, Library-in-a-Box that empowers libraries to preserve, own, and lend digital books on their own terms.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="h-12 px-8 rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] border-0 font-semibold">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Installation Section */}
      <Section className="bg-black text-white border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white glow-text">Quick Installation</h2>
            <p className="text-zinc-400 text-lg">Get Lenny running in minutes with our simple one-line installation command</p>
          </div>

          <div className="bg-zinc-900/50 rounded-xl border border-white/10 p-6 md:p-8 shadow-[0_0_30px_-5px_rgba(16,185,129,0.1)] mb-12 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-2 mb-4 text-zinc-400 text-sm font-mono relative z-10">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Terminal Command</span>
            </div>
            <div className="relative group/code z-10">
              <code className="block bg-black/80 rounded-lg p-4 font-mono text-sm md:text-base text-emerald-400 break-all border border-white/5 shadow-inner">
                curl -fsSL https://raw.githubusercontent.com/ArchiveLabs/lenny/refs/heads/main/install.sh | sudo sh
              </code>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-2 right-2 text-zinc-500 hover:text-white hover:bg-white/10"
                onClick={() => navigator.clipboard.writeText("curl -fsSL https://raw.githubusercontent.com/ArchiveLabs/lenny/refs/heads/main/install.sh | sudo sh")}
              >
                Copy
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "Downloads Dependencies", desc: "Automatically installs Docker and all required components" },
              { title: "Quick Setup", desc: "Configures Lenny with sensible defaults for immediate use" },
              { title: "Production Ready", desc: "Includes security settings and optimization for library use" },
            ].map((item, i) => (
              <div key={i} className="space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Zap className="w-5 h-5 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <h3 className="font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center text-sm text-zinc-500 bg-zinc-900/30 rounded-lg p-4 border border-white/5 inline-block w-full">
            <span className="font-semibold text-zinc-300">System Requirements:</span> Requires a Mac & Linux system with curl and sudo access. Compatible with Ubuntu, Debian, and most modern Linux distributions.
          </div>
        </div>
      </Section>

      {/* What is Lenny? (Features) */}
      <Section id="features" className="border-b border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4 glow-text">
              What is Lenny?
            </h2>
            <p className="text-lg text-zinc-400">
              Lenny is a library server that features everything you need to preserve, lend, and serve digital books your way.
            </p>
          </div>
          
          <BentoGrid>
            <BentoCard
              title="Bookshelf"
              description="Securely store and host millions of digital books."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-pink-500/20 border border-blue-500/20" />}
              icon={<Library className="h-4 w-4 text-blue-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
            />
            <BentoCard
              title="Card Catalog"
              description="Automatically publish an OPDS feed of your books using up-to-date book metadata from OpenLibrary.org."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10" />}
              icon={<Search className="h-4 w-4 text-violet-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-violet-500/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
            />
            <BentoCard
              title="Lending System"
              description="Securely lend books using configurable lending rules and Built-in LCP support."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20" />}
              icon={<Users className="h-4 w-4 text-emerald-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300"
            />
            <BentoCard
              title="Book Reader"
              description="Thorium Web powers epub reading, directly in the web browser."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20" />}
              icon={<BookOpen className="h-4 w-4 text-orange-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300"
            />
            <BentoCard
              title="Marketplace"
              description="Easily purchase and add new titles to your Library."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/20" />}
              icon={<ShoppingCart className="h-4 w-4 text-pink-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all duration-300"
            />
            <BentoCard
              title="Mobile Apps"
              description="Directly load your Lenny feed with Thorium Mobile, SimplyE, Aldiko, and other OPDS-compatible mobile apps."
              header={<div className="flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/20 border border-indigo-500/20" />}
              icon={<Smartphone className="h-4 w-4 text-indigo-400" />}
              className="md:col-span-1 bg-zinc-900/50 border-white/10 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300"
            />
          </BentoGrid>
        </div>
      </Section>

      {/* Ready to Go */}
      <Section className="bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-medium text-emerald-400 mb-6 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ready to Go
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 glow-text">
            Preloaded with Thousands of Books
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Lenny comes preloaded with thousands of open access titles, giving you an instant digital collection to start serving your community immediately.
          </p>
        </div>
      </Section>

      {/* Federated Future (Globe) */}
      <Section className="bg-black text-white overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 glow-text">
                A Federated Future for Libraries
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Imagine a world where every library is a critical destination in a unified, global network.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Digitally Sovereign Partners</h3>
                  <p className="text-zinc-400">
                    Each library becomes an independent node in a connected ecosystem, maintaining full control over their collections while benefiting from network effects.
                  </p>
                </div>
                
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-6">The Open Ecosystem</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">Lenny</h5>
                        <p className="text-sm text-zinc-400">Super-charges every library into a digitally sovereign, discoverable partner</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                        <Library className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">OpenLibrary.org</h5>
                        <p className="text-sm text-zinc-400">Connects 11.5 million readers to find and borrow books directly from participating libraries</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0 border border-rose-500/20">
                        <BookMarked className="w-5 h-5 text-rose-400" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">OpenLibrary.press</h5>
                        <p className="text-sm text-zinc-400">Empowers authors and publishers to escape corporate platforms and securely sell DRM-free books</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center lg:justify-end gap-4">
              <span className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Connected Library Network</span>
              <GitHubGlobeCard className="h-[500px] w-full max-w-[500px]" />
            </div>
          </div>
        </div>
      </Section>

      {/* Choose Your Deployment */}
      <Section id="deployment" className="bg-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 glow-text">
              Choose Your Deployment
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Deploy Lenny however works best for your library's infrastructure and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Self-Hosted */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Self-Hosted</h3>
                <p className="text-zinc-400 mb-6 min-h-[3rem]">Run Lenny as a Docker container on your own server. Full control, full flexibility, zero vendor lock-in.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-blue-400" /> Open source & customizable
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-blue-400" /> Runs on standard Linux infrastructure
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-blue-400" /> Integrated with Open Library metadata
                  </li>
                </ul>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10">View Documentation</Button>
              </div>
            </div>

            {/* Plug & Play */}
            <div className="bg-zinc-900/80 rounded-2xl p-8 border border-emerald-500/30 relative transform md:-translate-y-4 shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] group overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl shadow-[0_0_10px_rgba(16,185,129,0.5)]">Recommended</div>
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Plug & Play</h3>
                <p className="text-zinc-400 mb-6 min-h-[3rem]">Get Lenny pre-installed on a Raspberry Pi. Plug it in and start lending digital books securely.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" /> No setup required
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" /> Offline-ready local lending
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400" /> Simple updates & connectivity
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] border-0">Order Now</Button>
              </div>
            </div>

            {/* Hosted */}
            <div className="bg-zinc-900/50 rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Hosted</h3>
                <p className="text-zinc-400 mb-6 min-h-[3rem]">Let us take care of everything. A hosted Lenny instance with a web dashboard for simple, secure access.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-purple-400" /> Zero maintenance
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-purple-400" /> Web-based admin tools
                  </li>
                  <li className="flex items-center gap-2 text-zinc-300">
                    <Check className="w-4 h-4 text-purple-400" /> Scalable and secure infrastructure
                  </li>
                </ul>
                <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Built by Libraries */}
      <Section className="bg-black border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4 glow-text">Built by Libraries, For Libraries</h2>
          <p className="text-zinc-400 mb-8">
            Lenny is an open-source project by Archive Labs and the Internet Archive team behind Open Library.
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2 text-white font-medium">
              <BookOpen className="w-5 h-5" /> Lenny
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <Heart className="w-5 h-5 text-pink-500" /> Free & Open Source
            </div>
            <div className="flex items-center gap-2 text-white font-medium">
              <Users className="w-5 h-5" /> Built for the public good
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  <BookOpen className="w-4 h-4 text-black" />
                </div>
                <span className="font-bold text-xl text-white">Lenny for Libraries</span>
              </div>
              <p className="font-medium text-white mb-2">Your Library, Digitally Sovereign</p>
              <p className="text-zinc-500 max-w-sm mb-6">
                An open-source Library-in-a-Box that empowers libraries to preserve, own, and lend digital books on their own terms.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-zinc-500 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-6">Ecosystem</h4>
              <ul className="space-y-4">
                <li><a href="https://openlibrary.org" className="text-zinc-500 hover:text-white transition-colors">OpenLibrary.org</a></li>
                <li><a href="https://openlibrary.press" className="text-zinc-500 hover:text-white transition-colors">OpenLibrary.press</a></li>
                <li><a href="https://archive.org" className="text-zinc-500 hover:text-white transition-colors">Internet Archive</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-600">
            <p>© 2025 Lenny for Libraries. Built by Archive Labs with ❤️ for the public good.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
