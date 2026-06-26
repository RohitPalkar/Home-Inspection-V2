import { useRef, useState } from "react";
import { Folder, X } from "lucide-react";

interface FileDropZoneProps {
  files: File[];
  onChange: (f: File[]) => void;
}

export function FileDropZone({ files, onChange }: FileDropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);

  const addFiles = (incoming: FileList | File[]) => {
    const list = Array.from(incoming);
    const next = [...files, ...list];
    onChange(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const remove = (i: number) => {
    const next = files.filter((_, idx) => idx !== i);
    onChange(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition ${
          dragging ? "border-primary bg-accent" : "border-border bg-muted/40 hover:bg-muted"
        }`}
      >
        <div className="w-12 h-12 rounded-lg bg-card grid place-items-center mx-auto shadow-card">
          <Folder className="w-6 h-6 text-primary" />
        </div>
        <p className="mt-3 font-semibold text-foreground">Drop or select file</p>
        <p className="text-sm text-muted-foreground">
          Drop files here or click to <span className="text-primary underline">browse</span> through
          your machine.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && addFiles(e.target.files)}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          {files.map((f, i) => (
            <div
              key={i}
              className="relative w-24 h-24 rounded-lg overflow-hidden border border-border bg-muted"
            >
              {previews[i] ? (
                <img src={previews[i]} alt={f.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full grid place-items-center text-xs text-muted-foreground p-1">
                  {f.name}
                </div>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  remove(i);
                }}
                className="absolute top-1 right-1 w-6 h-6 rounded-full bg-foreground/70 text-white grid place-items-center hover:bg-foreground"
                aria-label={`Remove ${f.name}`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
