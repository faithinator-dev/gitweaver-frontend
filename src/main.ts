import './index.css';

interface Page {
  title: string;
  render: () => string;
}

const pages: Record<string, Page> = {
  dashboard: {
    title: 'Dashboard',
    render: () => `
      <div class="space-y-stack-lg">
        <!-- Dashboard Metrics -->
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 md:col-span-4 glass rounded-2xl p-6 relative overflow-hidden group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Active Projects</span>
              <span class="material-symbols-outlined text-primary text-sm accent-glow">source</span>
            </div>
            <div class="font-mono text-3xl text-primary accent-glow">124</div>
            <div class="mt-4 text-[11px] text-on-surface-variant uppercase tracking-widest">Active Repositories</div>
            <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <span class="material-symbols-outlined text-7xl">pulse</span>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4 glass rounded-2xl p-6 relative overflow-hidden group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Deployments</span>
              <span class="material-symbols-outlined text-secondary text-sm">rocket_launch</span>
            </div>
            <div class="font-mono text-3xl text-secondary">32</div>
            <div class="mt-4 text-[11px] text-on-surface-variant uppercase tracking-widest">Deployments (24h)</div>
          </div>
          <div class="col-span-12 md:col-span-4 glass rounded-2xl p-6 relative overflow-hidden group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Storage</span>
              <span class="material-symbols-outlined text-tertiary text-sm">storage</span>
            </div>
            <div class="font-mono text-3xl text-tertiary">1.2 TB</div>
            <div class="mt-4 text-[11px] text-on-surface-variant uppercase tracking-widest">Total Usage</div>
          </div>
        </div>

        <!-- Language Filters -->
        <div class="flex items-center gap-4 overflow-x-auto pb-2">
          <button class="px-6 py-2 glass bg-primary/10 text-primary border-primary/30 rounded-full text-xs font-bold accent-glow uppercase tracking-widest">All Modules</button>
          <button class="px-6 py-2 glass hover:bg-white/5 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest transition-all">Neural</button>
          <button class="px-6 py-2 glass hover:bg-white/5 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest transition-all">Synthesis</button>
          <button class="px-6 py-2 glass hover:bg-white/5 text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-widest transition-all">Routing</button>
        </div>

        <!-- Repository List -->
        <div class="glass rounded-2xl overflow-hidden border border-outline-variant">
          <div class="bg-white/5 px-4 lg:px-8 py-4 grid grid-cols-12 items-center gap-4 border-b border-outline-variant">
            <div class="col-span-8 lg:col-span-5 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Repository Name</div>
            <div class="hidden lg:block col-span-2 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Visibility</div>
            <div class="hidden lg:block col-span-2 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Language</div>
            <div class="col-span-3 lg:col-span-2 text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Last Sync</div>
            <div class="col-span-1"></div>
          </div>
          
          <div class="px-4 lg:px-8 py-6 grid grid-cols-12 items-center gap-4 border-b border-outline-variant/30 hover:bg-white/5 transition-colors group">
            <div class="col-span-8 lg:col-span-5 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary accent-glow flex-shrink-0">
                 <span class="material-symbols-outlined">folder_zip</span>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-mono text-sm font-bold text-on-surface group-hover:text-primary transition-colors cursor-pointer truncate">weaver-core-engine</span>
                <span class="text-xs text-on-surface-variant truncate">The high-performance orchestration kernel.</span>
              </div>
            </div>
            <div class="hidden lg:block col-span-2">
              <span class="px-3 py-1 bg-white/5 border border-outline-variant rounded-lg text-[10px] font-bold text-on-surface uppercase tracking-widest">Private</span>
            </div>
            <div class="hidden lg:block col-span-2 flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-primary accent-glow"></div>
              <span class="text-xs text-on-surface">TypeScript</span>
            </div>
            <div class="col-span-3 lg:col-span-2 font-mono text-[10px] text-on-surface-variant">2m ago</div>
            <div class="col-span-1 text-right">
              <button class="material-symbols-outlined lg:hidden text-on-surface-variant">more_vert</button>
              <button class="hidden lg:block glass hover:bg-primary/20 hover:text-primary text-on-surface-variant px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">Manage</button>
            </div>
          </div>

          <div class="px-4 lg:px-8 py-6 grid grid-cols-12 items-center gap-4 border-b border-outline-variant/30 hover:bg-white/5 transition-colors group">
            <div class="col-span-8 lg:col-span-5 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary flex-shrink-0">
                 <span class="material-symbols-outlined">folder_managed</span>
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-mono text-sm font-bold text-on-surface group-hover:text-secondary transition-colors cursor-pointer truncate">api-gateway-v2</span>
                <span class="text-xs text-on-surface-variant truncate">Central proxy and auth service.</span>
              </div>
            </div>
            <div class="hidden lg:block col-span-2">
              <span class="px-3 py-1 bg-secondary/10 border border-secondary/20 rounded-lg text-[10px] font-bold text-secondary uppercase tracking-widest">Public</span>
            </div>
            <div class="hidden lg:block col-span-2 flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-[#f1e05a]"></div>
              <span class="text-xs text-on-surface">JavaScript</span>
            </div>
            <div class="col-span-3 lg:col-span-2 font-mono text-[10px] text-on-surface-variant">1h ago</div>
            <div class="col-span-1 text-right">
               <button class="material-symbols-outlined lg:hidden text-on-surface-variant">more_vert</button>
               <button class="hidden lg:block glass hover:bg-secondary/20 hover:text-secondary text-on-surface-variant px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all">Manage</button>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-on-surface-variant uppercase tracking-widest pt-4 font-bold">
          <div>Displaying 2/124 repositories</div>
          <div class="flex items-center gap-4">
            <button class="px-4 py-2 glass hover:bg-white/5 rounded-xl transition-all disabled:opacity-30">Previous</button>
            <button class="px-4 py-2 glass hover:bg-white/5 rounded-xl transition-all">Next</button>
          </div>
        </div>
      </div>
    `
  },
  provisioning: {
    title: 'Provisioning',
    render: () => `
      <div class="max-w-4xl mx-auto space-y-12">
        <div class="mb-12">
          <h2 class="text-4xl font-bold tracking-tighter text-on-surface mb-4">Create New Repository</h2>
          <p class="text-on-surface-variant leading-relaxed">Spawn a new repository in your workspace. Already existing? <a class="text-primary hover:underline" href="#">Import.</a></p>
        </div>
        <form class="space-y-12 pb-24">
          <section class="glass p-10 rounded-3xl space-y-8 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-8 opacity-5">
               <span class="material-symbols-outlined text-9xl">memory</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="space-y-4">
                <label class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Owner</label>
                <div class="flex items-center gap-3 glass p-4 rounded-xl border-white/5">
                  <span class="material-symbols-outlined text-primary">account_circle</span>
                  <span class="font-bold text-on-surface">octocat</span>
                </div>
              </div>
              <div class="space-y-4">
                <label class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Repository Name</label>
                <input class="w-full glass bg-white/5 border border-white/10 p-4 rounded-xl font-mono text-primary outline-none focus:border-primary transition-all placeholder:text-white/10" placeholder="my-awesome-project" />
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <div class="px-4">
               <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Visibility Mode</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="glass p-6 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group border-white/5">
                <div class="flex items-start gap-4">
                   <div class="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center p-1">
                      <div class="w-full h-full bg-primary rounded-full accent-glow"></div>
                   </div>
                   <div>
                      <span class="block font-bold text-on-surface mb-1">Public Access</span>
                      <span class="block text-xs text-on-surface-variant">Visible to everyone in the repository list.</span>
                   </div>
                </div>
              </div>
              <div class="glass p-6 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group opacity-50 border-white/5">
                <div class="flex items-start gap-4">
                   <div class="w-6 h-6 rounded-full border-2 border-outline-variant"></div>
                   <div>
                      <span class="block font-bold text-on-surface mb-1">Private Access</span>
                      <span class="block text-xs text-on-surface-variant">Restricted access environment. Admin only.</span>
                   </div>
                </div>
              </div>
            </div>
          </section>

          <div class="flex items-center justify-between pt-12 border-t border-outline-variant">
            <button class="px-8 py-3 rounded-xl glass hover:bg-white/5 text-on-surface-variant font-bold transition-all uppercase tracking-widest text-[10px]">Cancel</button>
            <button class="px-10 py-4 rounded-xl bg-primary text-on-primary font-bold accent-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-3 uppercase tracking-widest text-xs">
              <span class="material-symbols-outlined">rocket_launch</span>
              Create Repository
            </button>
          </div>
        </form>
      </div>
    `
  },
  documentation: {
    title: 'Documentation',
    render: () => `
      <div class="max-w-5xl mx-auto space-y-16 pb-24">
        <section class="space-y-6">
          <div class="flex items-center gap-4">
            <span class="px-3 py-1 glass bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg accent-glow">System Docs v1.0</span>
          </div>
          <h2 class="text-5xl font-bold tracking-tighter text-on-surface leading-tight">GitWeaver Technical <br/>Documentation</h2>
          <p class="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Surgical tools for repository orchestration and headless content management.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div class="md:col-span-8 glass p-10 rounded-3xl relative overflow-hidden group">
            <div class="relative z-10 space-y-6">
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-primary accent-glow" style="font-variation-settings: 'FILL' 1;">star</span>
                <h3 class="text-2xl font-bold text-on-surface">The Origin Story</h3>
              </div>
              <p class="text-lg text-on-surface-variant leading-relaxed">
                Born from the need for absolute redundancy. GitWeaver provides a surgical interface for repository management.
              </p>
            </div>
            <div class="absolute -right-12 -bottom-12 opacity-5 group-hover:opacity-10 transition-opacity">
               <span class="material-symbols-outlined text-[200px]">history_edu</span>
            </div>
          </div>
          <div class="md:col-span-4 glass rounded-3xl p-8 flex flex-col justify-between border-white/5 bg-white/5">
            <div>
               <span class="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-4 block">Core Stability</span>
               <h4 class="text-xl font-bold text-on-surface mb-2">Stability Matrix</h4>
               <p class="text-xs text-on-surface-variant leading-relaxed">Production-ready neural mirroring active.</p>
            </div>
            <div class="mt-8">
               <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div class="h-full bg-primary accent-glow w-[99.98%]"></div>
               </div>
               <div class="flex justify-between mt-3">
                  <span class="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Uptime</span>
                  <span class="text-[10px] font-mono text-primary">99.98%</span>
               </div>
            </div>
          </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-all group">
            <span class="material-symbols-outlined text-primary mb-6 text-3xl accent-glow">lock</span>
            <h4 class="text-lg font-bold text-on-surface mb-2">Encryption Layer</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Secure neural handshake with HTTP-only tokens.</p>
          </div>
          <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-all group">
            <span class="material-symbols-outlined text-primary mb-6 text-3xl accent-glow">auto_mode</span>
            <h4 class="text-lg font-bold text-on-surface mb-2">Dynamic Spawn</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Automatic node initialization via AETHER-Init.</p>
          </div>
          <div class="glass p-8 rounded-2xl hover:bg-white/5 transition-all group">
            <span class="material-symbols-outlined text-primary mb-6 text-3xl accent-glow">terminal</span>
            <h4 class="text-lg font-bold text-on-surface mb-2">Direct Feed</h4>
            <p class="text-sm text-on-surface-variant leading-relaxed">Real-time terminal uplink for surgical control.</p>
          </div>
        </div>
      </div>
    `
  },
  editor: {
    title: 'Headless Editor',
    render: () => `
      <div class="flex-1 flex flex-col lg:flex-row overflow-hidden glass rounded-2xl border border-outline-variant h-[calc(100vh-120px)] lg:h-[calc(100vh-160px)]">
        <nav class="hidden lg:flex w-64 bg-white/2 border-r border-outline-variant flex-col overflow-y-auto flex-shrink-0">
          <div class="px-6 py-4 border-b border-outline-variant bg-white/5">
            <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Filesystem</span>
          </div>
          <div class="py-4">
            <div class="flex items-center gap-3 px-6 py-2 text-on-surface-variant hover:bg-white/5 cursor-pointer">
              <span class="material-symbols-outlined text-lg">keyboard_arrow_down</span>
              <span class="material-symbols-outlined text-lg text-primary accent-glow">folder</span>
              <span class="text-xs font-bold font-mono">core_src</span>
            </div>
            <div class="flex items-center gap-3 px-6 py-2 pl-12 bg-primary/10 border-r-2 border-primary text-primary cursor-pointer accent-glow">
              <span class="material-symbols-outlined text-lg">javascript</span>
              <span class="text-xs font-bold font-mono">handshake_v2.js</span>
            </div>
            <div class="flex items-center gap-3 px-6 py-2 pl-12 text-on-surface-variant hover:bg-white/5 cursor-pointer">
              <span class="material-symbols-outlined text-lg">javascript</span>
              <span class="text-xs font-bold font-mono">routing.js</span>
            </div>
          </div>
        </nav>
        <section class="flex-1 bg-black/40 flex flex-col relative overflow-hidden font-mono min-w-0">
          <div class="h-14 border-b border-outline-variant flex items-center justify-between px-4 lg:px-8 bg-white/2">
            <div class="flex items-center gap-4 min-w-0">
              <div class="flex items-center gap-1.5 flex-shrink-0">
                 <div class="w-2 h-2 rounded-full bg-red-500/40"></div>
                 <div class="w-2 h-2 rounded-full bg-yellow-500/40"></div>
                 <div class="w-2 h-2 rounded-full bg-green-500/40"></div>
              </div>
              <span class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest truncate">core_src/handshake_v2.js</span>
            </div>
            <div class="flex items-center gap-4 flex-shrink-0">
               <span class="hidden sm:inline text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-3 py-1 glass rounded-lg">Ln 14, Col 22</span>
               <button class="bg-primary text-on-primary px-3 lg:px-6 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all accent-glow whitespace-nowrap">Commit</button>
            </div>
          </div>
          <div class="flex-1 overflow-auto p-4 lg:p-8 text-[10px] lg:text-xs leading-relaxed whitespace-pre font-mono">
<span class="text-[#ff7b72]">const</span> <span class="text-[#d2a8ff]">AetherNode</span> = <span class="text-[#d2a8ff]">require</span>(<span class="text-[#a5d6ff]">"@aether/core"</span>);

<span class="text-[#ff7b72]">async function</span> <span class="text-[#d2a8ff]">initializeHandshake</span>(id, secret) {
  <span class="text-[#8b949e]">/* Surgical Neural Handshake */</span>
  <span class="text-[#ff7b72]">const</span> node = <span class="text-[#ff7b72]">new</span> <span class="text-[#d2a8ff]">AetherNode</span>({ 
    token: process.env.<span class="text-[#79c0ff]">UI_KEY</span>,
    mode: <span class="text-[#a5d6ff]">"immersive"</span>
  });
  
  <span class="text-[#ff7b72]">await</span> node.<span class="text-[#d2a8ff]">connect</span>();
  <span class="text-[#ff7b72]">return</span> node.<span class="text-primary accent-glow">status</span>();
}

<span class="text-[#8b949e]">// TODO: Implement high-density wave synthesis</span>
          </div>
        </section>
      </div>
    `
  },
};

