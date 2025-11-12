import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`rounded-xl bg-white shadow-sm border border-slate-200 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }) {
  return (
    <div className={`p-4 border-b border-slate-100 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children }) {
  return <h3 className={`text-base font-semibold text-slate-900 ${className}`}>{children}</h3>;
}

export function CardContent({ className = "", children }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
