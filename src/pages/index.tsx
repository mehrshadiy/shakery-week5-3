import Image from 'next/image'
import { Inter } from 'next/font/google'
import {SlideShow} from "@/components/SlideShow";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <SlideShow/>
    </main>
  )
}
