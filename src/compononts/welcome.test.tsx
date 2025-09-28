import { Welcome  } from "../compononts/welcome"
import {render,screen} from '@testing-library/react'

import { MemoryRouter } from "react-router-dom"

describe('welcometest',()=>{
    test('maintext',()=>{

    render(
        <MemoryRouter>
         <Welcome>

    </Welcome>
        </MemoryRouter>
   )
    const test=screen.getByText('WELCOME TO OUR STORE',{exact:false})

   expect(test).toBeInTheDocument();

   });  
      test('firsttext',async()=>{

    render(
        <MemoryRouter>
         <Welcome>

    </Welcome>
        </MemoryRouter>
   )
    const test=await screen.findByText('T-shirts')

   expect(test).toBeInTheDocument();

   });  

   beforeEach(() => {
  jest.useFakeTimers(); // نخلي التست يشتغل بفيك تايمر
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers(); // نرجع التايمرز الحقيقية
});
         test('secondtext',async()=>{

    render(
        <MemoryRouter>
         <Welcome>

    </Welcome>
        </MemoryRouter>
   )
    jest.advanceTimersByTime(4000);  
       const test=await screen.findByText('Shirts')

   expect(test).toBeInTheDocument();

   
 

   });  

           test('thirdtext',async()=>{

    render(
        <MemoryRouter>
         <Welcome>

    </Welcome>
        </MemoryRouter>
   )
    jest.advanceTimersByTime(7000);
  
       const test=await screen.findByText('Jackets')

   expect(test).toBeInTheDocument();


   },);  
              test('fourthtext',async()=>{

    render(
        <MemoryRouter>
         <Welcome>

    </Welcome>
        </MemoryRouter>
   )
    jest.advanceTimersByTime(10000);
  
       const test=await screen.findByText('Shoes')

   expect(test).toBeInTheDocument();


   },);  


   
})
                                                                                                                                                 



