import Image from 'next/image'
import { Container } from '@/components/atoms/container'

export const TrekPlannerImages = () => {
  return (
    <Container className="lg:w-1/2 grid grid-cols-2 grid-rows-6 h-[30vh] lg:h-[80vh] relative">
      <Image
        className="row-span-3 object-cover w-full h-full p-2"
        src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
        alt="image"
        width={1920}
        height={1080}
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2"
        src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
        alt="image"
        width={1920}
        height={1080}
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2"
        src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
        alt="image"
        width={1920}
        height={1080}
      />
      <Image
        className="row-span-3 object-cover w-full h-full p-2"
        src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="image"
        width={1920}
        height={1080}
      />
      <Image
        className="row-span-2 object-cover w-full h-full p-2"
        src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
        alt="image"
        width={1920}
        height={1080}
      />
      <Container className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 opacity-10 rounded-sm" />
    </Container>
  )
}
