
getOneDocument()

//read one
async function getOneDocument() {
const docId = '7rOyEFVRjLwpE7YRZrXG'
//promise
// firebase.firestore().collection('users').doc(docId).get()
// .then((res)=> {
//     console.log(res.data())
// })
// async await
const res = await firebase.firestore().collection('users').doc(docId).get()
const user = getDataFromDoc(res)
console.log(user)
}
//read multi
async function getManyDocument(){
    const res = await firebase.firestore().collection('users').where('email','array-contains','email1').get()
    const users = getDataFromDocs(res.docs)
 console.log(users)
    
}
getManyDocument()

function getDataFromDocs(docs){
   
    return docs.map(getDataFromDoc)
}




function getDataFromDoc(doc) {
const data = doc.data()
data.id = doc.id;
return data
}

//add document
addDocument()
function addDocument(){
 const dataToAdd = {
     name:'ahihi',
     address: 'hn',
     age:20
 }
 firebase.firestore().collection('users').add(dataToAdd)
}

//update document
function updateDocument(){
    const idUpdate = 'jtvLEwBvZMAiwu1HStK6'
    const dataToUpdate = {
phone: firebase.firestore.FieldValue.arrayUnion('102020','123456789'),
name: firebase.firestore.FieldValue.delete()

//arrayRemove
    }
    firebase.firestore().collection('users').doc(idUpdate).update(dataToUpdate)
}
updateDocument()

//delete

function deleteDocument(){
    const idDelete = '25m4Ira7NHdgd9bRWjQO';
   firebase.firestore().collection('users').doc(idDelete).delete()
}

deleteDocument()