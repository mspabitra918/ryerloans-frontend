import React from "react";
import { Info, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

type CalloutType = "info" | "success" | "warning" | "neutral";

interface CalloutBoxProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const styles: Record<
  CalloutType,
  { bg: string; border: string; text: string; iconColor: string }
> = {
  info: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-950",
    iconColor: "text-sky-600",
  },
  success: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-950",
    iconColor: "text-emerald-600",
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-950",
    iconColor: "text-amber-600",
  },
  neutral: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-800",
    iconColor: "text-slate-500",
  },
};

export function CalloutBox({
  type = "info",
  title,
  children,
  icon,
}: CalloutBoxProps) {
  const currentStyle = styles[type];

  const defaultIcons: Record<CalloutType, React.ReactNode> = {
    info: (
      <Info
        className={`w-5 h-5 ${currentStyle.iconColor} flex-shrink-0 mt-0.5`}
      />
    ),
    success: (
      <CheckCircle2
        className={`w-5 h-5 ${currentStyle.iconColor} flex-shrink-0 mt-0.5`}
      />
    ),
    warning: (
      <AlertTriangle
        className={`w-5 h-5 ${currentStyle.iconColor} flex-shrink-0 mt-0.5`}
      />
    ),
    neutral: (
      <ShieldCheck
        className={`w-5 h-5 ${currentStyle.iconColor} flex-shrink-0 mt-0.5`}
      />
    ),
  };

  return (
    <div
      className={`${currentStyle.bg} border ${currentStyle.border} rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 ${currentStyle.text}`}
    >
      {icon || defaultIcons[type]}
      <div className="space-y-1 text-xs sm:text-sm leading-relaxed">
        {title && (
          <strong className="block font-bold text-slate-900">{title}</strong>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
