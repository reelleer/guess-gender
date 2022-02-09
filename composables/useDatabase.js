import firebase from "firebase";
const db = firebase.ref("/poll");
class DataService {
  getAll() {
    return db;
  }
  create(poll) {
    return db.push(poll);
  }
  update(key, value) {
    return db.child(key).update(value);
  }
  delete(key) {
    return db.child(key).remove();
  }
  deleteAll() {
    return db.remove();
  }
}
export default new DataService();