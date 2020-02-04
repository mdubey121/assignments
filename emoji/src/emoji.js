import React from 'react';
import { useParams } from 'react-router-dom'
import filterEmoji from './filterEmoji';
import CopyToClipboard from 'react-copy-to-clipboard'


export const Emoji = () =>{
	const {title} = useParams();
	const data = filterEmoji(title,1)[0];
	const codePointHex = data.symbol.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
	return(
		<div>
			<center>
				<img alt="emoji" src={src} height="30%" width="30%" className="mx-auto d-block"/>
				
				<h3> {data.title} </h3> 
				
				<p> {data.keywords} </p>

				<CopyToClipboard text={data.symbol}>
				<button className="btn btn-success" onclick={(e)=>{e.target.innerHTML="copied"}}>Copy to Clipboard </button>
				</CopyToClipboard>
            </center>
        </div>
     );
}
