export default class Producto{
    /**
     * 
     * @param {number} codigo;
     * @param {string} nombre; 
     * @param {string} descripcion; 
     * @param {number} cantidad;
     * @param {number} costo;
     */
    constructor(codigo, nombre, descripcion, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.costo = costo;
        this.total = costo * cantidad;
        this.siguiente = null;
    }
}