  import './style.scss'
  import { apiAxios,} from './counter'
  import { Product } from './models'
import { drawData, getpaginatedProducts } from './utils'

const {data}= await apiAxios<Product[]>(`?offset=0&limit=10`);
drawData(data,"")

window.addEventListener("scroll",getpaginatedProducts)

