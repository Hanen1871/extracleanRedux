import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div>
         

    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", background: "linear-gradient(336deg, rgba(192,184,184,0.8991246156665791) 0%, rgba(224,210,210,1) 58%, rgba(202,189,189,1) 77%, rgba(200,193,193,1) 80%, rgba(220,215,215,1) 82%, rgba(255,255,255,1) 100%)", marginTop:"25px", paddingTop:"25px"}}>
       <div> 

    <td>Informations
    < hr /> 
    <tr> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
    <g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395a20.4 20.4 0 0 1-2.876 2.416l-.426.29l-.2.133l-.377.24l-.336.205l-.416.242a1.87 1.87 0 0 1-1.854 0l-.416-.242l-.52-.32l-.192-.125l-.41-.273a20.6 20.6 0 0 1-3.093-2.566C4.676 16.589 3 14.074 3 11a9 9 0 0 1 9-9m0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996a18 18 0 0 0 2.222 1.91l.458.326q.222.155.427.288l.39.25l.343.209l.289.169l.455-.269l.367-.23q.293-.186.627-.417l.458-.326a18 18 0 0 0 2.222-1.91C17.728 15.361 19 13.322 19 11a7 7 0 0 0-7-7m0 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"/>
    </g></svg>
    RU ALI BEN GHDAHOM ,Gabes,Tunisia</tr>
    <tr><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><g fill="none">
    <rect width="27.813" height="19.938" x="2.094" y="6.031" fill="url(#f423id0)" rx="1.75"/>
    <rect width="27.813" height="19.938" x="2.094" y="6.031" fill="url(#f423id1)" rx="1.75"/>
    <path fill="url(#f423id2)" d="M16 6.031V25.97H3.844a1.75 1.75 0 0 1-1.75-1.75V7.78c0-.966.783-1.75 1.75-1.75z"/>
    <path fill="url(#f423idj)" d="M16 6.031V25.97H3.844a1.75 1.75 0 0 1-1.75-1.75V7.78c0-.966.783-1.75 1.75-1.75z"/>
    <path fill="url(#f423id3)" d="M16 6.031V25.97h12.156a1.75 1.75 0 0 0 1.75-1.75V7.78a1.75 1.75 0 0 0-1.75-1.75z"/>
    <path fill="url(#f423id4)" d="M16 6.031V25.97h12.156a1.75 1.75 0 0 0 1.75-1.75V7.78a1.75 1.75 0 0 0-1.75-1.75z"/>
    <path fill="url(#f423id5)" d="M16 6.031V25.97h12.156a1.75 1.75 0 0 0 1.75-1.75V7.78a1.75 1.75 0 0 0-1.75-1.75z"/>
    <path fill="url(#f423id6)" d="M16 6.031V25.97h12.156a1.75 1.75 0 0 0 1.75-1.75V7.78a1.75 1.75 0 0 0-1.75-1.75z"/>
    <g filter="url(#f423ide)">
    <path fill="url(#f423id7)" d="M2.094 24.219a.76.76 0 0 1 .358-.646l13.328-8.33a.4.4 0 0 1 .424 0l13.373 8.381c.205.128.33.353.33.595a1.75 1.75 0 0 1-1.75 1.75H3.843a1.75 1.75 0 0 1-1.75-1.75"/></g>
    <path fill="url(#f423id8)" d="M2.094 24.219a.76.76 0 0 1 .358-.646l13.328-8.33a.4.4 0 0 1 .424 0l13.373 8.381c.205.128.33.353.33.595a1.75 1.75 0 0 1-1.75 1.75H3.843a1.75 1.75 0 0 1-1.75-1.75"/>
    <path fill="url(#f423id9)" d="M2.094 24.219a.76.76 0 0 1 .358-.646l13.328-8.33a.4.4 0 0 1 .424 0l13.373 8.381c.205.128.33.353.33.595a1.75 1.75 0 0 1-1.75 1.75H3.843a1.75 1.75 0 0 1-1.75-1.75"/><g filter="url(#f423idf)"><path fill="url(#f423ida)" d="M2.094 7.781a.76.76 0 0 0 .358.646l13.328 8.33a.4.4 0 0 0 .424 0l13.373-8.381a.7.7 0 0 0 .33-.595a1.75 1.75 0 0 0-1.75-1.75H3.843a1.75 1.75 0 0 0-1.75 1.75"/><path fill="url(#f423idb)" d="M2.094 7.781a.76.76 0 0 0 .358.646l13.328 8.33a.4.4 0 0 0 .424 0l13.373-8.381a.7.7 0 0 0 .33-.595a1.75 1.75 0 0 0-1.75-1.75H3.843a1.75 1.75 0 0 0-1.75 1.75"/><path fill="url(#f423idc)" d="M2.094 7.781a.76.76 0 0 0 .358.646l13.328 8.33a.4.4 0 0 0 .424 0l13.373-8.381a.7.7 0 0 0 .33-.595a1.75 1.75 0 0 0-1.75-1.75H3.843a1.75 1.75 0 0 0-1.75 1.75"/><path fill="url(#f423idk)" d="M2.094 7.781a.76.76 0 0 0 .358.646l13.328 8.33a.4.4 0 0 0 .424 0l13.373-8.381a.7.7 0 0 0 .33-.595a1.75 1.75 0 0 0-1.75-1.75H3.843a1.75 1.75 0 0 0-1.75 1.75"/></g><g filter="url(#f423idg)"><path fill="#c2a5d0" d="M15.329 23.472a7 7 0 1 0 0-14a7 7 0 0 0 0 14"/></g><g filter="url(#f423idh)"><path fill="url(#f423idd)" d="M15.953 23a7 7 0 1 0 0-14a7 7 0 0 0 0 14"/></g><g filter="url(#f423idi)"><path fill="#e6e0ed" d="M15.953 11.5c-1.21-.02-2.36.44-3.22 1.3c-.87.85-1.34 1.99-1.34 3.2c0 2.48 2.02 4.5 4.5 4.5a.47.47 0 1 0 0-.94c-1.96 0-3.56-1.6-3.56-3.56c0-.96.38-1.86 1.06-2.53s1.59-1.03 2.55-1.03c1.93.03 3.51 1.65 3.51 3.62v.81a.67.67 0 0 1-1.34 0v-3.08a.47.47 0 0 0-.47-.47c-.26 0-.49.21-.49.47v.09c-.44-.35-.99-.57-1.6-.57c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54c.7 0 1.34-.29 1.8-.75c.28.5.81.84 1.42.84c.89 0 1.62-.73 1.62-1.62v-.81c0-2.47-1.99-4.52-4.44-4.55m-.39 5.96c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6s1.6.72 1.6 1.6s-.72 1.6-1.6 1.6"/></g><defs><linearGradient id="f423id0" x1="4.094" x2="29.906" y1="17.156" y2="16.969" gradientUnits="userSpaceOnUse"><stop stop-color="#dfd0e6"/><stop offset="1" stop-color="#eee5f8"/></linearGradient><linearGradient id="f423id1" x1="2.094" x2="5.132" y1="17.095" y2="17.095" gradientUnits="userSpaceOnUse"><stop stop-color="#d6babd"/><stop offset="1" stop-color="#dcc9dd" stop-opacity="0"/></linearGradient><linearGradient id="f423id2" x1="10.837" x2="10.075" y1="18.973" y2="17.786" gradientUnits="userSpaceOnUse"><stop offset=".114" stop-color="#dac3df"/><stop offset="1" stop-color="#dac3df" stop-opacity="0"/></linearGradient>
    <linearGradient id="f423id3" x1="21.094" x2="21.924" y1="19.281" y2="17.786" gradientUnits="userSpaceOnUse">
    <stop offset=".114" stop-color="#f6effe"/><stop offset="1" stop-color="#f3eafd" stop-opacity="0"/>
    </linearGradient><linearGradient id="f423id4" x1="20.156" x2="21.219" y1="13.938" y2="15.375" gradientUnits="userSpaceOnUse">
    <stop stop-color="#e3cdf7"/><stop offset="1" stop-color="#e9d9f8" stop-opacity="0"/>
    </linearGradient><linearGradient id="f423id5" x1="30.094" x2="26.375" y1="19.563" y2="19.563" gradientUnits="userSpaceOnUse">
    <stop stop-color="#f7f3fb"/>
    <stop offset="1" stop-color="#f0e9f8" stop-opacity="0"/>
    </linearGradient><linearGradient id="f423id6" x1="30.094" x2="28.868" y1="19.563" y2="19.563" gradientUnits="userSpaceOnUse">
    <stop offset=".199" stop-color="#ebe9ed"/><stop offset="1" stop-color="#ebe9ed" stop-opacity="0"/></linearGradient>
    <linearGradient id="f423id7" x1="16" x2="16" y1="27.719" y2="16.906" gradientUnits="userSpaceOnUse"><stop stop-color="#ddc5f1"/>
    <stop offset="1" stop-color="#e6daf1"/></linearGradient>
    <linearGradient id="f423id8" x1="7.486" x2="7.942" y1="20.106" y2="20.791" gradientUnits="userSpaceOnUse">
    <stop offset=".073" stop-color="#ddc2c8"/><stop offset="1" stop-color="#dfcdda" stop-opacity="0"/>
    </linearGradient><linearGradient id="f423id9" x1="22.581" x2="22.294" y1="19.159" y2="19.606" gradientUnits="userSpaceOnUse">
    <stop offset=".14" stop-color="#f8f3fd"/><stop offset="1" stop-color="#f1eaf9" stop-opacity="0"/></linearGradient>
    <linearGradient id="f423ida" x1="16" x2="16" y1="6.031" y2="16.819" gradientUnits="userSpaceOnUse"><stop stop-color="#e9e4e9"/>
    <stop offset="1" stop-color="#e7dcf0"/>
    </linearGradient><linearGradient id="f423idb" x1="9.81" x2="13.424" y1="12.878" y2="6.393" gradientUnits="userSpaceOnUse">
    <stop stop-color="#e1d5e7"/><stop offset="1" stop-color="#e1d5e7" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="f423idc" x1="2.094" x2="5.026" y1="7.669" y2="7.669" gradientUnits="userSpaceOnUse"><stop stop-color="#e1c1bc"/>
    <stop offset="1" stop-color="#e1c1bc" stop-opacity="0"/><stop offset="1" stop-color="#e9d1cd" stop-opacity="0"/>
    </linearGradient><linearGradient id="f423idd" x1="22.438" x2="10.688" y1="14.281" y2="18.594" gradientUnits="userSpaceOnUse">
    <stop stop-color="#347bd7"/>
    <stop offset="1" stop-color="#3477cb"/></linearGradient>
    <filter id="f423ide" width="27.813" height="11.538" x="2.094" y="14.431" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.75"/>
    <feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
    <feColorMatrix values="0 0 0 0 0.819608 0 0 0 0 0.654902 0 0 0 0 0.933333 0 0 0 1 0"/>
    <feBlend in2="shape" result="effect1_innerShadow_18_21780"/></filter>
    <filter id="f423idf" width="27.813" height="11.188" x="2.094" y="5.881" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.15"/><feGaussianBlur stdDeviation=".225"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.827451 0 0 0 0 0.686275 0 0 0 0 0.913725 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18_21780"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy=".25"/><feGaussianBlur stdDeviation=".3"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.870588 0 0 0 0 0.858824 0 0 0 0 0.854902 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18_21780" result="effect2_innerShadow_18_21780"/></filter><filter id="f423idg" width="17" height="17" x="6.829" y="7.972" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18_21780" stdDeviation=".75"/></filter><filter id="f423idh" width="14.4" height="14.5" x="8.803" y="8.75" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".25"/><feGaussianBlur stdDeviation=".125"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.192157 0 0 0 0 0.376471 0 0 0 0 0.721569 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18_21780"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.25"/><feGaussianBlur stdDeviation=".125"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.32549 0 0 0 0 0.341176 0 0 0 0 0.819608 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18_21780" result="effect2_innerShadow_18_21780"/>
    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dx="-.15" dy=".25"/><feGaussianBlur stdDeviation=".125"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/>
    <feColorMatrix values="0 0 0 0 0.317647 0 0 0 0 0.596078 0 0 0 0 0.882353 0 0 0 1 0"/><feBlend in2="effect2_innerShadow_18_21780" result="effect3_innerShadow_18_21780"/></filter><filter id="f423idi" width="9.5" height="9.651" x="10.993" y="11.249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-.15" dy=".15"/><feGaussianBlur stdDeviation=".125"/><feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix values="0 0 0 0 0.152941 0 0 0 0 0.341176 0 0 0 0 0.768627 0 0 0 1 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_18_21780"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_18_21780" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-.25"/><feGaussianBlur stdDeviation=".2"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.803922 0 0 0 0 0.713726 0 0 0 0 0.921569 0 0 0 1 0"/><feBlend in2="shape" result="effect2_innerShadow_18_21780"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-.15" dy=".15"/><feGaussianBlur stdDeviation=".15"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.917647 0 0 0 0 0.890196 0 0 0 0 0.952941 0 0 0 1 0"/><feBlend in2="effect2_innerShadow_18_21780" result="effect3_innerShadow_18_21780"/></filter><radialGradient id="f423idj" cx="0" cy="0" r="1" gradientTransform="rotate(123.69 2.481 9.934)scale(2.72523 19.1395)" gradientUnits="userSpaceOnUse"><stop offset=".342" stop-color="#c8a6d7"/><stop offset="1" stop-color="#d1bbdd" stop-opacity="0"/></radialGradient><radialGradient id="f423idk" cx="0" cy="0" r="1" gradientTransform="rotate(-138.233 15.658 -.181)scale(6.12906 27.1579)" gradientUnits="userSpaceOnUse"><stop stop-color="#fbf9fe"/><stop offset="1" stop-color="#f0ecf1" stop-opacity="0"/></radialGradient></defs></g></svg>
      
      extraservice@yahoo.com</tr>
      
      </td> 
    </div>
    <div >

<td >A propos-Nous 

< hr />
<Link to="/presentation" style={{color:"black"}}>
<tr>Présentation de la marque</tr>
</Link>
<tr>Notres Services</tr>
</td>

<tr>Contactez-Nous</tr>
</div>

<div style={{display:"flex",flexWrap:'wrap'}}>

<td>Nos Services
< hr />
     
<Link to="/livraison" style={{color:"black"}}>
<tr>Livraison et Echange</tr>

</Link>
</td>

      
      </div>
      </div>

<div style={{display:'flex', justifyContent:'center'
 
 , background: "linear-gradient(336deg, rgba(192,184,184,0.8991246156665791) 0%, rgba(224,210,210,1) 58%, rgba(202,189,189,1) 77%, rgba(200,193,193,1) 80%, rgba(220,215,215,1) 82%, rgba(255,255,255,1) 100%)", 
  paddingTop:"25px"}}>&copy; all copyright reserved {year}</div> 

</div> 
  )
}

export default Footer