import type { FileUploadState } from "../types";

export type ExportPayload = {
  fileName: string;
  mimeType: "text/plain;charset=utf-8";
  content: string;
};

export function buildExportPayload(state: FileUploadState, fileName = "file-upload") : ExportPayload {
  return {
    fileName: `${fileName || "file-upload"}.jsx`,
    mimeType: "text/plain;charset=utf-8",
    content: buildReactCode(state),
  };
}

export function buildReactCode(state: FileUploadState) {
  return [
    "import * as React from \"react\";",
    "",
    "const state = " + JSON.stringify(state, null, 2) + ";",
    "",
    "export default function FileUploadComponent() {",
    "  return (",
        "    <label htmlFor={state.id}>{state.label}</label>",
    "    <input id={state.id} name={state.name} type=\"file\" accept={state.accept} multiple={state.multiple} capture={state.capture || undefined} required={state.required} disabled={state.disabled} />",
    "  );",
    "}",
    "",
  ].join("\n");
}
