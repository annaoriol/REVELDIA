/**
 * Contrato base para todos los motores de RƎVELA.
 *
 * Un Engine transforma un estado de conocimiento
 * en otro estado de conocimiento.
 */
export interface Engine<Input, Output> {
  execute(input: Input): Promise<Output>;
}