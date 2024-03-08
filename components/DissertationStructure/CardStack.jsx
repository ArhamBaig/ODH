import React from 'react'

const CardStack = () => {
  return (
    <div className='flex justify-center items-center'>
        
        <ul className='cards'>
            
            <Card id={'card1'} heading={"Introduction"} desc={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolorem quas, eius ipsum ut error dolore beatae molestias ipsa animi debitis tempora mollitia culpa quam consequuntur nobis! Id, ea? Quaerat!</>}/>
            <Card id={'card2'} heading={"Literature Review"} desc={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolorem quas, eius ipsum ut error dolore beatae molestias ipsa animi debitis tempora mollitia culpa quam consequuntur nobis! Id, ea? Quaerat!</>}/>
            <Card id={'card3'} heading={"Methodology"} desc={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolorem quas, eius ipsum ut error dolore beatae molestias ipsa animi debitis tempora mollitia culpa quam consequuntur nobis! Id, ea? Quaerat!</>}/>
            <Card id={'card4'} heading={"Reviews And Discussion"} desc={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolorem quas, eius ipsum ut error dolore beatae molestias ipsa animi debitis tempora mollitia culpa quam consequuntur nobis! Id, ea? Quaerat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dolor dicta similique ducimus temporibus ratione animi natus dolore molestiae praesentium facilis nemo placeat commodi voluptatum quae. Deserunt accusantium natus dolorem.</>}/>
            <Card id={'card5'} heading={"Conclusion"} desc={<>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolorem quas, eius ipsum ut error dolore beatae molestias ipsa animi debitis tempora mollitia culpa quam consequuntur nobis! Id, ea? Quaerat!</>}/>
        </ul>
    </div>
  )
}


const Card = ({ id, heading, desc }) => {
  return (
    <li className='card ' id={id} >
      <div className='card-body'>
        <h3 className='font-bold text-xl sm:text-2xl md:text-3xl'>{heading}</h3>
        <p className='mt-4 opacity-75 text-xm md:text-base'>{desc}</p>
      </div>
    </li>
  );
}
export default CardStack