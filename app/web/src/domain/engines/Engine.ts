/**
 * Contrato base para todos los motores de RƎVELA.
 *
 * Cada motor transforma una entrada en una salida.
 */
export interface Engine<Input, Output> {
  execute(input: Input): Promise<Output>;
}