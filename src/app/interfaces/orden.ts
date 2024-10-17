export interface Orden {
    tipo_ot_id: number,
    piso_id: number, 
    sector_id: number, 
    edificio_id: number, 
    codigo_unico: string, 
    observacion: string, 
    usuario_id: number, 
    activo_tarea_descrip_id: number, 
    fecha_creacion: Date
}