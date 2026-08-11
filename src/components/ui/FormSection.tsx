import React from "react";

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <section>
      <div className="mb-7">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h2>

        {description && (
          <p className="mt-1.5 text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}
