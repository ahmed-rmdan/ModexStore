import { render,screen} from '@testing-library/react'
import { Offers } from './offers'
import { MemoryRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  *  as api  from '../https/https';
describe('testhttp',()=>{
   test('offersthtp',async()=>{

const queryclient=new QueryClient()
    render(
        <QueryClientProvider client={queryclient} >
                    <MemoryRouter>
        <Offers></Offers>
    </MemoryRouter>
             
        </QueryClientProvider>
  
    
)

const data=await screen.findAllByRole('list')

expect(data).not.toHaveLength(0)
})

   test('offersthtpmock',async()=>{

    jest.spyOn(api, "getalloffers").mockResolvedValueOnce({
    products: [
      {
        id: "1",
        name: "Mocked Product",
        moreinfo: "Some info",
        mainimg: "mock.jpg",
        newprice: 100,
        oldprice: 150,
        slideimg: "mock2.jpg",
        type: "Shirt",
        offer: true,
      },
    ],
  });

const queryclient=new QueryClient()
    render(
        <QueryClientProvider client={queryclient} >
                    <MemoryRouter>
        <Offers></Offers>
    </MemoryRouter>
             
        </QueryClientProvider>
  
    
)

const data=await screen.findAllByRole('list')

expect(data).not.toHaveLength(0)
})

})

