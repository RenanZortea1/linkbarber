"use client";

import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxProps {
  isEnabled: boolean;
  text: string;
}

export function CheckboxDisabled({ isEnabled, text }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms2" disabled={!isEnabled} />
      <label
        htmlFor="terms2"
        className={`text-sm font-medium leading-none ${
          !isEnabled ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        {text}
      </label>
    </div>
  );
}

