import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export interface VisibilitySettings {
  show24k: boolean;
  show22k: boolean;
  show14k: boolean;
  show8k: boolean;
}

interface VisibilityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  visibility: VisibilitySettings;
  onSaveVisibility: (visibility: VisibilitySettings) => void;
}

const VisibilityDialog: React.FC<VisibilityDialogProps> = ({
  open,
  onOpenChange,
  visibility,
  onSaveVisibility,
}) => {
  const [localVisibility, setLocalVisibility] = useState<VisibilitySettings>(visibility);

  // Update local state when props change
  useEffect(() => {
    setLocalVisibility(visibility);
  }, [visibility]);

  const handleCheckboxChange = (key: keyof VisibilitySettings, checked: boolean) => {
    setLocalVisibility((prev) => {
      const newSettings = { ...prev, [key]: checked };
      
      // Save immediately
      onSaveVisibility(newSettings);
      return newSettings;
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel border-white/10 text-white sm:max-w-[15rem]">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">PANEL SEÇİMİ</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="show24k" 
              checked={localVisibility.show24k}
              onCheckedChange={(checked) => 
                handleCheckboxChange("show24k", checked as boolean)
              }
            />
            <Label htmlFor="show24k" className="font-medium text-gold-24k">
              24 AYAR
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="show22k" 
              checked={localVisibility.show22k}
              onCheckedChange={(checked) => 
                handleCheckboxChange("show22k", checked as boolean)
              }
            />
            <Label htmlFor="show22k" className="font-medium text-gold-22k">
              22 AYAR
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="show14k" 
              checked={localVisibility.show14k}
              onCheckedChange={(checked) => 
                handleCheckboxChange("show14k", checked as boolean)
              }
            />
            <Label htmlFor="show14k" className="font-medium text-gold-14k">
              14 AYAR
            </Label>
          </div>
          
          <div className="flex items-center space-x-3">
            <Checkbox 
              id="show8k" 
              checked={localVisibility.show8k}
              onCheckedChange={(checked) => 
                handleCheckboxChange("show8k", checked as boolean)
              }
            />
            <Label htmlFor="show8k" className="font-medium text-gold-8k">
              8 AYAR
            </Label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VisibilityDialog;
