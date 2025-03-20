import React from "react";
import { Settings, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenVisibility: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenVisibility }) => {
  return (
    <header className="py-3 px-5 glass-panel mb-5 flex justify-between items-center animate-appear max-w-5xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg animate-pulse-subtle"></div>
        <h1 className="text-lg font-semibold text-white">KUYUM FATURA</h1>
      </div>
      <div className="flex space-x-2">
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-finance-secondary border-white/10 hover:bg-finance-accent/80 hover:border-white/20 transition-all duration-300"
          onClick={onOpenVisibility}
        >
          <Eye className="h-5 w-5" />
          <span className="sr-only">Panel Seçimi</span>
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="bg-finance-secondary border-white/10 hover:bg-finance-accent/80 hover:border-white/20 transition-all duration-300"
          onClick={onOpenSettings}
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Ayarlar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
