!function(){const e=document.querySelector(".profile__avatar");e.addEventListener("click",(function(t){t.stopPropagation(),e.classList.toggle("scale")}));const t=document.getElementById("burger"),o=(document.getElementById("sidebar"),document.getElementById("page")),c=document.body;function n(){c.classList.remove("show-sidebar"),document.querySelector(".page__mask").remove()}t.addEventListener("click",(e=>{c.classList.contains("show-sidebar")?n():function(){let e=document.createElement("div");e.classList.add("page__mask"),e.addEventListener("click",n),o.appendChild(e),c.classList.add("show-sidebar")}()}));const s=document.querySelector("#articles__link"),l=document.querySelector("#subnav");s.addEventListener("click",(function(){l.classList.toggle("subnav-active")}))}(),function(){const e=document.body,t=document.querySelectorAll("[data-modal]"),o=document.querySelectorAll(".modal__close"),c=document.querySelectorAll(".modal");function n(t){t.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{t.classList.remove("show"),e.classList.remove("no-scroll")}),200)}t.forEach((t=>{t.addEventListener("click",(t=>{let o=t.currentTarget.getAttribute("data-modal"),c=document.getElementById(o),n=c.querySelector(".modal__content");n.addEventListener("click",(e=>{e.stopPropagation()})),c.classList.add("show"),e.classList.add("no-scroll"),setTimeout((()=>{n.style.transform="none",n.style.opacity="1"}),1)}))})),o.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget.closest(".modal"))}))})),c.forEach((e=>{e.addEventListener("click",(e=>{n(e.currentTarget)}))}))}(),document.querySelectorAll("[data-autoresize]").forEach((e=>{let t=e.offsetHeight;e.addEventListener("input",(e=>{let o=e.target;o.style.height=t+"px",o.style.height=o.scrollHeight+"px"}))}));