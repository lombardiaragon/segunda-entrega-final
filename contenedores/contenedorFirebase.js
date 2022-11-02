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
    // {
    //     _id: new ObjectId("635c56101795f3da84d46c51"),
    //     name: 'eduardo',
    //     pokemon: [],
    //     __v: 0
    //   }
    try {
      const { n, nModified } = await this.db.replaceOne(
        { _id: elem._id },
        elem
      );
      return nModified > 0;
    } catch (e) {
      throw new Error(e);
    }
  }

  async delete(id) {
    try {
      const { n, nDeleted } = await this.db.deleteOne({ _id: id });
      return nDeleted > 0;
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteAll() {
    await this.db.deleteMany({});
  }
}

export default ContenedorFirebase;