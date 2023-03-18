import React from 'react'

const Stories = () => {
    const [state, setState] = React.useState([
        {id: 1, image: '/images/earbird.jpg', name: 'Ratan'},
        {id: 2, image: '/images/gym.jpg', name: 'Ratan'},
        {id: 3, image: '/images/hat.jpg', name: 'Ratan'},
        {id: 4, image: '/images/home.jpg', name: 'Ratan'},
        {id: 5, image: '/images/onway.jpg', name: 'Ratan'},
        {id: 6, image: '/images/selfi.jpg', name: 'Ratan'}
    ])
  return (
    <div className='stories'>
        {
            state.map(user=>(
                <div key={user.id}>
                    <div className='stories__info'>
                        <div className='stories__img'>
                            <span>
                                <img src={user.image} alt="user" />
                            </span>
                        </div>
                        <div className='stories__name'>{user.name}</div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Stories