class App {
  private currentPage = 'dashboard';
  private isMobileMenuOpen = false;

  constructor() {
    this.render();
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && this.isMobileMenuOpen) {
        this.isMobileMenuOpen = false;
        this.render();
      }
    });
  }

  private toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.render();
  }

  private render() {
    const appEl = document.getElementById('app');
    if (!appEl) return;

    appEl.innerHTML = `
      <div class="orb-1"></div>
      <div class="orb-2"></div>
      
      <!-- Mobile Overlay -->
      <div id="mobile-overlay" class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${this.isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}"></div>

      <!-- Sidebar -->
      <aside id="sidebar" class="fixed left-0 top-0 h-screen w-sidebar-width glass flex flex-col py-8 z-50 transition-transform duration-300 lg:translate-x-0 ${this.isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}">
        <div class="px-8 mb-12 flex justify-between items-center">
          <div class="flex items-center gap-3">
            <div class="w-4 h-4 bg-primary rounded-sm accent-glow"></div>
            <h1 class="font-mono font-bold text-xl tracking-tighter text-on-surface">GitWeaver</h1>
          </div>
          <button id="close-menu" class="lg:hidden text-on-surface-variant">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav class="flex-1 px-4 space-y-2 overflow-y-auto">
          <div class="px-4 mb-4">
            <span class="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Applications</span>
          </div>
          ${this.renderNavItem('dashboard', 'dashboard', 'Dashboard')}
          ${this.renderNavItem('provisioning', 'add_box', 'Provisioning')}
          ${this.renderNavItem('editor', 'code', 'Code Editor')}
          ${this.renderNavItem('documentation', 'menu_book', 'Documentation')}
        </nav>
        <div class="mt-auto px-6">
          <button class="w-full glass bg-primary/10 text-primary py-3 rounded-xl font-bold mb-8 hover:bg-primary/20 transition-all border border-primary/20">New Repository</button>
          <div class="space-y-4 pb-4">
             <div class="px-2">
                <div class="flex justify-between text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                  <span>Usage Status</span>
                  <span class="text-primary">98%</span>
                </div>
                <div class="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div class="w-[98%] h-full bg-primary accent-glow"></div>
                </div>
             </div>
          </div>
        </div>
      </aside>

      <main class="lg:ml-sidebar-width flex-1 flex flex-col bg-background/50 relative min-h-screen">
        <header class="sticky top-0 right-0 z-30 flex items-center justify-between px-4 lg:px-gutter h-16 w-full glass border-b border-outline-variant">
          <div class="flex items-center gap-4 lg:gap-8">
            <button id="hamburger" class="lg:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors">
              <span class="material-symbols-outlined">menu</span>
            </button>
            <div class="flex items-center gap-3 text-[10px] lg:text-xs font-bold text-on-surface-variant overflow-hidden">
              <span class="text-primary tracking-widest uppercase flex-shrink-0">● Online</span>
              <span class="opacity-30 flex-shrink-0">|</span>
              <span class="uppercase tracking-widest truncate">Uptime: 142h 12m</span>
            </div>
          </div>
          <div class="flex items-center gap-4 lg:gap-8 pr-2 lg:pr-4">
            <div class="flex items-center gap-3 lg:gap-6 text-on-surface-variant text-[10px] lg:text-xs font-mono">
               <span class="hidden sm:inline">24.05.2024</span>
               <div class="flex items-center gap-2 lg:gap-3">
                  <span class="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">notifications</span>
                  <span class="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-colors">account_circle</span>
               </div>
            </div>
          </div>
        </header>
        <div id="content" class="flex-1 relative z-10 p-4 lg:p-8 overflow-hidden">
          ${pages[this.currentPage].render()}
        </div>
      </main>
      
      <button class="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 w-14 h-14 lg:w-16 lg:h-16 bg-primary text-on-primary rounded-full accent-glow flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
        <span class="material-symbols-outlined text-2xl lg:text-3xl">add</span>
      </button>
    `;

    this.attachEventListeners();
  }

  private renderNavItem(id: string, icon: string, label: string) {
    const isActive = this.currentPage === id;
    const activeClasses = isActive 
      ? 'glass border-outline-variant text-primary accent-glow' 
      : 'text-on-surface-variant hover:bg-white/5 hover:text-on-surface';
    const iconPrefix = isActive ? '◈' : '⬡';
    return `
      <button data-page="${id}" class="${activeClasses} w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200">
        <span class="text-xs">${iconPrefix}</span>
        ${label}
      </button>
    `;
  }

  private attachEventListeners() {
    const navButtons = document.querySelectorAll('button[data-page]');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const pageId = btn.getAttribute('data-page');
        if (pageId && pages[pageId]) {
          this.currentPage = pageId;
          this.isMobileMenuOpen = false; // Close menu on navigation
          this.render();
        }
      });
    });

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
      hamburger.addEventListener('click', () => this.toggleMobileMenu());
    }

    const closeMenu = document.getElementById('close-menu');
    if (closeMenu) {
      closeMenu.addEventListener('click', () => this.toggleMobileMenu());
    }

    const overlay = document.getElementById('mobile-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => this.toggleMobileMenu());
    }
  }
}

new App();
