import { apiAxios } from "./counter";
import { Product } from "./models";
import { $app } from "./counter";
export const lazyLoader=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting){
       const url=entry.target.getAttribute('data-src')
       if (url){
           entry.target.setAttribute('src',url)
       }
      }
    })
  },{threshold:1});

export const drawData =async (data:Product[], html=$app?.innerHTML) => {
    let output=`${data.map(producto=>`
    <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-5">
      <div class="card h-100 w-75 justify-self-center">
          <img class="card-img-top cardImage" data-src="${producto.images[0]}" alt="Card image cap">
          <div class="card-body">
              <h5 class="card-title">${producto.title||"undefined"}</h5>
              <h5 class="card-subtittle">$${producto.price ||"undefined"}</h5>
              <p class="card-text">${producto.description}</p>
        </div>
    </div>
  </div>
  `).join("")}` 
  if($app)$app.innerHTML=html+output
  const cardImages=document.querySelectorAll(".cardImage")
  cardImages.forEach((card)=>lazyLoader.observe(card))
}

export let Offset=0  
export async function getpaginatedProducts(){
    const clientHeight=document.documentElement.clientHeight
    const scrollHeight= document.documentElement.scrollHeight
	const {scrollTop}=document.documentElement
	const scrollIsBottom=(scrollTop+clientHeight)>=scrollHeight-15
	if (scrollIsBottom){
        console.log(Offset);
        	
        Offset=Offset+10
		const {data}= await apiAxios<Product[]>(`?offset=${Offset}&limit=10`);
		drawData(data)
    }    
}

