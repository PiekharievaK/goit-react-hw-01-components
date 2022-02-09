  

function FriendlistItem({avatar, status, name }) {
   
                return (
                    <li className="item" key=''>
                        <span className="status" style={{ display: 'block', borderRadius: '50px', width: '10px', height: '10px',   backgroundColor: status ?'green': 'red'}} ></span> 
                        <img className="avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="name">{ name}</p>
                    </li>)
    
} 

export default FriendlistItem