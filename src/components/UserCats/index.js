import './styles.css';
import UpdateForm from "../UpdateForm";
import { firebase } from '../../firebase';

export default function UserCats({catsArray}) {

  const deleteItem = async (id) => {
    const db = firebase.firestore(); 
    await db.collection("cats").doc(id).delete();
    window.location.reload(false);
  }
  
  return (
    <div className="container">    
      {
        catsArray.map((item) => (
          <div className="itemBox">
            <div>
              <img src={item.src} alt={item.id} className='itemImg'/>
              <div className='textContainer'>
                <p className='textItems'>Age: {item.age}</p>
                <p className='textItems'>Name: {item.name}</p>
                <p className='textItems'>Color: {item.color}</p>
              </div>
            </div>
            <div>
              <UpdateForm item={item}/>
              <button onClick={() => deleteItem(item.id)}>Delete Item</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}