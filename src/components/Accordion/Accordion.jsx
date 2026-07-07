import { useState } from "react"
import AccordionItem from "./AccordionItem"

function Accordion() {

    const data = [
        {
            title: 'Item 1',
            content: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
        },
         {
            title: 'Item 2',
            content: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
        },
         {
            title: 'Item 3',
            content: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
        }
    ]

    const [accordionOpenIndex , setAccordionOpenIndex] = useState([]);

    const toggleAccordion = (index) => {
        
            if(accordionOpenIndex.includes(index)){
                setAccordionOpenIndex(accordionOpenIndex.filter(id => id !== index))
            }else{
                setAccordionOpenIndex([...accordionOpenIndex, index])
            }
        
    
  };

  return (
    <div className="w-[50%] mx-auto mt-2 ">
        {data?.map((item, index) => (
            <AccordionItem  
                key={index} 
                title = {item.title} 
                content = {item.content}
                isOpen = {accordionOpenIndex.includes(index)}
                setIsOpen={() => toggleAccordion(index)}
              // isOpen={index === accordionOpenIndex ? true : false}
               // setIsOpen = {() => index === accordionOpenIndex ? setAccordionOpenIndex(null) : setAccordionOpenIndex(index)}
            />
        ))}
    </div>
  )
}

export default Accordion