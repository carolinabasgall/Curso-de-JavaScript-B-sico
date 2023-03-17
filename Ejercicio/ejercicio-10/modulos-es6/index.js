//import {suma, multiplica} from './modulos/controller'
import * as moduloMatematicas from './modulos/controller'




const res = moduloMatematicas.multiplica(moduloMatematicas.suma(1, 2), moduloMatematicas.suma(4, 5));
console.log((res));


