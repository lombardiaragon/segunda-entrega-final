import Config from "../config.js";
import admin from "firebase-admin"

await admin.initializeApp({
    credential: admin.credential.cert(Config.firebase),
    databaseURL: "https://ecommerce-coder-740ec.firebaseio.com"
})

console.log('firebase conectado');

const db=admin.firestore()
class ContenedorFirebase {
  // * Coleccion
  constructor(coleccion) {
    // this.db = admin.firestore(),
    this.query=db.collection(coleccion)
  }

  async findById(id) {
    try {
      const data = await this.query.doc(id).get();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async findAll() {
    try {
      const querySnapshot= await this.query.get()
      let docs=querySnapshot.docs
      const data= docs.map(doc=>doc)
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  async save(newDoc) {
    try {
      const doc = await this.query.add(newDoc);
      return doc;
    } catch (e) {
      throw new Error(e);
    }
  }

  async update(elem) {
    try {
      const doc = await this.query.doc(elem._id).set(elem);
      return doc;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(id) {
    try {
      const doc= await this.query.doc(id).get();
      const item= await doc.delete()
      return `${item} fue borrado exitosamente`;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteAll() {
    try {
      const doc= await this.query.doc.get();
      const item= await doc.delete()
      return `${item} fue borrado exitosamente`;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default ContenedorFirebase;