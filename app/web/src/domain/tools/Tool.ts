/**
 * Contrato base para todas las herramientas del Director Creativo.
 *
 * Una Tool recibe conocimiento, lo transforma y devuelve
 * un nuevo estado del proceso creativo.
 */
export interface Tool<Input, Output> {
  execute(input: Input): Promise<Output>;
}