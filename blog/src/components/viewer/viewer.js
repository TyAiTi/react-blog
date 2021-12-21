import {useState, useEffect} from 'react';
import Viewer from 'react-viewer';
 
export default function View() {
  const [ visible, setVisible ] = useState(false);
  const img1 = 'http://localhost/code/baohiem/check/1.jpg'
  const img2 = 'http://localhost/code/baohiem/check/2.jpg'
  const img3 = 'http://localhost/code/baohiem/check/3.jpg'
  const img4 = 'http://localhost/code/baohiem/check/4.jpg'

  let array = [img1,img2,img3,img4]


  const [imgOcrs, setImgOcrs] = useState([]);
  const [visibaleOcrIndex, setVisileOcrIndex] = useState(0);
  const [openOcr, setOpenOcr] = useState(false);
  const handleViewOcr = (index) => {
    setVisileOcrIndex(index);
    setOpenOcr(true);
  }

  const [imgAis, setImgAis] = useState([]);
  const [visibaleAiIndex, setVisileAiIndex] = useState(0);
  const [openAi, setOpenAi] = useState(false);
  const handleViewAi = (index) => {
    setVisileAiIndex(index);
    setOpenAi(true);
  }
  

  useEffect( ()=>{
    setImgOcrs( array.map( e=> ({src:e})))
  }, [])

  const ListImgOcr = imgOcrs.map( (e,index)=>{
    return(<div key={index}>
      {e.src}
    </div>)
  })
  return (
    <div>
      <button onClick={() => { setVisible(true); } }>show</button>
      <Viewer
      visible={visible}
      onClose={() => { setVisible(false); } }
      images={[{src: img1},{src: img2},{src: img3},{src: img4}]}
      activeIndex={1}
      />
      {/* <img src="http://localhost/code/baohiem/check/1.jpg" onClick={()=>alert('ok')} /> */}

      <button onClick={() => { handleViewOcr(1) }}>Kiểu thứ 2</button>
      <Viewer
        visible={openOcr}
        onClose={() => { setOpenOcr(false); }}
        images={imgOcrs}
        zoomSpeed={0.15}
        zIndex={99999999}
        activeIndex={visibaleOcrIndex}
        noFooter={true}
      />

      {/* <Viewer
        visible={openAi}
        onClose={() => { setOpenAi(false); }}
        images={imgAis}
        zoomSpeed={0.15}
        zIndex={99999999}
        activeIndex={visibaleAiIndex}
      /> */}

      {/* {ListImgOcr} */}

    </div>
  );
}