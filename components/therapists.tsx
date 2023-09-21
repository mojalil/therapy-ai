import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


export default function Therapist({therapistImage}:{therapistImage: string}) {
  return (
      <div className="relative"><Image
      src= {therapistImage}
      width={300}
      height={300}
      alt="Picture of the author"
      className="m-9"
    /><Button className="absolute bottom-0 right-0 bg-grey-500 text-white p-2 rounded hover:bg-green-800 m-2">Chat</Button></div>
      
  // <Link href="/chat">
  // <Image
  //       src="/therapist_1.png"
  //       width={300}
  //       height={300}
  //       alt="Picture of the author"
  //       className="m-9" />
  // </Link>
  )

}