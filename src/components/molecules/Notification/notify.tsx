import * as React from "react";
import { toast } from "@/components/atoms/use-toast";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
  Loader2,
  Terminal,
} from "lucide-react";

// Mapa de íconos por tipo de notificación
const ICON_MAP = {
  success: <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />,
  error: <XCircle className="h-4 w-4 shrink-0 text-rose-400 mt-0.5" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />,
  info: <Info className="h-4 w-4 shrink-0 text-violet-400 mt-0.5" />,
  loading: <Loader2 className="h-4 w-4 shrink-0 text-fuchsia-400 mt-0.5 animate-spin" />,
  json: <Terminal className="h-4 w-4 shrink-0 text-white/60 mt-0.5" />,
};

/**
 * Componente wrapper para renderizar icon + contenido juntos en el description
 */
function ToastContent({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-3 w-full">
      {icon}
      <div className="grid gap-0.5">
        <p className="text-sm font-semibold font-mono tracking-wide">{title}</p>
        {description && (
          <p className="text-xs opacity-75 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}

/**
 * notify — API centralizada para disparar toast notifications con identidad Vault.
 *
 * Variantes disponibles: success | error | warning | info | loading | json
 *
 * @example
 * notify.success("Asset saved", "Your image has been uploaded to the vault.");
 * notify.error("Upload failed", "Check your connection and try again.");
 * notify.warning("Storage limit", "You are approaching your vault capacity.");
 * notify.info("New drop", "3 new assets are available in the archives.");
 * notify.loading("Syncing vault…");
 * notify.json({ id: 1 }, "Payload");
 */
export const notify = {
  /**
   * Operación completada con éxito.
   * Color: cyan neón — "Asset saved", "Upload complete"
   */
  success: (title: string, description?: string) => {
    toast({
      description: (
        <ToastContent
          icon={ICON_MAP.success}
          title={title}
          description={description}
        />
      ),
      variant: "success",
    });
  },

  /**
   * Error o acción destructiva.
   * Color: rose neón — "Upload failed", "Access denied"
   */
  error: (title: string, description?: string) => {
    toast({
      description: (
        <ToastContent
          icon={ICON_MAP.error}
          title={title}
          description={description}
        />
      ),
      variant: "destructive",
    });
  },

  /**
   * Advertencia no crítica.
   * Color: ámbar cálido — "Storage limit", "Slow connection"
   */
  warning: (title: string, description?: string) => {
    toast({
      description: (
        <ToastContent
          icon={ICON_MAP.warning}
          title={title}
          description={description}
        />
      ),
      variant: "warning",
    });
  },

  /**
   * Notificación informativa del sistema.
   * Color: violeta — "New drop", "System notice"
   */
  info: (title: string, description?: string) => {
    toast({
      description: (
        <ToastContent
          icon={ICON_MAP.info}
          title={title}
          description={description}
        />
      ),
      variant: "info",
    });
  },

  /**
   * Proceso en curso o carga.
   * Color: fuchsia — "Uploading…", "Syncing vault"
   */
  loading: (title: string, description?: string) => {
    toast({
      description: (
        <ToastContent
          icon={ICON_MAP.loading}
          title={title}
          description={description}
        />
      ),
      variant: "loading",
    });
  },

  /**
   * Muestra un payload JSON formateado.
   * Ideal para debugging en desarrollo.
   */
  json: (data: unknown, title?: string) => {
    toast({
      description: (
        <div className="flex items-start gap-3 w-full">
          {ICON_MAP.json}
          <div className="grid gap-1.5 flex-1 min-w-0">
            {title && (
              <p className="text-sm font-semibold font-mono tracking-wide">{title}</p>
            )}
            <pre className="w-full overflow-x-auto rounded-lg bg-black/40 border border-white/10 p-3 text-[11px] text-white/80 leading-relaxed">
              <code>{JSON.stringify(data, null, 2)}</code>
            </pre>
          </div>
        </div>
      ),
      variant: "default",
    });
  },
};
