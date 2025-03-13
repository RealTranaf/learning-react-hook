import React, { useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: "Skibidi"
    }, 
    {
        id: 2,
        name: "Sigma"
    },
    {
        id: 3,
        name: "Rizzler"
    },
]

function ChatApp() {
    const [lessonId, setLessonId] = useState(1)

    const handleComment = ({detail}) => {
        console.log(detail)
    }
    useEffect(() => {
        // console.log(lessonId)

        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatApp