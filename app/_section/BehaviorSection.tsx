"use client";

import { SectionCard } from "@/components/shared/layout/SectionCard";
import Switch from "@/components/shared/input/Switch";
import type { FileUploadState } from "../types";

type Props = {
  state: FileUploadState;
  update: <K extends keyof FileUploadState>(key: K, value: FileUploadState[K]) => void;
};

export default function BehaviorSection({ state, update }: Props) {
  return (
    <SectionCard title="Behavior" subtitle="Behavior controls that are native, preview-honest, and React-export-honest.">
      <Switch label="Motion safe transition" checked={state.motion} onChange={(value) => update("motion", value)} />
    </SectionCard>
  );
}
