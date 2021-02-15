import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
const FCS = require('fcs')
function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('acceptedFiles', acceptedFiles)
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        console.log('reader', reader)
        // arrayBuffer
        const binaryStr = reader.result
        console.log('binaryStr', binaryStr)
        const buffer = Buffer.from(binaryStr, 'binary')
        console.log('buffer', buffer)
        const FCSfile = new FCS({}, buffer)
        console.log('FCSfile', FCSfile)
      }
      console.log('file', file)
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone
