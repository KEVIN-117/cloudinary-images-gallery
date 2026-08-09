import { AlertTriangle, CheckCircle2, Info, Loader2, Terminal, XCircle } from "lucide-react";
import type * as React from "react";
import { toast } from "@/components/atoms/use-toast";

// Mapa de íconos por tipo de notificación
const ICON_MAP = {
    success: <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />,
    error: <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />,
    warning: <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />,
    info: <Info className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />,
    loading: <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-fuchsia-400" />,
    json: <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />,
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
        <div className="flex w-full items-start gap-3">
            {icon}
            <div className="grid gap-0.5">
                <p className="font-mono font-semibold text-sm tracking-wide">{title}</p>
                {description && <p className="text-xs leading-relaxed opacity-75">{description}</p>}
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
                <ToastContent icon={ICON_MAP.success} title={title} description={description} />
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
                <ToastContent icon={ICON_MAP.error} title={title} description={description} />
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
                <ToastContent icon={ICON_MAP.warning} title={title} description={description} />
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
                <ToastContent icon={ICON_MAP.info} title={title} description={description} />
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
                <ToastContent icon={ICON_MAP.loading} title={title} description={description} />
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
                <div className="flex w-full items-start gap-3">
                    {ICON_MAP.json}
                    <div className="grid min-w-0 flex-1 gap-1.5">
                        {title && (
                            <p className="font-mono font-semibold text-sm tracking-wide">{title}</p>
                        )}
                        <pre className="w-full overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 text-[11px] text-white/80 leading-relaxed">
                            <code>{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    </div>
                </div>
            ),
            variant: "default",
        });
    },
};
