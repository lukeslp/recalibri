import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, Download, Laptop, Moon, Sun } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  
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
            <div className="ml-2 px-2 py-0.5 bg-secondary text-secondary-foreground text-[10px] uppercase tracking-widest font-bold rounded-sm">Preview</div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/recalibri-extension.zip" download>
                <Download className="w-4 h-4 mr-2" />
                Download
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
      <section className="py-16 md:py-24 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-medium uppercase tracking-wider mb-6">
            Restoring Accessibility
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
            <span className="font-serif relative inline-block mr-4">
              Times New Roman
              <span className="absolute top-1/2 left-0 w-full h-2 bg-red-600 -rotate-2 transform origin-center"></span>
            </span>
            <br className="md:hidden" />
            <span className="text-primary">Is Not Accessible.</span>
          </h1>
          
          {/* Single Explanation Callout */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-10 text-left">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-8 bg-red-600 rounded-full"></span>
              Why this exists
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The State Department recently reverted to Times New Roman, a serif font that creates significant reading barriers for people with dyslexia and visual impairments. 
              <strong className="text-foreground block mt-2">ReCalibri is a simple tool that forces government websites (or all websites) back to accessible sans-serif fonts like Calibri, Open Sans, or OpenDyslexic.</strong>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-base px-10 h-14 shadow-xl hover:scale-105 transition-transform" asChild>
              <a href="/recalibri-extension.zip" download>
                <Download className="w-6 h-6 mr-2" />
                Download Extension ZIP
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Free & Open Source • MIT License
          </p>
        </div>
      </section>

      {/* Visual Installation Guide */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How to Install (Manual)</h2>
          
          <div className="space-y-16 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-border before:-translate-x-1/2">
            
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 flex justify-end order-2 md:order-1">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md w-full max-w-md">
                  <img src="/install-step-1-url.png" alt="Chrome extensions URL bar" className="w-full" />
                </div>
              </div>
              
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 border-4 border-background">1</div>
              
              <div className="md:w-1/2 pl-20 md:pl-12 order-1 md:order-2">
                <h3 className="text-xl font-bold mb-2">Go to Extensions</h3>
                <p className="text-muted-foreground mb-3">
                  Copy and paste this URL into your browser bar:
                </p>
                <div className="flex gap-2">
                  <code className="bg-muted px-3 py-2 rounded text-sm flex-1 font-mono border border-border truncate">chrome://extensions/</code>
                  <Button variant="outline" size="icon" onClick={() => copyToClipboard("chrome://extensions/")}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 pr-0 md:pr-12 pl-20 md:pl-0 text-left md:text-right order-1">
                <h3 className="text-xl font-bold mb-2">Enable Developer Mode</h3>
                <p className="text-muted-foreground">
                  Toggle the switch in the top-right corner. This reveals the "Load unpacked" button.
                </p>
              </div>
              
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 border-4 border-background">2</div>
              
              <div className="md:w-1/2 flex justify-start order-2">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md w-full max-w-md">
                  <img src="/install-step-2-devmode.png" alt="Developer mode toggle" className="w-full" />
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 flex justify-end order-2 md:order-1">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md w-full max-w-md p-4 bg-muted/30">
                  <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center">
                    <Download className="w-8 h-8 mx-auto text-primary mb-2" />
                    <span className="text-sm font-medium">Drag folder here</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10 border-4 border-background">3</div>
              
              <div className="md:w-1/2 pl-20 md:pl-12 order-1 md:order-2">
                <h3 className="text-xl font-bold mb-2">Load the Extension</h3>
                <p className="text-muted-foreground">
                  Unzip the downloaded file, then click <strong>"Load unpacked"</strong> and select the folder (or just drag the folder onto the page).
                </p>
              </div>
            </div>
            
            {/* Success */}
            <div className="relative flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 pr-0 md:pr-12 pl-20 md:pl-0 text-left md:text-right order-1">
                <h3 className="text-xl font-bold mb-2">You're Done!</h3>
                <p className="text-muted-foreground mb-4">
                  ReCalibri is now active. Pin it to your toolbar to change settings anytime.
                </p>
                <div className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                  <Check className="w-4 h-4" /> Installed Successfully
                </div>
              </div>
              
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold z-10 border-4 border-background">
                <Check className="w-6 h-6" />
              </div>
              
              <div className="md:w-1/2 flex justify-start order-2">
                <div className="bg-card border border-border rounded-xl overflow-hidden shadow-md w-full max-w-md">
                  <img src="/install-step-3-card.png" alt="Installed extension card" className="w-full" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground mb-4">
            Built with ❤️ for accessibility by <a href="https://dr.eamer.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">dr.eamer.dev</a>
          </p>
          <p className="text-xs text-muted-foreground opacity-70">
            Released under MIT License • 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
