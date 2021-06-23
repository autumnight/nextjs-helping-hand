import MainLayout from '../components/MainLayout'
import Image from 'next/image';

export default function Home() {
  return (
    <MainLayout >
      Index page

      <div>
        <Image
          src="/vercel.svg"
          alt="Galaxy"
          width={1000}
          height={750}
        />
        <h3>Local Image</h3>
      </div>

      <div>
        <Image
          src="https://res.cloudinary.com/fay/image/upload/v1617047570/galaxy_ne5p8f.jpg"
          alt="Galaxy"
          width={1000}
          height={750}
        />
        <h3>Cloudinary - Static</h3>
      </div>
    </MainLayout>
  )
}
