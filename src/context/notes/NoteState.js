import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState=(props)=>{
    // const s1={
    //     "name":"Trina",
    //     "class":"5b"
    // }
    // const [state, setState] = useState(s1);
    // const update=()=>{
    //     setTimeout(() => {
    //         setState({
    //             "name":"Rina",
    //             "class":"1-b"
    //         })
    //     }, 1000);
    // }

    const notesInitial=[
        {
          "_id": "62b9b4a3377b3dfe5c6de7ad",
          "user": "62b9ab3d59a6d9d53ff18809",
          "title": "C-Programmin Language",
          "description": "C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs.",
          "tag": "personal",
          "date": "2022-06-27T13:46:11.131Z",
          "__v": 0
        },
        {
          "_id": "62b9b51a377b3dfe5c6de7b0",
          "user": "62b9ab3d59a6d9d53ff18809",
          "title": "C++-Programmin Language",
          "description": "C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes.",
          "tag": "personal",
          "date": "2022-06-27T13:48:10.447Z",
          "__v": 0
        },
        {
          "_id": "62b9bb09f01bcd213b2a6df9",
          "user": "62b9ab3d59a6d9d53ff18809",
          "title": "Python-Programmin Languagee",
          "description": "Python is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or C with Classes.",
          "tag": "personal",
          "date": "2022-06-27T14:13:29.911Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        // <NoteContext.Provider value={{state,update}}>
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;