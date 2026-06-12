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
        if(true) {
            if (accordionOpenIndex.includes(index)) {
                // If already open, filter it out to close it when we are trying to close 
                setAccordionOpenIndex(accordionOpenIndex.filter((i) => i !== index));
                } else {
                // If closed, add it to the array to open it alongside others
                setAccordionOpenIndex([...accordionOpenIndex, index]);
                }
        }else{
            setAccordionOpenIndex(accordionOpenIndex.includes(index) ? [] : [index])
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
                setIsOpen = {() => toggleAccordion(index)}
            />
        ))}
    </div>
  )
}

export default Accordion