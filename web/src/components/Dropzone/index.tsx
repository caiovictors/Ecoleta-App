import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css'
import {FiUpload} from 'react-icons/fi'

interface Props {
    onFileUploaded: (file: File) => void
}

const Dropzone: React.FC<Props> =  ({onFileUploaded}) => {

  const [selectedFileUrl, setSelectedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]

    const fileUrl = URL.createObjectURL(file)
    setSelectedFileUrl(fileUrl)
    onFileUploaded(file)

  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept= "image/*"/>
      {selectedFileUrl
        ? <img src={selectedFileUrl} alt="Point thumbnail"/>
        : (
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p><FiUpload/> Drag 'n' drop some files here, or click to select files</p>
            )
        }
    </div>
  )
}

export default Dropzone