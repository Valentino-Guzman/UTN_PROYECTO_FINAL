export interface Orden {
    id: number;
    tipo_ot_id: number;
    piso_id: number;
    sector_id: number;
    ubicacion_id: number;
    edificio_id: number;
    codigo_concatenado: string;
    observacion: string;
    usuario_id: number;
    activo_tarea_descrip_id: number
    fecha_creacion: Date;
    activo_nombre?: string;
    descripciones?: string;
    numero_de_orden?: string;
    fecha_creacion_formateada?: string;
    tiempo_transcurrido?: number
}

export interface OrdenStatus {
    id: number
    estado: string;  
}

export interface OrdenResponse {
    completas: string;
    pendientes: string;
    en_progreso: string;
}

export interface GraficoOrden {
    name: string; 
    value: number;
}

export interface OrdenTiempo {
    tiempoInicio: number;
    tiempoTranscurrido: number;
}
