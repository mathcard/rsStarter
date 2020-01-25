export const idade = 23;

/* No arquivo para importação
import ClasseUsuario, {idade as IdadeUsuario} from './functions';

ClasseUsuario.info();
console.log(IdadeUsuario);

*/

export default class Usuario {
  static info() {
    console.log('Apenas teste');
  }
}