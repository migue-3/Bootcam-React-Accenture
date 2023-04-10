import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => {
       
        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        };

        const user = getUser();
        //console.log(user)

        expect( testUser ).toStrictEqual( user );
    });

    test('getUsuarioActivo debe retornar un objeto', () => { 
       
       const name = 'miguel';
       
       const testUserActivo = getUsuarioActivo(name);
       
       expect(testUserActivo).toStrictEqual({

        uid: 'ABC567',
        username: name

       });
       
     });
    test('usContext debe retornar un objeto', () => { 
       
       const clave = 'scalant15';
       const edad = 27;
  
       
       const testUsContext = usContext({clave,edad});
       //console.log(testUsContext)
       
       expect(testUsContext).toStrictEqual({

        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
       });
       
     });

 });
