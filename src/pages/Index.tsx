import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import SettingsDialog, { SettingsProps } from "@/components/SettingsDialog";
import VisibilityDialog, { VisibilitySettings } from "@/components/VisibilityDialog";
import GoldCalculator from "@/components/GoldCalculator";
import { Toaster } from "sonner";

const defaultSettings: SettingsProps = {
  workRate22k: 1.4,
  workRate14k: 6,
  workRate8k: 6,
  kdvRate: 20,
};

const defaultVisibility: VisibilitySettings = {
  show24k: true,
  show22k: true,
  show14k: true,
  show8k: false,
};

const Index = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [visibilityOpen, setVisibilityOpen] = useState(false);
  const [settings, setSettings] = useState<SettingsProps>(defaultSettings);
  const [visibility, setVisibility] = useState<VisibilitySettings>(defaultVisibility);

  // Load visibility settings from localStorage
  useEffect(() => {
    const savedVisibility = localStorage.getItem('visibility');
    if (savedVisibility) {
      try {
        const parsedVisibility = JSON.parse(savedVisibility);
        setVisibility(parsedVisibility);
      } catch (error) {
        console.error("Error parsing visibility settings:", error);
      }
    }
  }, []);

  const handleSaveSettings = (newSettings: SettingsProps) => {
    setSettings(newSettings);
  };

  const handleSaveVisibility = (newVisibility: VisibilitySettings) => {
    setVisibility(newVisibility);
    localStorage.setItem('visibility', JSON.stringify(newVisibility));
  };

  return (
    <div className="min-h-screen px-4 py-2 md:py-3 max-w-5xl mx-auto">
      <Toaster position="top-center" />
      
      <Header 
        onOpenSettings={() => setSettingsOpen(true)} 
        onOpenVisibility={() => setVisibilityOpen(true)}
      />
      
      <div className="container mx-auto">
        <GoldCalculator settings={settings} visibility={visibility} />
      </div>
      
      <SettingsDialog
        open={settingsOpen}
        onOpenChange={setSettingsOpen}
        settings={settings}
        onSaveSettings={handleSaveSettings}
      />
      
      <VisibilityDialog
        open={visibilityOpen}
        onOpenChange={setVisibilityOpen}
        visibility={visibility}
        onSaveVisibility={handleSaveVisibility}
      />
      
      <footer className="mt-6 text-center text-white/50 text-sm animate-appear font-cursive" style={{ animationDelay: '500ms' }}>
        <p>© {new Date().getFullYear()} Made by Müşteba</p>
      </footer>
    </div>
  );
};

export default Index;
