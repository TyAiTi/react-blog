import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const MyComponent = () => {
  const [zoom1, setZoom1] = useState(false)
  const [zoom2, setZoom2] = useState(false)
  const [zoom3, setZoom3] = useState(false)
  const [zoom4, setZoom4] = useState(false)
  const [zoom5, setZoom5] = useState(false)
  const [zoom6, setZoom6] = useState(false)
  const [zoom7, setZoom7] = useState(false)
  const [zoom8, setZoom8] = useState(false)


  const handleZoom1 = useCallback(shouldZoom => {
    setZoom1(shouldZoom)
  }, [])
  const handleZoom2 = useCallback(shouldZoom => {
    setZoom2(shouldZoom)
  }, [])
  const handleZoom3 = useCallback(shouldZoom => {
    setZoom3(shouldZoom)
  }, [])

  return (
    <>
    ok
    <ControlledZoom isZoomed={zoom1} onZoomChange={handleZoom1}>
      <img
        src="http://localhost/code/BaoHiem/check/iphone.jpg"
        style={{height:'100px', width:'100px'}}
      />
    </ControlledZoom>
    ok
    <ControlledZoom isZoomed={zoom2} onZoomChange={handleZoom2}>
      <img
        src="http://localhost/code/BaoHiem/check/iphone.jpg"
        style={{height:'100px', width:'100px'}}
      />
    </ControlledZoom>
    ok


    
								
    </>
  )
  }

export default MyComponent