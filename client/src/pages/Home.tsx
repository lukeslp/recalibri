import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, Download, Eye, Github, Globe, Laptop, Moon, Smartphone, Type, X } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export default function Home() {
  const [activeFont, setActiveFont] = useState("calibri");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-red-100 selection:text-red-900">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-serif text-2xl font-bold relative">
              Re
              <div className="absolute top-1/2 left-0 w-full h-1 bg-red-600 -rotate-12 transform origin-center"></div>
            </div>
            <div className="font-sans text-2xl font-normal">Calibri</div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#install" className="text-sm font-medium hover:text-primary transition-colors">Install</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/recalibri-extension.zip" download>
                <Download className="w-4 h-4 mr-2" />
                Download v2.0
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Notice */}
      <div className="md:hidden bg-primary text-primary-foreground p-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Laptop className="w-4 h-4" />
          <span className="font-bold">Desktop Required</span>
        </div>
        <p className="opacity-90">Chrome extensions only work on desktop browsers. Please visit this site on your computer to install.</p>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium uppercase tracking-wider">
              Restoring Accessibility
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              <span className="font-serif relative inline-block mr-4">
                Times New Roman
                <span className="absolute top-1/2 left-0 w-full h-2 bg-red-600 -rotate-2 transform origin-center"></span>
              </span>
              <br />
              <span className="text-primary">Is Not Accessible.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              The State Department reverted to Times New Roman, creating barriers for people with disabilities. ReCalibri restores accessible typography on government websites and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href="/recalibri-extension.zip" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Extension
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base" asChild>
                <a href="#how-it-works">How it Works</a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              v2.0 • Free & Open Source • MIT License
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-100 to-blue-50 rounded-3xl blur-2xl opacity-50"></div>
            <Card className="relative border-2 shadow-xl overflow-hidden">
              <CardHeader className="bg-muted/50 border-b pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">state.gov</div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden bg-white group">
                  {/* Before Image (Bottom Layer) */}
                  <img 
                    src="/state-gov-before.webp" 
                    alt="State.gov website with Times New Roman font" 
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  
                  {/* After Image (Top Layer with Clip Path) */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden transition-all duration-500 ease-in-out" style={{ clipPath: `inset(0 ${activeFont === 'calibri' ? '0' : '100%'} 0 0)` }}>
                     <img 
                      src="/state-gov-after.png" 
                      alt="State.gov website with Calibri font" 
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Slider Handle (Visual Only for now, toggle based) */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg transition-opacity duration-300" style={{ opacity: activeFont === 'calibri' ? 1 : 0 }}>
                      After (Calibri)
                    </div>
                    <div className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm shadow-lg border border-gray-200 transition-opacity duration-300 absolute" style={{ opacity: activeFont !== 'calibri' ? 1 : 0 }}>
                      Before (Times New Roman)
                    </div>
                  </div>
                </div>
                
                {/* Interactive Controls */}
                <div className="bg-muted/50 p-4 border-t border-border flex flex-col items-center gap-3">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Toggle to see the difference</p>
                  <div className="flex justify-center gap-4">
                    <button 
                      onClick={() => setActiveFont("times")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${activeFont !== "calibri" ? "bg-black text-white shadow-lg scale-105" : "bg-white text-black hover:bg-gray-100 border border-border"}`}
                      aria-label="Show Times New Roman version"
                      aria-pressed={activeFont !== "calibri"}
                    >
                      Before
                    </button>
                    <button 
                      onClick={() => setActiveFont("calibri")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${activeFont === "calibri" ? "bg-black text-white shadow-lg scale-105" : "bg-white text-black hover:bg-gray-100 border border-border"}`}
                      aria-label="Show Calibri version"
                      aria-pressed={activeFont === "calibri"}
                    >
                      After
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Designed for Everyone</h2>
            <p className="text-muted-foreground">
              Accessibility isn't just a feature—it's a fundamental right. ReCalibri provides the tools you need to read the web comfortably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <CardHeader>
                <Type className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Multiple Accessible Fonts</CardTitle>
                <CardDescription>
                  Choose between Calibri, Open Sans, or OpenDyslexic to find what works best for your eyes.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <CardHeader>
                <Globe className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Flexible Scope</CardTitle>
                <CardDescription>
                  Target only .gov websites to fix official documents, or apply accessible fonts globally across the web.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-none shadow-none bg-secondary/20 hover:bg-secondary/40 transition-colors">
              <CardHeader>
                <Moon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>Visual Comfort</CardTitle>
                <CardDescription>
                  Includes built-in light/dark mode and font size adjustments for the extension interface.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="install" className="py-20 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">How to Install</h2>
              <p className="text-muted-foreground mb-8">
                While we wait for Chrome Web Store approval, you can install ReCalibri manually in developer mode. It takes less than a minute.
              </p>
              
              <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-xl font-bold mb-2">Download & Extract</h3>
                  <p className="text-muted-foreground mb-4">
                    Download the extension ZIP file and extract it to a folder on your computer.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/recalibri-extension.zip" download>
                      <Download className="w-4 h-4 mr-2" />
                      Download ZIP
                    </a>
                  </Button>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-xl font-bold mb-2">Open Extensions Page</h3>
                  <p className="text-muted-foreground mb-3">
                    Copy this link and paste it into your Chrome address bar (browsers block direct links to settings pages):
                  </p>
                  <div className="flex gap-2 max-w-md">
                    <code className="bg-muted px-3 py-2 rounded text-sm flex-1 font-mono border border-border">chrome://extensions/</code>
                    <Button variant="outline" size="sm" onClick={() => copyToClipboard("chrome://extensions/")}>
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="text-xl font-bold mb-2">Enable Developer Mode</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Crucial Step:</strong> Toggle the "Developer mode" switch in the top-right corner of the extensions page.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-xs text-yellow-800">
                    Without this switch enabled, you won't see the "Load unpacked" button.
                  </div>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</div>
                  <h3 className="text-xl font-bold mb-2">Load Unpacked</h3>
                  <p className="text-muted-foreground">
                    Click "Load unpacked" and select the folder where you extracted the files (select the folder containing manifest.json).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-background rounded-xl border border-border p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Why Manual Install?</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Immediate Access</h4>
                    <p className="text-sm text-muted-foreground">Don't wait for store review processes (which can take weeks).</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Full Transparency</h4>
                    <p className="text-sm text-muted-foreground">You can inspect every file before installing. No hidden code.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1 bg-green-100 text-green-700 p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-medium">Privacy Focused</h4>
                    <p className="text-sm text-muted-foreground">No data collection, no tracking, no external servers.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm">
                <strong>Note:</strong> Once approved, ReCalibri will be available on the Chrome Web Store for one-click installation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Context */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Context</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p>
              In December 2025, the U.S. State Department reversed a 2023 accessibility directive, switching back from Calibri to Times New Roman. The original change was made specifically to <strong>"mitigate accessibility issues for individuals with disabilities."</strong>
            </p>
            <p>
              Serif fonts like Times New Roman have decorative features (tails, wings, angular elements) that create barriers for:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-6">
              <li>People with visual disabilities</li>
              <li>People with dyslexia</li>
              <li>Users of screen readers and assistive technologies</li>
              <li>Anyone with reading difficulties</li>
            </ul>
            <p>
              ReCalibri was built to restore the accessible typography that was removed, ensuring that government information remains accessible to all citizens regardless of their abilities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="font-serif text-xl font-bold relative">
                Re
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-600 -rotate-12 transform origin-center"></div>
              </div>
              <div className="font-sans text-xl font-normal">Calibri</div>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>Created by <a href="https://dr.eamer.dev" className="text-primary hover:underline font-medium">Luke Steuber (dr.eamer.dev)</a></p>
              <p className="mt-1">© 2025 • MIT License • <a href="https://github.com/lukeslp" className="hover:underline">GitHub</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
