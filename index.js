import{a as d,S as m,i as n}from"./assets/vendor-DxEWe7lX.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50361154-ffd6605c63a72c4acdaa235b2",g="https://pixabay.com/api/";async function h(s){const r={key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${f}</p>
          <p><b>Downloads:</b> ${p}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function w(){l.classList.add("visible")}function S(){l.classList.remove("visible")}const u=document.querySelector(".form"),P=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const r=P.value.trim();if(!r){n.warning({message:"Please enter a search term.",position:"topRight"});return}v(),w();try{const o=await h(r);o.hits.length===0?n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
