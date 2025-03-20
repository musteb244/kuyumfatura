import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export interface SettingsProps {
  workRate22k: number;
  workRate14k: number;
  workRate8k: number;
  kdvRate: number;
}

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  settings: SettingsProps;
  onSaveSettings: (settings: SettingsProps) => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
  settings,
  onSaveSettings,
}) => {
  const [localSettings, setLocalSettings] = useState<SettingsProps>(settings);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);

    if (!isNaN(numValue)) {
      setLocalSettings((prev) => ({
        ...prev,
        [name]: numValue,
      }));
    } else if (value === "") {
      setLocalSettings((prev) => ({
        ...prev,
        [name]: 0,
      }));
    }
  };

  const handleSave = () => {
    onSaveSettings(localSettings);
    toast.success("Ayarlar başarıyla kaydedildi", {
      position: "top-center",
      duration: 2000,
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-panel border-white/10 text-white sm:max-w-[20rem]">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">AYARLAR</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-[1fr_1fr] items-center gap-4">
            <Label htmlFor="workRate22k" className="text-left whitespace-nowrap">
              22K İŞÇİLİK ORANI %
            </Label>
            <Input
              id="workRate22k"
              name="workRate22k"
              type="number"
              step="0.1"
              className="input-field"
              style={{ width: '80px', marginLeft: 'auto' }}
              value={localSettings.workRate22k}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-[1fr_1fr] items-center gap-4">
            <Label htmlFor="workRate14k" className="text-left whitespace-nowrap">
              14K İŞÇİLİK ORANI %
            </Label>
            <Input
              id="workRate14k"
              name="workRate14k"
              type="number"
              step="0.1"
              className="input-field"
              style={{ width: '80px', marginLeft: 'auto' }}
              value={localSettings.workRate14k}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-[1fr_1fr] items-center gap-4">
            <Label htmlFor="workRate8k" className="text-left whitespace-nowrap">
              8K İŞÇİLİK ORANI %
            </Label>
            <Input
              id="workRate8k"
              name="workRate8k"
              type="number"
              step="0.1"
              className="input-field"
              style={{ width: '80px', marginLeft: 'auto' }}
              value={localSettings.workRate8k}
              onChange={handleInputChange}
            />
          </div>
          <div className="grid grid-cols-[1fr_1fr] items-center gap-4">
            <Label htmlFor="kdvRate" className="text-left whitespace-nowrap">
              İŞÇİLİK KDV ORANI %
            </Label>
            <Input
              id="kdvRate"
              name="kdvRate"
              type="number"
              step="0.1"
              className="input-field"
              style={{ width: '80px', marginLeft: 'auto' }}
              value={localSettings.kdvRate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button 
            className="neo-button" 
            onClick={handleSave}
          >
            Kaydet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
