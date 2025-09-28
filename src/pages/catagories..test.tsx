import {  render,screen } from "@testing-library/react";
import { Catagories } from "./catagories";
import { MemoryRouter } from "react-router-dom";
test('testbuttons',()=>{
 render(
    <MemoryRouter>
<Catagories>

 </Catagories>
    </MemoryRouter>
 
 )
 const buttons=screen.getAllByRole('button')
 expect(buttons).toHaveLength(6)



})