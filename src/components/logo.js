import Image from 'next/image'

export const Logo = ({ width, img }) => {
  return (
    <div className={`m-4 self-center`}>
      <Image
        src={img}
        alt="Logo de Arena"
        style={{ width: width, height: 'auto' }}
      />
    </div>
  )
}
