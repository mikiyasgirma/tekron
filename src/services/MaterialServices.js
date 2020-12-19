/// TODO: do crud operation on Materials communicate with cloud firestore 

import {db} from '../firebase';


export const createNewRawMaterial = (newRawMaterial) =>{
    return db.collection('rawMaterials')
        .add(newRawMaterial);
} 