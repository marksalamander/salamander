import React from 'react';

import p from "../css/projects.module.css";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function ParentWithChildren({ strings }) {
    if (!Array.isArray(strings)) {
      return null;
    }
  
    return (
        <div className={p.desc}>
        {strings.map((string, index) => (
          <p className={p.lang} key={index}>{string}</p>
        ))}
        </div>
    );
  }

export default function card({name, img, itemNo, link, desc}) {
    return (
        <a className={`${p.gallery_item} ${itemNo}`} data-index="1" href={`${link}`} target="_blank" rel="noreferrer">
            <div className={p.gallery_desc}>
                <h3 className={p.title}>
                    {name}
                </h3>
                <div className={p.desc_container}>
                    <ParentWithChildren strings={desc} />
                    <div className={p.github}>
                        GitHub <OpenInNewIcon style={{fontSize:"20px", marginLeft:"5px"}}/>
                    </div>
                </div>
            </div>
            <img className={p.img} src={img} alt=""></img>
        </a>
    )
}