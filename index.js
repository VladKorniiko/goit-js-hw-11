import{a as u,i as l,S as f}from"./assets/vendor-lDhL-8I6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();function p(r){const o={baseURL:"https://pixabay.com/api/",params:{key:"49660701-34943155f6893778b93ecffed",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:"true"}};return u(o).then(i=>i.data.hits).catch(i=>l.show({message:`Ooops, something went wrong, try again. ${i}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"}))}let n=null;const d=document.querySelector(".loader");function h(r){const o=document.querySelector(".gallery");let i=[];r.forEach(e=>{i.push(`<li class="gallery-item">
	<a class="gallery-link" href="${e.webformatURL}">
  <div class="image-wrapper">
    <img 
      class="gallery-image" 
      src="${e.largeImageURL}" 
      alt="${e.tags}" 
    />
    
    <div class="overlay-box">
      <div class="in-list-container">
        <h2 class="in-list-title">Likes</h2>
        <p class="in-list-p">${e.likes}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Views</h2>
        <p class="in-list-p">${e.views}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Comments</h2>
        <p class="in-list-p">${e.comments}</p>
      </div>
      <div class="in-list-container">
        <h2 class="in-list-title">Downloads</h2>
        <p class="in-list-p">${e.downloads}</p>
      </div>
    </div>
  </div>
</a>
   
</li>`)}),o.innerHTML=i.join(""),n?n.refresh():n=new f(".gallery a",{captionsData:"alt",captionDelay:250,download:!0})}function g(){const r=document.querySelector(".gallery");r.innerHTML="",n&&(n.destroy(),n=null)}function m(){d.classList.remove("display-none")}function y(){d.classList.add("display-none")}const c=document.querySelector(".form");c.addEventListener("submit",v);function v(r){r.preventDefault(),m(),g();const o=c.elements["search-text"].value;p(o).then(e=>{e.length===0&&l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"#fff",backgroundColor:"red"}),h(e)}).catch(e=>{l.show({message:`Ooops, something went wrong, try again. ${e}`,position:"topRight",messageColor:"#fff",backgroundColor:"red"})}).finally(()=>{y()}),c.reset()}
//# sourceMappingURL=index.js.map
