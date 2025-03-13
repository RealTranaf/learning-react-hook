import React, { useEffect, useState } from 'react'



function PreviewAvatar() {
    const [photo, setPhoto] = useState()

    useEffect(() => {
        return () => {
            photo && URL.revokeObjectURL(photo.preview)
        }
    }, [photo])
    const handlePreviewAvatar = (event) => {
        const file = event.target.files[0]

        // console.log(URL.createObjectURL(file))
        file.preview = URL.createObjectURL(file)
        setPhoto(file)
    }
    return (
        <div>
            <input
                type='file'
                onChange={handlePreviewAvatar}
            >
            </input>
            {photo && (
                <img src={photo.preview} alt='' height='200p'></img>
            )}
        </div>
    )
}

export default PreviewAvatar