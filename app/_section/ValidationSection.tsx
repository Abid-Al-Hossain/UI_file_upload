"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Input from "@/components/shared/input/Input";
import Switch from "@/components/shared/input/Switch";
import type { FileUploadState } from "../types";

type Props = {
  state: FileUploadState;
  update: <K extends keyof FileUploadState>(key: K, value: FileUploadState[K]) => void;
};

export default function ValidationSection({ state, update }: Props) {
  return (
    <SectionCard title="Validation" subtitle="Validation controls that are native, preview-honest, and React-export-honest.">
      <div className="space-y-4">
      <Switch label="Required" checked={state.required} onChange={(value) => update("required", value)} />
      <Switch label="Disabled" checked={state.disabled} onChange={(value) => update("disabled", value)} />
      <Switch label="Invalid" checked={state.invalid} onChange={(value) => update("invalid", value)} />
      <Input label="Error text" value={state.errorText} onChange={(value) => update("errorText", value)} />
      <Input label="Success text" value={state.successText} onChange={(value) => update("successText", value)} />
    </div>
    </SectionCard>
  );
}
